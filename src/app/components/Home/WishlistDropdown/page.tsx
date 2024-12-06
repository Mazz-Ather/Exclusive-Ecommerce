// components/WishlistDropdown.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiHeart, FiTrash2, FiShoppingCart } from 'react-icons/fi';

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
      image: "/img/headphones.png",
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
        <div className="absolute top-full right-0 mt-4 w-[400px] bg-white rounded-lg shadow-xl z-50 p-4 max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Wishlist (4)</h3>
            <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-100 transition-colors">
              Move All to Bag
            </button>
          </div>

          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-3">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full object-cover rounded-md"
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

                <div className="mt-3">
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex gap-2 mt-1">
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
        </div>
      )}
    </div>
  );
};

export default WishlistDropdown;
