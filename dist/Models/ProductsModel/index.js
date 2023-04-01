"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
});
const ProductsModel = (0, mongoose_1.model)('product', dataSchema);
exports.default = ProductsModel;
