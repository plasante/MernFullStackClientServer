import { Router } from 'express';
import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/stories.js";
const router = Router();
import authentication from "../middlewares/authentication.js";

// We check if a particular user is authenticated in the middleware before we go to the next action.
router.get('/', getStories);
router.post('/', authentication, createStory);
router.patch('/:id', authentication, updateStory);
router.delete('/:id', authentication, deleteStory);
router.patch('/:id/likeStory', authentication, likeStory);

export default router;