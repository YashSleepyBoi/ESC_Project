How to use the payment scripts:


1. CreateProduct.jsx:
    Input: name (string) - represents the item the customer is purchasing
           price (float) - represents the price of the item in DOLLARS

    Output: Product id: a string representing the product id in the STRIPE database e.g. "prod_ON0sUGAfM2sjH7"

2. MakePayment.jsx:
    Input: productID (STRING) the product id that createProduct.jsx Output
    Output: SessionID (string) - an id representing the checkout SessionID
    
    2.2 HOW TO USE MakePayment.jsx:
    (Copy this to the start of your code)
        import makePayment from "./Components/MakePayment"; // Change location of MakePayment as needed
        import { loadStripe } from '@stripe/stripe-js'; at the start of the file
        const publicKey = "pk_test_51NVr6zGQefOqlensGMp4GxW6VXWQRZmch5abWVQEnUpnYoDSJinGiCaBtQdCdQScarmDZz5zATvSchFYbKfVN42000ZBlrzXGW"
        const stripePromise = loadStripe(publicKey);
        // Function to call the payment page
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
        ...
        *IN YOUR CODE THAT HANDLES EVENT e.g. onclick*
        handlePayment(createdProduct)
        

    Note: if it does not work, run this line: npm install @stripe/react-stripe-js@1.11.0

3. DeactivateProduct.jsx:
    Input: productID (string) - String representing the product id
    Output: no output

        