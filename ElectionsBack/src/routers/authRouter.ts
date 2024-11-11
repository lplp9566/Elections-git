import { Router } from "express";
import { createUser, getAllCandidate, userlogin } from "../controller/userControler";

const router :Router = Router();
router.route("/api/register").post(createUser);
router.route("/api/login").post(userlogin);
router.route("/api/candidates").get(getAllCandidate);

export default router;