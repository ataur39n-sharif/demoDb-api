"use strict";
// {
//     "body": {
//     "app_key":"5tunt4masn6pv2hnvte1sb5n3j",
//         "app_secret":"1vggbqd4hqk9g96o9rrrp2jftvek578v7d2bnerim12a87dbrrka"
// },
//     "headers": {
//     "username":"sandboxTestUser",
//         "password":"hWD@8vtzw0"
// }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentConfig = {
    username: process.env.username,
    password: process.env.password,
    app: {
        app_key: process.env.app_key,
        app_secret: process.env.app_secret
    },
    urls: {
        grant_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
        refresh_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh",
        create_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
        execute_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
        backend_callback_url: "http://localhost:5000/api/bkash/callback",
        frontend_success_url: process.env.frontend_success_url,
        frontend_fail_url: process.env.frontend_success_url,
    }
};
exports.default = PaymentConfig;
