import {Router} from "express";
import ProductRoute from "./ProductRoute";

const rootRouter: Router = Router()

rootRouter
    .use('/products', ProductRoute)

export default rootRouter