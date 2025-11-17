import express from "express";
import { requireAuth } from "@clerk/express";
import { createOrder, markBookingPaid } from "../controller/paymentController.js";

const router = express.Router();

router.post("/create-order", requireAuth(), createOrder);
router.post("/mark-paid", requireAuth(), markBookingPaid);

export default router;
