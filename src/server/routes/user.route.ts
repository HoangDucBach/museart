import express from "express";
import {validateUserData} from "../middlewares/user.middleware";
import {UserControllerInstance} from "../controllers/user.controller";
import {authenticateAdmin} from "../middlewares/auth.middleware";

export const router = express.Router();

router.route("/")
    .post(validateUserData)
    .get((req, res) => {
        res.send("Get all users");
    });
router.route("/signup").post(validateUserData, UserControllerInstance.signUp);
router.route("/signin").post(UserControllerInstance.signIn);

router.get("/:id", authenticateAdmin, UserControllerInstance.get);
router.put("/:id", authenticateAdmin, UserControllerInstance.update);
router.delete("/:id", authenticateAdmin, UserControllerInstance.delete);
