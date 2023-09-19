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
exports.PaymentController = void 0;
const Config_1 = __importDefault(require("../../Config"));
const authHearder_1 = require("../../Utils/authHearder");
const create_payment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        const result = yield fetch(Config_1.default.urls.create_payment_url, {
            method: "POST",
            headers: authHearder_1.HeaderUtils.authHeaders(),
            body: JSON.stringify({
                mode: "0011",
                payerReference: " ",
                callbackURL: `${Config_1.default.urls.backend_callback_url}`,
                amount: amount ? amount : "100",
                currency: "BDT",
                intent: "sale",
                merchantInvoiceNumber: "Inv" + Date.now(),
            }),
        });
        const data = yield result.json();
        console.log({ data });
        if (data.statusCode === '0000' && data.statusMessage === 'Successful') {
            return res.status(201).json({
                success: true,
                data
            });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'Something went wrong'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
const paymentCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.status === "success") {
            const { paymentID } = req.query;
            const executeResponse = yield fetch(Config_1.default.urls.execute_payment_url, {
                method: "POST",
                headers: authHearder_1.HeaderUtils.authHeaders(),
                body: JSON.stringify({
                    paymentID,
                }),
            });
            const result = yield executeResponse.json();
            console.log(result);
            if (result.statusCode && result.statusCode === "0000") {
                return res.redirect(`${Config_1.default.urls.frontend_success_url}?status=${result.statusMessage}`);
            }
            else {
                return res.redirect(Config_1.default.urls.frontend_fail_url);
            }
        }
    }
    catch (e) {
        return res.redirect(Config_1.default.urls.frontend_fail_url);
    }
});
exports.PaymentController = {
    create_payment,
    paymentCallback
};
