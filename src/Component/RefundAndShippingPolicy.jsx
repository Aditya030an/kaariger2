import React from 'react';

const RefundAndShippingPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Shipping & Returns Policy</h1>
      <p className="mb-6 text-center">
        At <strong>Kaarigar & Co.</strong>, every product is lovingly handcrafted by skilled artisans. 
        We ensure each piece is prepared, packed, and shipped with utmost care to reach you safely and beautifully.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">1. Order Processing</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Order will be processed in <strong>8-10 days</strong>  and delivered in 3-4 business days post production.</li>
        <li>Since our products are handmade, please allow <strong>10–12 days</strong> for shipping and delivery after your order is placed.</li>
        <li>You’ll receive a tracking ID once your order has been dispatched via email or WhatsApp.</li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">2. Shipping & Delivery</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Standard delivery across India typically takes <strong>10–12 business days</strong> from the order date.</li>
        <li>Delivery timelines may vary based on your location, courier efficiency, or festive seasons.</li>
        <li>International orders may take <strong>15–21 business days</strong>, subject to customs clearance.</li>
        <li><strong>Kaarigar & Co.</strong> is not responsible for delays caused by courier partners, customs, or natural circumstances beyond our control.</li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">3. Shipping Charges</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Shipping costs are calculated at checkout based on weight and delivery address.</li>
        <li>Free shipping may be offered on specific collections or promotional campaigns.</li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">4. No Returns & No Refunds</h2>
      <p className="mb-4">
        All products at <strong>Kaarigar & Co.</strong> are handcrafted with individual attention, and therefore, all sales are final.<br />
        We do not accept returns, exchanges, or refunds once an order is placed.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">5. Order Cancellations</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Orders cannot be cancelled once they are processed or dispatched.</li>
        {/* <li>Cancellation requests within <strong>24 hours</strong> of placing the order may be accepted if production or packing has not yet begun.</li> */}
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-semibold mb-3">6. Incorrect Address / Failed Delivery</h2>
      <p className="mb-4">
        Please ensure your delivery address and contact details are accurate.<br />
        In case of failed delivery due to incorrect address or non-availability, re-shipping costs (if applicable) will be borne by the customer.
      </p>

      <hr className="my-8 border-gray-300" />

      <p className="text-center text-sm text-gray-600 mt-10">
        For further assistance, please contact us at{' '}
        <a href="mailto:support@kaarigarandco.com" className="text-blue-600 hover:underline">
          support@kaarigarandco.com
        </a>.
      </p>
    </section>
  );
};

export default RefundAndShippingPolicy;
