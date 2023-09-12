"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderUtils = void 0;
const globalToken_1 = require("./globalToken");
const Config_1 = __importDefault(require("../Config"));
const authHeaders = () => {
    const token = globalToken_1.TokenUtils.getIdToken();
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: token,
        "x-app-key": Config_1.default.app.app_key,
    };
};
const tokenHeaders = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: Config_1.default.username,
        password: Config_1.default.password,
    };
};
exports.HeaderUtils = {
    authHeaders, tokenHeaders
};
