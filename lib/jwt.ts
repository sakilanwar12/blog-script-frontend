import jwt from "jsonwebtoken";


export interface TDecodedToken extends jwt.JwtPayload {
  userId: string;
  role: string;
}

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as TDecodedToken;
};
