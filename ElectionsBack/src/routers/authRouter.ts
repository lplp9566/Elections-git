import { Router } from "express";

const router :Router = Router();
router.route("api/register/").post();
router.route(" api/login/").post();
router.route("/candidates/").get();

export default router;