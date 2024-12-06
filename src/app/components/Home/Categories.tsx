// components/Categories.tsx
'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 1, name: 'Phones', image: '/c1 (5).png' },
    { id: 2, name: 'Computers', image: '/c1 (6).png' },
    { id: 3, name: 'SmartWatch', image: '/c1 (3).png' },
    { id: 4, name: 'Camera', image: '/cam1.jpg' },
    { id: 5, name: 'HeadPhones', image: '/c1 (2).png' },
    { id: 6, name: 'Gaming', image: '/c1 (1).png' },
    { id: 7, name: 'Tablets', image: '/tab2.jpg' },
    { id: 8, name: 'Speakers', image: '/s1.jpg' },
    { id: 9, name: 'Printers', image: '/p1.jpg' },
    { id: 10, name: 'Accessories', image: '/ac1.jpg' },
    // Add more categories as needed
  ];

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='max-w-[1420px] mx-auto px-4'>
      <div className="flex items-center gap-9 mb-8">
        <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <h2 className="text-lg font-bold text-[#DB4444]">Categories</h2>
      </div>

      <div className="flex flex-col md:flex-row  justify-between items-start md:items-center mb-8">
        <div className="flex gap-9">
          <h3 className="text-3xl font-bold mt-8">Browse By Categories</h3>
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

      {/* Scrollable Categories Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 w-max">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="min-w-[170px] h-[145px] border-2 border-black rounded-md 
                         flex flex-col items-center justify-center cursor-pointer
                         transition-all duration-300 hover:bg-[#DB4444] hover:text-white"
            >
              <div className="w-[56px] h-[56px] relative mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  objectFit="contain"
                />
              </div>
              <span className="text-base font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-black w-full mt-9 mb-9" />
    </div>
  );
};

export default Categories;
