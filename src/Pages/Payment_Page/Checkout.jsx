import {loadStripe} from '@stripe/stripe-js';
import "./Stylesheets/Checkout.css";

//
const stripePromise = await loadStripe('pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW');
// let stripePromise;
// const getStripe =() =>{
//     if (!stripePromise){
//         const stripePromise = loadStripe('pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW');
//     }
//     return stripePromise;
// }

const Checkout = () => {
    // Define the items theat they are buying
    const item = {
        price: "price_1NVsYhGQefOqlensMKcOmBV4",
        quantity: 1
    };

    //
    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    };


    const redirectToCheckout = async() => {
        console.log(item);
        console.log("redirect to checkout");
        const stripe = stripePromise;
        console.log(stripe)
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe Checkout Error:", error);
    };

    return (
        <div className="Wrapper">
             <div className='checkout-summary'><BookingSummary/></div>
            <label>PRICE: $0.01</label>
            <button onClick={redirectToCheckout}>BUY</button>
        </div>
    );


}

export default Checkout;
