import jwt from "jsonwebtoken";
import lodash from "lodash";

export const propertyImagesLimit = (val) => val.length <= 4;

export const issueToken = async (user) => {
  const { sign } = jwt;
  let token = await sign(user, process.env.SECRET, { expiresIn: 60 * 60 * 24 });
  return `Bearer ${token}`;
};

export const serializeUser = (user) => {
  const { pick } = lodash;
  return pick(user, [
    "id",
    "userName",
    "email",
    "bio",
    "sold",
    "experience",
    "city",
    "fullName",
    "avatarImage",
    "specialization",
  ]);
};
