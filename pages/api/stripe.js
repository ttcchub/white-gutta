import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if (req.method === 'POST') {

    
    try {
      const params = {
        submit_type: 'pay', 
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required',        
        shipping_options: [
          { shipping_rate: 'shr_1MacBSLX27mVeMm892noFsut' },
          { shipping_rate: 'shr_1MadSPLX27mVeMm82Q8KjntT' },
          { shipping_rate: 'shr_1MacBeLX27mVeMm8aI0Lya4h' },
        ],
        line_items: req.body.map((item) => {

          return {
            price_data: { 
              currency: 'EUR',
              
              product_data: { 
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),

        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/` ,
      }
       // Create Checkout Sessions from body params.
       const session = await stripe.checkout.sessions.create(params);

       res.status(200).json(session);
     } catch (err) {
       res.status(err.statusCode || 500).json(err.message);
     }
   } else {
     res.setHeader('Allow', 'POST');
     res.status(405).end('Method Not Allowed');
   }
 }
