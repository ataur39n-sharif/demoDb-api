import {NextFunction, Request, Response} from "express";
import PaymentConfig from "../Config";
import {HeaderUtils} from "../Utils/authHearder";
import {TokenUtils} from "../Utils/globalToken";

const generateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tokenResponse = await fetch(PaymentConfig.urls.grant_token_url, {
            method: "POST",
            headers: HeaderUtils.tokenHeaders(),
            body: JSON.stringify({
                app_key: PaymentConfig.app.app_key,
                app_secret: PaymentConfig.app.app_secret,
            }),
        });
        const tokenResult = await tokenResponse.json();
        
        TokenUtils.setIdToken(tokenResult?.id_token);
        next();
    } catch (e) {
        res.status(401).json({
            success: false,
            message: 'UnAuthorize!'
        })
    }
};

export default generateToken