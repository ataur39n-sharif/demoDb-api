"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductRoute_1 = __importDefault(require("./ProductRoute"));
const PaymentRoutes_1 = __importDefault(require("./PaymentRoutes"));
const rootRouter = (0, express_1.Router)();
rootRouter
    .use('/products', ProductRoute_1.default)
    .use('/bkash', PaymentRoutes_1.default);
exports.default = rootRouter;
