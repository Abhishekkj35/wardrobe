import express from "express"
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js"
import adminAuth from '../middleware/adminAuth.js'
import authUser from "../middleware/auth.js"

const orderRouter = express.Router();

//user features
orderRouter.post("/userorders", authUser, userOrders)

//payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/verify", authUser, verifyOrder)

//admin features
orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateStatus)

export default orderRouter;