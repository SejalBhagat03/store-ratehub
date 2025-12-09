import express from "express";
import { protect, ownerOnly } from "../middleware/authMiddleware.js";
import { createStore, getOwnerStore } from "../controllers/ownerController.js";

const router = express.Router();

router.post("/store", protect, ownerOnly, createStore);
router.get("/store", protect, ownerOnly, getOwnerStore);

export default router;
