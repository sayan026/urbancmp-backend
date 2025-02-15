import express from 'express';

//IMPORT ROUTES
import adminRoutes from "./admin/indexRouter.js";

const router = express.Router();

router.use('/admin', adminRoutes);

export default router;