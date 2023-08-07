import {loadStripe} from '@stripe/stripe-js';
import "./Stylesheets/Checkout.css";
import BookingSummary from './Components/BookingSummary';
import { useParams } from 'react-router-dom';
//
const stripePromise = await loadStripe('pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW');
// let stripePromise;
// const getStripe =() =>{
//     if (!stripePromise){
//         const stripePromise = loadStripe('pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW');
//     }
//     return stripePromise;
// }
function getParams() {
    const { h_id,r_id,price,start,end,guests,rooms} = useParams();
    const params = [ h_id,r_id,price,start,end,guests,rooms];
    return params;
}
 
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

    const params=getParams()

    return (
        <div className="Wrapper">
             <div className='checkout-summary'><BookingSummary params={params} /></div>
            {/* <label>PRICE: $0.01</label> */}
            <button onClick={redirectToCheckout}>BUY</button>
        </div>
    );


}

export default Checkout;
