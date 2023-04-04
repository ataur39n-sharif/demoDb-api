"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Router_1 = __importDefault(require("./Router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', Router_1.default);
const { MONGO_URI, PORT } = process.env;
if (MONGO_URI) {
    mongoose_1.default
        .connect(MONGO_URI)
        .then((result) => console.log('DB Connected'))
        .catch((err) => console.log(err.message));
}
app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`);
});
