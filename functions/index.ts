import * as functions from "firebase-functions";
import app from "../server/index";

export const api = functions.https.onRequest(app);