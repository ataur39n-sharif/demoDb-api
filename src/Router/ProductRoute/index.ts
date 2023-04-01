import {Router} from "express";
import productsController from "../../Controllers/ProductsController";

const ProductRoute: Router = Router()

ProductRoute
    .get('/', productsController.getAllProducts)
    .get('/search', productsController.searchProduct)
    .get('/:id', productsController.getProductById)
    .post('/', productsController.createProduct)
    .put('/:id', productsController.updateProduct)
    .delete('/:id', productsController.deleteProduct)

export default ProductRoute