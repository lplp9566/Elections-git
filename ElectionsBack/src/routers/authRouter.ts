import { Router } from "express";
import { createUser, getAllCandidate, getUsers, userlogin,checkToken } from "../controller/userControler";

const router :Router = Router();
router.route("/api/register").post(createUser);
router.route("/api/login").post(userlogin);
router.route("/api/candidates").get(getAllCandidate);
router.route("/api/getAllUsers").get(getUsers)
router.route("/api/checkToken").post(checkToken)

export default router;