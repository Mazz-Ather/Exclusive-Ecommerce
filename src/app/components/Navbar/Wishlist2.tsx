// components/Sale.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { FiHeart, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';

const BestSelling = () => {
  
  const products = [
    {
        id: 1,
        name: "iPhone 11 Pro",
        image: "/c11.png",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 2,
        name: "iPhone 11 Pro",
        image: "/b23.png",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 3,
        name: "iPhone 11 Pro",
        image: "/d11.png",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 4,
        name: "iPhone 11 Pro",
        image: "/e3.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }
  ];

  
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-8 mt-28">
      {/* Header */}
      {/* <div className="flex items-center gap-4 mb-8">
        <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <h2 className="text-lg font-bold text-[#DB4444]">JUST FOR YOU</h2>
      </div> */}

      <div className="flex flex-col md:flex-row  justify-between items-start md:items-center mb-8">
        <div className="flex gap-9">
          {/* <h3 className="text-3xl font-bold mt-8">JUST FOR YOU</h3> */}
          <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <h2 className="text-2xl -ml-6 mt-1 font-bold text-[#DB4444]">JUST FOR YOU</h2>
   
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-4 md:mt-0">
        <div className="flex justify-center mt-8">
        <button className="text-black border-2 border-black px-12 py-4 rounded hover:contrast-200 hover:scale-105 ease-in hover:shadow-red-500 hover:shadow-lg  duration-300  transition-colors">
 See ALL
        </button>
      </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-36 md:gap-20 lg:gap-11 py-11 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group relative h-[350px] w-[270px]">
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={280}
                height={280}
                className="w-full object-cover"
              />
              
              <div className="absolute top-3 left-3 bg-[#DB4444] text-white px-3 py-1 rounded">
                -{product.discount}%
              </div>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                  <FiHeart size={20} />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                  <FiEye size={20} />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 translate-y-full group-hover:translate-y-0 hover:contrast-200 transition-transform duration-300">
                Add to Cart
              </div>
            </div>

       <div className="mt-4">
              <h4 className="font-medium">{product.name}</h4>
              <div className="flex gap-2 mt-2">
                <span className="text-[#DB4444]">${product.currentPrice}</span>
                <span className="line-through text-gray-500">${product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className='sm text-gray-500'>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="h-[1px] bg-black w-full mt-9" /> */}
    </section>
  );
};export default BestSelling;
