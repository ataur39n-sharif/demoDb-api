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
const Config_1 = __importDefault(require("../Config"));
const authHearder_1 = require("../Utils/authHearder");
const globalToken_1 = require("../Utils/globalToken");
const generateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenResponse = yield fetch(Config_1.default.urls.grant_token_url, {
            method: "POST",
            headers: authHearder_1.HeaderUtils.tokenHeaders(),
            body: JSON.stringify({
                app_key: Config_1.default.app.app_key,
                app_secret: Config_1.default.app.app_secret,
            }),
        });
        const tokenResult = yield tokenResponse.json();
        globalToken_1.TokenUtils.setIdToken(tokenResult === null || tokenResult === void 0 ? void 0 : tokenResult.id_token);
        next();
    }
    catch (e) {
        res.status(401).json({
            success: false,
            message: 'UnAuthorize!'
        });
    }
});
exports.default = generateToken;
