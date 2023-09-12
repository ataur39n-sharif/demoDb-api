"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUtils = void 0;
let memory = {
    token: ''
};
const setIdToken = (token) => {
    // localStorage.setItem('idToken', token)
    memory.token = token;
};
const getIdToken = () => {
    const idToken = memory.token;
    return idToken;
};
exports.TokenUtils = {
    getIdToken,
    setIdToken
};
