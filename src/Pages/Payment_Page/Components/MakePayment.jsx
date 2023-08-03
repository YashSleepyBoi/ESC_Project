

const testingApiKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW";
const secretKey = 'sk_test_51NVr6zGQefOqlens4VR9ldLaxLaDM2xNpnnVNbHIT7tj3wNYaBo21u55OkeBqcHjSk07UdxnKvjGrQDrAN88OCHn00ayLw2AB1'
import Stripe from 'stripe';
const stripe = new Stripe(secretKey);
import {loadStripe} from '@stripe/stripe-js';

export default async function  makePayment(productID){
  // takes in the name of the ProductID and loads the stripe payment page
  // NOTE: the product should only have ONE price in it
    console.log(price);
    try {
        const product = await stripe.products.retrieve(productID);
        const prices = await stripe.prices.list({ product: productID });
        const price = prices.data[0].id;
        console.log(price);

        const item = {
            price: price,
            quantity: 1
        };

 

        const session = await stripe.checkout.sessions.create({
            line_items: [item],
            mode: "payment",
            success_url: `${window.location.origin}/success`, // Change the success page as needed
            cancel_url: `${window.location.origin}/cancel`, // Change the cancel page as needed
        });
        
        return session.id;
        

      } catch (error) {
        console.error('Error redirecting:', error.message);
        return null;
      }
}

