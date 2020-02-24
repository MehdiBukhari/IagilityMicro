import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../.env.production`;
    break;
    default:
    path = `${__dirname}/../.env`;
}
dotenv.config({ path: path });
export const UPLOAD_PATH=process.env.UPLOAD_PATH
export const NODE_SERVER_PORT = process.env.NODE_SERVER_PORT;
export const NODE_SERVER_URL = process.env.NODE_SERVER_URL;
export const MONGO_DB_URL = process.env.MONGO_DB_URL;
export const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
export const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
export const MONGO_DB_PORT = process.env.MONGO_DB_PORT;
export const Image_UPLOAD_PATH = process.env.Image_UPLOAD_PATH;
export const service = process.env.service;
export const Resume_UPLOAD_PATH = process.env.Resume_UPLOAD_PATH;
export const user = process.env.user;
export const pass = process.env.pass;