import express from "express";
import { saveData, getData } from "../../../controllers/admin/service/category/indexController.js";

const router = express.Router();

const middlewareFn = (req, res, next) => {
    next();
}

router.post('/add', middlewareFn, saveData);
router.get('/get', middlewareFn, getData);

export default router;