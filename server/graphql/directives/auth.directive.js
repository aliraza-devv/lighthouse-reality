import { defaultFieldResolver } from "graphql";
import ApolloServer from "apollo-server-express";
const { ApolloError, SchemaDirectiveVisitor } = ApolloServer;

export class IsAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      let [_, {}, { user, isAuth }] = args;
      if (isAuth) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new ApolloError(
          "You must be Authenticated User to Perform this Action."
        );
      }
    };
  }
}
