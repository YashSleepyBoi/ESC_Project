// THIS FILE IS AN EXAMPLE ON HOW TO USE THE PAYMENT

import "./Stylesheets/Checkout.css";
import createProduct from './Components/CreateProduct';
import React, { useState } from "react";
import deactivateProduct from "./Components/DeactivateProduct";
import makePayment from "./Components/MakePayment";
import { loadStripe } from '@stripe/stripe-js';

const publicKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW"
// Load Stripe on the client-side
const stripePromise = loadStripe(publicKey);

// Function to redirect to payment
async function handlePayment(productID) {
    const stripe = await stripePromise;
    try {
      const sessionId = await makePayment(productID); // Call the server-side function to create the session
      if (sessionId) {
        const result = await stripe.redirectToCheckout({ sessionId });
        if (result.error) {
          console.error('Error redirecting to checkout:', result.error);
        }
      }
    } catch (error) {
      console.error('Error handling payment:', error.message);
    }
}

const delay = ms => new Promise(
    // sleeps the program for N ms
  resolve => setTimeout(resolve, ms)
);



const createPage = () => {

    const [hotelLabel,setHotelLabel] = useState("");
    const [hotelPrice,setHotelPrice] = useState("");


    const handleSubmit = async(e) =>{
      // called when button is clicked
        e.preventDefault();
        const createdProduct = await createProduct(hotelLabel,parseFloat(hotelPrice));
        console.log("delaying program");

        // Call the payment page
        handlePayment(createdProduct)
      
        
        await delay(5000);

        // Deactivate the products ( comment out the handlepayment if you wanna test this)
        deactivateProduct(createdProduct);
    }
    
    
    return(
        <div className="Wrapper">
            <form onSubmit={handleSubmit}>
                <input
                id="name"
                name="hotel name"
                placeholder="name"
                onChange={(e) => setHotelLabel(e.target.value)}/>
                
                <input
                id="price"
                name="hotel price"
                placeholder="Price"
                onChange={(e) => setHotelPrice(e.target.value)}/>
            

            <button className="submitBtn" type="submit" onClick={onsubmit}>submit</button>
            </form>
        </div>

        
    )

}

export default createPage;