import { ApolloError } from "apollo-server-express";
import bcryptjs from "bcryptjs";
import { issueToken, serializeUser } from "../utils/helperFunctions.js";

//! For Testing Loaders
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const resolvers = {
  Query: {
    searchProperties: async (_, args, { Property }) => {
      const { searchPropertyInput } = args;
      console.log(searchPropertyInput.city);
      const shouldApplyFilter = searchPropertyInput !== undefined;
      let properties = await Property.find().populate("realtor");

      if (!shouldApplyFilter) {
        return properties;
      }

      if (searchPropertyInput.kind) {
        properties = properties.filter(
          (p) => p.kind === searchPropertyInput.kind
        );
      }

      if (searchPropertyInput.city && searchPropertyInput.for) {
        properties = properties.filter(
          (p) =>
            searchPropertyInput.for === p.for &&
            (p.city.includes(searchPropertyInput.city) ||
              searchPropertyInput.city.includes(p.city) ||
              searchPropertyInput.city === p.city)
        );
      }
      return properties;
    },
    searchRealtors: async (_, { city, name }, { Realtor }) => {
      let realtors = await Realtor.find();

      if (city && name) {
        realtors = realtors.filter(
          (r) =>
            (r.city === city ||
              r.city.includes(city) ||
              city.includes(r.city)) &&
            (r.fullName.includes(name) || name.includes(r.fullName))
        );

        return realtors;
      }

      if (city) {
        realtors = realtors.filter(
          (r) =>
            r.city === city || r.city.includes(city) || city.includes(r.city)
        );
        return realtors;
      }
    },
    searchListings: async (_, { id }, { Realtor }) => {
      try {
        let realtor = await Realtor.findById(id).populate("properties");
        return realtor.properties;
      } catch (err) {
        throw new ApolloError("Something went wrong. Try Again!!", 400);
      }
    },
    searchRequests: async (_, { id }, { Realtor }) => {
      try {
        let realtor = await Realtor.findById(id);
        return realtor.requests;
      } catch (err) {
        throw new ApolloError("Something went wrong. Try Again!!", 400);
      }
    },
    loginRealtor: async (_, { email, password }, { Realtor }) => {
      try {
        //* Find Realtor By Email
        let realtor = await Realtor.findOne({ email });
        if (!realtor) {
          throw new Error("Email Not Found!!");
        }
        //* Check for Password
        const { compare } = bcryptjs;
        let isMatch = await compare(password, realtor.password);
        if (!isMatch) {
          throw new Error("Invalid Password");
        }
        //* Issue New Token
        realtor = realtor.toObject();
        realtor.id = realtor._id;
        realtor = serializeUser(realtor);
        let token = await issueToken(realtor);
        return {
          token,
          realtor,
        };
      } catch (err) {
        throw new ApolloError(err.message, 403);
      }
    },
    authRealtorProfile: async (_, _args, { user }) => user,
  },
  Mutation: {
    createNewProperty: async (
      _,
      { newProperty },
      { Property, user, Realtor }
    ) => {
      let result = await Property.create({
        ...newProperty,
        realtor: user._id,
      });

      console.log(result);
      await Realtor.findOneAndUpdate(
        { _id: user._id },
        { $push: { properties: result._id } }
      );
      await result.populate("realtor");
      return result;
    },
    createPropertyRequest: async (_, { newReq }, { Realtor }) => {
      let { email, phone, name, message, id } = newReq;

      try {
        await Realtor.findOneAndUpdate(
          { _id: id },
          { $push: { requests: { email, name, phone, message } } }
        );

        return {
          message: "Successfully Created !",
        };
      } catch (err) {
        throw new ApolloError("Something Went Wrong. Try Again!!", 400);
      }
    },
    registerRealtor: async (_, { newRealtor }, { Realtor }) => {
      try {
        let { userName, email } = newRealtor;
        //* Check if Username is exists already
        let realtor;
        realtor = await Realtor.findOne({ userName });
        if (realtor) {
          throw new Error("Username is Already Taken. Please Try Again!");
        }
        //* Check if Email is exists already
        realtor = await Realtor.findOne({ email });
        if (realtor) {
          throw new Error("Email is Already Taken. Please Try Again!");
        }
        //* Create New User Instance
        realtor = new Realtor(newRealtor);
        //* Hash the Password
        const { hash } = bcryptjs;
        realtor.password = await hash(newRealtor.password, 10);
        //* Save Realtor
        let result = await realtor.save();
        result = result.toObject();
        result.id = result._id;
        result = serializeUser(result);
        //* Issue the Token
        let token = await issueToken(result);
        return {
          token,
          realtor: result,
        };
      } catch (err) {
        throw new ApolloError(err.message, 400);
      }
    },
  },
};
