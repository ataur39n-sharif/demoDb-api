"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generateToken_1 = __importDefault(require("../../Middleware/generateToken"));
const PaymentController_1 = require("../../Controllers/PaymentController");
const PaymentRoutes = (0, express_1.Router)();
PaymentRoutes.use(generateToken_1.default);
PaymentRoutes.post('/payment', PaymentController_1.PaymentController.create_payment);
PaymentRoutes.get('/callback', PaymentController_1.PaymentController.paymentCallback);
exports.default = PaymentRoutes;
