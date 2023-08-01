import Stripe from 'stripe';

const testingApiKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW";
const secretKey = 'sk_test_51NVr6zGQefOqlens4VR9ldLaxLaDM2xNpnnVNbHIT7tj3wNYaBo21u55OkeBqcHjSk07UdxnKvjGrQDrAN88OCHn00ayLw2AB1'
const stripe = Stripe(secretKey);


// NOTE STRIPE DOES NOT ALLOW DELETION OF PRODUCT AFTER A PRICE HAS BEEN ASSOCIATED WITH IT SO THE WORKAROUND IS TO SET IT TO INACTIVE

export default async function  deactivateProduct(productID){
    //Delete a product based on the given id
    try {
        console.log(productID);
        // Retrieve the product to check for associated prices
        const product = await stripe.products.retrieve(productID);
        // Retrieve the prices associated with the product
        const prices = await stripe.prices.list({ product: productID });

        // Detach all prices associated with the product
        // Check if the product has prices
        if (prices.data.length > 0) {
        // If the product has prices, deactivate them first
            for (const price of prices.data) {
                await stripe.prices.update(price.id, { active: false });
            }
        }

        console.log('Product deactivated successfully!');
        
    }
    catch(error){
        console.error('Error deactivating product', error.message);
    }
        
}