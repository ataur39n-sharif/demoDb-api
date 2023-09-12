import {Router} from "express";
import generateToken from "../../Middleware/generateToken";
import {PaymentController} from "../../Controllers/PaymentController";

const PaymentRoutes = Router()

PaymentRoutes.use(generateToken)

PaymentRoutes.post('/payment', PaymentController.create_payment)
PaymentRoutes.get('/callback', PaymentController.paymentCallback)


export default PaymentRoutes