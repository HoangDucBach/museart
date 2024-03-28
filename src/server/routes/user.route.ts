import express from "express";
import {validateUserData} from "../middlewares/user.middleware";
import {UserController} from "../controllers/user.controller";

export const router = express.Router();

router.route("/")
    .post(validateUserData)
    .get((req, res) => {
        res.send("Get all users");
    });
router.route("/signup").post(validateUserData, UserController.signUp);
router.route("/signin").post(UserController.signIn);