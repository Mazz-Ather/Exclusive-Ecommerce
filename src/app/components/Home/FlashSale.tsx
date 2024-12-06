// components/Sale.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { FiHeart, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';

import { useCart } from '@/app/components/Navbar/CartContext';
const Sale = () => {

  const { addToCart, cartCount } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
        id: 1,
        name: "iPhone 11 Pro",
        image: "/joy7.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 2,
        name: "iPhone 11 Pro",
        image: "/lcd2.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 3,
        name: "iPhone 11 Pro",
        image: "/hero1.png",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 4,
        name: "iPhone 11 Pro",
        image: "/ch1.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 5,
           name: "iPhone 11 Pro",
        image: "/g1.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 6,
        name: "iPhone 11 Pro",
        image: "/lap5.jpg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      }, {
        id: 7,
        name: "iPhone 11 Pro",
        image: "/p15.jpeg",
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4,
        reviews: 75
      },
    // ... your other products
  ];

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-8 mt-28">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <h2 className="text-lg font-bold text-[#DB4444]">TODAY&apos;S</h2>
      </div>

      {/* Sale Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex gap-9">
          <h3 className="text-3xl font-bold mt-8">Flash Sales</h3>
          <div className="flex items-center gap-4 ml-14">
            <div className="flex items-center mt-4">
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold mr-1 text-black">Days</span>
                <span className="text-4xl font-bold">{String(time.days).padStart(2, '0')}</span>
              </div>
              <span className="text-3xl font-bold mx-3 text-[#DB4444] mt-4">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold mr-1 text-black">Hours</span>
                <span className="text-4xl font-bold">{String(time.hours).padStart(2, '0')}</span>
              </div>
              <span className="text-3xl font-bold mx-3 text-[#DB4444] mt-4">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold mr-1 text-black">Minutes</span>
                <span className="text-4xl font-bold">{String(time.minutes).padStart(2, '0')}</span>
              </div>
              <span className="text-3xl font-bold mx-3 text-[#DB4444] mt-4">:</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold mr-1 text-black">Seconds</span>
                <span className="text-4xl font-bold">{String(time.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-4 md:mt-0">
          <button 
            onClick={handleScrollLeft}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiChevronLeft size={24} />
          </button>
          <button 
            onClick={handleScrollRight}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Products Scroll Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 w-max">
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] group relative">
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
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 
         translate-y-full group-hover:translate-y-0 transition-transform duration-300
         cursor-pointer"
         onClick={() => addToCart({
           id: product.id,
           name: product.name,
           image: product.image,
           price: product.currentPrice
         })}
    >
      Add to Cart
    </div>
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
                  </div><span className='sm text-gray-500'>({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#DB4444] text-white px-12 py-4 rounded hover:contrast-200 hover:scale-105 ease-in hover:shadow-red-500 hover:shadow-lg  duration-300  transition-colors">
          View All Products
        </button>
      </div>
      <div className="h-[1px] bg-black w-full mt-9" />
    </section>
  );
};

export default Sale;
