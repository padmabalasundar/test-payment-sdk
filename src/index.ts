import { PaymentStatusType } from "./types/payments";

export const authorizePayment = (amount: number): { status: PaymentStatusType } => {
  console.log(`Authorized payment of $${amount}`);
  return {
    status: 'AUTHORIZED'
  }
};