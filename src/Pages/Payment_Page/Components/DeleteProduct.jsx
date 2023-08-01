import Stripe from 'stripe';

const testingApiKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW";
const secretKey = 'sk_test_51NVr6zGQefOqlens4VR9ldLaxLaDM2xNpnnVNbHIT7tj3wNYaBo21u55OkeBqcHjSk07UdxnKvjGrQDrAN88OCHn00ayLw2AB1'
const stripe = Stripe(secretKey);


// NOTE STRIPE DOES NOT ALLOW DELETION OF PRODUCT AFTER A PRICE HAS BEEN ASSOCIATED WITH IT SO THE WORKAROUND IS TO SET IT TO INACTIVE

export default async function  deleteProduct(productID){
    //Delete a product based on the given id
    try {
        // Retrieve the product to check for associated prices
         const product = await stripe.products.retrieve(productID);
         console.log(product);
         const prices = await stripe.prices.list({ product: productID });

        // Check if the product has prices
        if (prices.data.length > 0) {
        // If the product has prices, delete or detach them first
            for (const price of prices.data) {
                console.log(price.id);

                //Delete the price
                await stripe.prices.update(price.id, { product: null });
            }
        }
        await stripe.products.del(productID);
        console.log('Product deleted successfully!');
    }
    catch(error){
        console.error('Error deleting product:', error.message);
    }
        
}