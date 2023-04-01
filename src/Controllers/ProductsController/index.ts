import {Request, Response} from "express";
import ProductsModel, {ProductDocument} from "../../Models/ProductsModel";

const productsController = {
    /*get all products */
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const {page, limit} = req.query
            const pageNumber = Number(page) || 1
            const dataLimit = Number(limit) || 100
            const products: ProductDocument[] = await ProductsModel.find()
                .skip((dataLimit * pageNumber) - dataLimit)
                .limit(dataLimit)
            return res.status(200).json(products);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
    /*get product by id */
    getProductById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const product: ProductDocument | null = await ProductsModel.findById(id);
            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
    /*create product*/
    createProduct: async (req: Request, res: Response) => {
        try {
            const product: ProductDocument = new ProductsModel({
                ...req.body,
            });
            product.thumbnail = "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            product.images = [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
            await product.save();
            return res.status(201).json(product);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
    /*update product*/
    updateProduct: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const product: ProductDocument | null = await ProductsModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
    /*delete product*/
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const product: ProductDocument | null = await ProductsModel.findByIdAndDelete(id);
            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
    /*search product*/
    searchProduct: async (req: Request, res: Response) => {
        try {
            const {q} = req.query

            const products: ProductDocument[] = await ProductsModel.find({title: {$regex: q, $options: 'i'}});
            return res.status(200).json(products);
        } catch (error) {
            if (error instanceof Error)
                return res.status(500).json({message: error.message});
        }
    },
}

export default productsController;