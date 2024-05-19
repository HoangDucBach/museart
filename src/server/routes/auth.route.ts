import express from "express";
import {validateUserData} from "../middlewares/user.middleware";
import {CartControllerInstance, UserControllerInstance} from "../controllers/user.controller";
import {authenticateAdmin, authenticateToken} from "../middlewares/auth.middleware";
import {apiRouter} from "./api.route";

export const router = express.Router();

router.route("/")
    .post(validateUserData);
// .get(authenticateAdmin, UserControllerInstance.getAll);
router.route("/signup").post(validateUserData, UserControllerInstance.signUp);
router.route("/signin").post(UserControllerInstance.signIn);

router.get("/:id", UserControllerInstance.get);
router.put("/:id", authenticateAdmin, UserControllerInstance.update);
router.delete("/:id", authenticateAdmin, UserControllerInstance.delete);

