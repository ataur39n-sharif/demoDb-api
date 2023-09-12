import {Router} from "express";
import ProductRoute from "./ProductRoute";
import PaymentRoutes from "./PaymentRoutes";

const rootRouter: Router = Router()

rootRouter
    .use('/products', ProductRoute)
    .use('/bkash', PaymentRoutes)

export default rootRouter