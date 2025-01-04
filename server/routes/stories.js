import { Router } from 'express';
import { getStories} from "../controllers/stories.js";

const router = Router();

router.get('/', getStories);

export default router;