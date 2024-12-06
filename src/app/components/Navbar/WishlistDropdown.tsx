// components/WishlistDropdown.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiHeart, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import BestSelling from '../Home/BestSelling';
import Wishlist2 from './Wishlist2';

const WishlistDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const wishlistItems = [
    {
      id: 1,
      name: "iPhone 11",
      image: "/img/hero1.png",
      discount: 55,
      currentPrice: 960,
      originalPrice: 1160,
      hasDiscount: true
    },
    {
      id: 2,
      name: "Gaming Headset",
      image: "/b11.png",
      currentPrice: 850,
      hasDiscount: false
    },{
      id: 1,
      name: "iPhone 11",
      image: "/ch1.jpg",
      discount: 55,
      currentPrice: 960,
      originalPrice: 1160,
      hasDiscount: true
    },
    {
      id: 2,
      name: "Gaming Headset",
      image: "/cam1.jpg",
      currentPrice: 850,
      hasDiscount: false
    },
    // Add more items as needed
  ];

  return (
    <div className='relative'>
      <button 
        className="text-black hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiHeart size={24} />
        <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
          4
        </span>
      </button>

      {isOpen && (
        <div className="fixed top-11 border-2 border[#DB4444] shadow-2xl backdrop-blur-md shadow-[#DB4444] right-0 left-0 mt-20 mx-auto max-w-[1420px] bg-white rounded-lg  z-50 p-6 h-[calc(80vh-5rem)] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-2xl">Wishlist (4)</h3>
            <button className="px-6 py-3 border border-black rounded-md hover:bg-[#DB4444] hover:text-white transition-colors">
              Move All to Bag
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                  {item.hasDiscount && (
                    <span className="absolute top-2 left-2 bg-[#DB4444] text-white px-2 py-1 rounded text-sm">
                      -{item.discount}%
                    </span>
                  )}
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <FiTrash2 size={20} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors">
                    <FiShoppingCart size={20} />
                    Add to Cart
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex gap-2 mt-2">
                    <span className={item.hasDiscount ? "text-[#DB4444]" : ""}>
                      ${item.currentPrice}
                    </span>
                    {item.hasDiscount && (
                      <span className="line-through text-gray-500">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Wishlist2/>
          
        </div>
      )}
    </div>
  );
};

export default WishlistDropdown;
