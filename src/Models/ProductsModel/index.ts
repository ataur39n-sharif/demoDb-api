import { Document, Model, model, Schema } from "mongoose";

export interface IProduct {
    title: string,
    description: string,
    price: number,
    images: string[],
    category: string,
    discountPercentage: number,
    thumbnail: string,
    brand: string,
    rating: number,
    stock: number
}

export interface ProductDocument extends IProduct, Document {
    title: string,
    description: string,
    price: number,
    images: string[],
    category: string,
    discountPercentage: number,
    thumbnail: string,
    brand: string,
    rating: number,
    stock: number
}

export interface ProductModel extends Model<ProductDocument> {
}


const dataSchema = new Schema<IProduct>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true }
})


const ProductsModel: ProductModel = model<ProductDocument, ProductModel>('product', dataSchema)

export default ProductsModel