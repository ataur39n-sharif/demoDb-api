"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../../Controllers/ProductsController"));
const ProductRoute = (0, express_1.Router)();
ProductRoute
    .get('/', ProductsController_1.default.getAllProducts)
    .get('/search', ProductsController_1.default.searchProduct)
    .get('/:id', ProductsController_1.default.getProductById)
    .post('/', ProductsController_1.default.createProduct)
    .put('/:id', ProductsController_1.default.updateProduct)
    .delete('/:id', ProductsController_1.default.deleteProduct);
exports.default = ProductRoute;
