import {Request, Response} from "express";
import PaymentConfig from "../../Config";
import {HeaderUtils} from "../../Utils/authHearder";

const create_payment = async (req: Request, res: Response) => {
    try {
        const {amount} = req.body;

        const result = await fetch(PaymentConfig.urls.create_payment_url, {
            method: "POST",
            headers: HeaderUtils.authHeaders(),
            body: JSON.stringify({
                mode: "0011",
                payerReference: " ",
                callbackURL: `${PaymentConfig.urls.backend_callback_url}`,
                amount: amount ? amount : "100",
                currency: "BDT",
                intent: "sale",
                merchantInvoiceNumber: "Inv" + Date.now(),
            }),
        });
        const data = await result.json();

        if (data.statusCode === '0000' && data.statusMessage === 'Successful') {
            return res.status(201).json({
                success: true,
                data
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'Something went wrong'
            })
        }


    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }
}


const paymentCallback = async (req: Request, res: Response) => {
    try {
        if (req.query.status === "success") {

            const {paymentID} = req.query;

            const executeResponse = await fetch(PaymentConfig.urls.execute_payment_url, {
                method: "POST",
                headers: HeaderUtils.authHeaders(),
                body: JSON.stringify({
                    paymentID,
                }),
            });
            const result = await executeResponse.json();

            if (result.statusCode && result.statusCode === "0000") {
                return res.redirect(
                    `${PaymentConfig.urls.frontend_success_url}?data=${result.statusMessage}`
                );
            } else {

                return res.redirect(PaymentConfig.urls.frontend_fail_url);
            }
        }
    } catch (e) {

        return res.redirect(PaymentConfig.urls.frontend_fail_url);
    }
}


export const PaymentController = {
    create_payment,
    paymentCallback
}