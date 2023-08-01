import Stripe from 'stripe';

const testingApiKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW";
const secretKey = 'sk_test_51NVr6zGQefOqlens4VR9ldLaxLaDM2xNpnnVNbHIT7tj3wNYaBo21u55OkeBqcHjSk07UdxnKvjGrQDrAN88OCHn00ayLw2AB1'
const stripe = Stripe(secretKey);

export default async function  createProduct(name,inputPrice){
  // takes in the name of the product (String) Takes the price in as dollars (float)
    console.log(price);
    try {
        // Convert the input price to float and conver to cents
        inputPrice = parseFloat(inputPrice)* 100;
        
        // create the product
        const product = await stripe.products.create({
          name: name,
        });
        console.log("Product created with id: " + product.id);

        //create the price
        const price = await stripe.prices.create({
          unit_amount: inputPrice,
          currency: 'sgd',
          product: product.id,
        });

        return product.id;
        

      } catch (error) {
        console.error('Error creating product:', error.message);
      }
}