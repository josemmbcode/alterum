import React from "react";

const ShoppingCart = () => {
  const products = [
    {
      imageUrl: "https://dummyimage.com/200x200",
      name: "Product 1",
      quantity: 2,
      total: 19.99,
    },
    {
      imageUrl: "https://dummyimage.com/200x200",
      name: "Product 2",
      quantity: 1,
      total: 9.99,
    },
    {
      imageUrl: "https://dummyimage.com/200x200",
      name: "Product 3",
      quantity: 3,
      total: 29.99,
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-sm font-medium p-12">Product</p>
        </div>
        <div className="flex-none mx-4 w-12 sm:w-24">
          <div className="mx-2 text-sm  p-1 text-center">Quantity</div>
        </div>
        <div className="flex-initial w-12 sm:w-24 mx-4">
          <p className="text-sm font-medium text-center">Total</p>
        </div>
      </div>
      {products.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="flex-1 flex items-center">
            <div className="w-32 h-32">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="text-sm font-medium mx-2">{item.name}</p>
          </div>
          <div className="flex flex-none items-center mx-4 w-12 sm:w-24 justify-center">
            <div className="p-1 text-sm text-white bg-celeste rounded-full hover:bg-gray-300 focus:outline-none">
              -
            </div>
            <span className="mx-2 text-sm">{item.quantity}</span>
            <div className="p-1 text-sm text-white bg-celeste rounded-full hover:bg-gray-300 focus:outline-none">
              +
            </div>
          </div>
          <div className="mx-4 w-12 sm:w-24 flex-initial">
            <p className="text-sm font-medium text-center">
              ${item.total.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
