import express from "express";
import { saveData } from "../../../controllers/admin/service/category/indexController.js";

const router = express.Router();

const middlewareFn = (req, res, next) => {
    next();
}

router.post('/add', middlewareFn, saveData);

export default router;