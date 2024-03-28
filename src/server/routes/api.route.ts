import express from "express";
import {authenticateToken} from "../middlewares/auth.middleware";

export const apiRouter = express.Router();
apiRouter.route("/*")
    .get(authenticateToken);
apiRouter.route("/artworks")
    .get((req, res) => {
        res.send("Get all artworks");
    });