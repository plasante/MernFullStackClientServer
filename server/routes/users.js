import { Router } from 'express';
import { login, signup  } from "../controllers/users.js";

const router = Router();

// localhost:5001/user/login
router.post("/login", login);
// loginhost:5001/user/signup
router.post("/signup", signup);

export default router;