import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(
"pk_test_51OH51CCKbPrjeIaSkVxGvfoZCeqplYvlRulnJMbkmvQiXShIcKfICJqCGb3fp9AbBTbBA6jFHvZGQTRPu8AnTUW100HI9Al0UK"
);
const Payment = () => {
    return (
        <div>
         
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;