import React from 'react';
import Image from 'next/image';
import Products from '../data/product.json'
import CartButton from '@/props/butonCart';


export default function Cards (){
  // Get the first 4 products from the array
  const productsToShow = Products.slice(0, 5);

  const usdToIdr = (usd) => {
    const exchangeRate = 15000; // Example exchange rate
    const idr = usd * exchangeRate;
    return new Intl.NumberFormat('id-ID').format(idr); // Format with delimiter for IDR
  };

    return(
        <>
      <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold mt-8 mb-4">Most Sold 🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {productsToShow.map(product => (
          <div key={product.id} className="bg-white p-5 shadow-md rounded-md">
            <Image
             src={product.image}
             width={200}
             height={200}
              alt={product.name} 
              className="w-full object-cover mb-4 rounded-md" />
            <h2 className="text-sm font-semibold mb-2">{product.name}</h2>
            <p className="text-white bg-red-800 rounded-xl text-center text-sm w-28 mb-2">{product.description}</p>
            <p className="text-gray-800 text-sm">Start from: Rp {usdToIdr(product.price)}</p>
          </div>
        ))}
        {/* If there are fewer than 4 products, create placeholder cards */}
        {productsToShow.length < 5 && (
          <React.Fragment>
            {[...Array(5 - productsToShow.length)].map((_, index) => (
              <div key={index} className="bg-gray-200 p-4 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-2">Placeholder</h2>
                <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-800 font-bold">Price: $0.00</p>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
    </>
    )
    
}