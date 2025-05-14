"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizePayment = void 0;
const authorizePayment = (amount) => {
    console.log(`Authorized payment of $${amount}`);
    return {
        status: 'AUTHORIZED'
    };
};
exports.authorizePayment = authorizePayment;
