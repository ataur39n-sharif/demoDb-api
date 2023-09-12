import {TokenUtils} from "./globalToken";
import PaymentConfig from "../Config";

const authHeaders = () => {
    const token = TokenUtils.getIdToken();
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: token as string,
        "x-app-key": PaymentConfig.app.app_key,
    };
};

const tokenHeaders = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: PaymentConfig.username,
        password: PaymentConfig.password,
    };
};

export const HeaderUtils = {
    authHeaders, tokenHeaders
};
