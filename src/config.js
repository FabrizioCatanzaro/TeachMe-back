import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "sa";
export const DB_PASSWORD = process.env.DB_PASSWORD || "yourStrong#Password";
export const DB_SERVER = process.env.DB_SERVER || "teachme.database.windows.net";
export const DB_DATABASE = process.env.DB_DATABASE || "TeachMe";
export const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;
export const APP_URL = 'https://teachme-learn.netlify.app'
export const BACK_URL = process.env.BACK_URL
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
export const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
export const MP_KEY = process.env.MP_KEY;

