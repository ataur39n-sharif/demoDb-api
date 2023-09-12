"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsModel_1 = __importDefault(require("../../Models/ProductsModel"));
const productsController = {
    /*get all products */
    getAllProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { page, limit } = req.query;
            const totalProducts = yield ProductsModel_1.default.countDocuments();
            const pageNumber = Number(page) || 1;
            const dataLimit = Number(limit) || totalProducts;
            const products = yield ProductsModel_1.default.find()
                .skip((dataLimit * pageNumber) - dataLimit)
                .limit(dataLimit);
            return res.status(200).json({
                products,
                page: pageNumber,
                limit: dataLimit,
                total: totalProducts
            });
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
    /*get product by id */
    getProductById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield ProductsModel_1.default.findById(id);
            res.status(200).json(product);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
    /*create product*/
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = new ProductsModel_1.default(Object.assign({}, req.body));
            product.thumbnail = "https://i.dummyjson.com/data/products/1/thumbnail.jpg";
            product.images = [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ];
            yield product.save();
            console.log(product);
            return res.status(201).json(product);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
    /*update product*/
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield ProductsModel_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(product);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
    /*delete product*/
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield ProductsModel_1.default.findByIdAndDelete(id);
            res.status(200).json(product);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
    /*search product*/
    searchProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { q } = req.query;
            const products = yield ProductsModel_1.default.find({ title: { $regex: q, $options: 'i' } });
            return res.status(200).json(products);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).json({ message: error.message });
        }
    }),
};
exports.default = productsController;
