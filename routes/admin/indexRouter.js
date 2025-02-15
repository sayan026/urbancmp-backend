import express from 'express';
import signUp from '../../controllers/admin/signupController.js';
import signIn from '../../controllers/admin/signinController.js';
import authCheck from '../../controllers/admin/authCheckController.js';
import serviceCategory from "./service/categoryRouter.js";

const router = express.Router();

router.use('/service/category', serviceCategory);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/authenticate', authCheck);

export default router;