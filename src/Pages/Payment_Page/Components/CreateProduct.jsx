import Stripe from 'stripe';

const testingApiKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW";
const secretKey = 'sk_test_51NVr6zGQefOqlens4VR9ldLaxLaDM2xNpnnVNbHIT7tj3wNYaBo21u55OkeBqcHjSk07UdxnKvjGrQDrAN88OCHn00ayLw2AB1'
const stripe = Stripe(secretKey);

export default async function  createProduct(name,inputPrice){
  // takes in the name of the product (String) and the Price in dollars (float)
    console.log(price);
    try {
        // create the product
        const product = await stripe.products.create({
          name: name,
        });
        console.log("Product created with id: " + product.id);

        //create the price
        const price = await stripe.prices.create({
          unit_amount: inputPrice/100,
          currency: 'sgd',
          product: product.id,
        });

        return product.id;
        

      } catch (error) {
        console.error('Error creating product:', error.message);
      }
}