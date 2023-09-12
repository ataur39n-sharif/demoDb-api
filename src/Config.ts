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


const PaymentConfig = {
    username: process.env.username as string,
    password: process.env.password as string,
    app: {
        app_key: process.env.app_key as string,
        app_secret: process.env.app_secret as string
    },
    urls: {
        grant_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
        refresh_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh",
        create_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
        execute_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
        backend_callback_url: process.env.backend_callback_url as string,
        frontend_success_url: process.env.frontend_success_url as string,
        frontend_fail_url: process.env.frontend_success_url as string,
    }
}

export default PaymentConfig