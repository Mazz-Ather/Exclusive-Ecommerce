// components/Hero.jsx
'use client';
import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
// components/Hero.jsx
const slides = [
    {
      logo: '/logo1.png',
      heading: 'iPhone 14 Series',
      image: '/hero1.png'
    },
    {
      logo: '/j4.jpg',  // Add your actual logo paths
      heading: 'Nike Air Jordan Shoes',
      image: '/j3.jpg'  // Add your actual image paths
    },
    {
      logo: '/logo3.jpg',
      heading: 'Casual Men Dressing',
      image: '/h3.jpg'
    },
    {
      logo: '/logo31.jpg',
      heading: 'Elevate Your Watch',
      image: '/h44.jpg'
    },
    {
      logo: '/logo51.jpg',
      heading: 'Unforgettable Signature Scents',
      image: '/h56.jpg'
    }
  ];
  

  const categories = [
    {
      name: "Woman's Fashion",
      subCategories: ['Abaya', 'Dupatta', 'Streetwear', 'Casual', 'Classic', 'Vintage Clothing', 'Formal Style']
    },
    {
      name: "Men's Fashion",
      subCategories: ['Business Casual', 'T-shirt', 'Biker', 'Pants', 'Dress Shirt']
    },
    { name: 'Electronics', subCategories: [] },
    { name: 'Home & Lifestyle', subCategories: [] },
    { name: 'Medicine', subCategories: [] },
    { name: "Baby's Toy", subCategories: [] },
    { name: 'Groceries', subCategories: [] },
    { name: 'Health & Beauty', subCategories: [] },
  ];

  const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);  
    
    return (
  <div className="flex flex-col md:flex-row min-h-[344px] mt-5 mx-auto max-w-[1455px] gap-4 p-4">
      {/* Left Section - Categories */}
      <div className="w-full md:w-1/4 bg-white">
  <ul className="space-y-2">
    {categories.map((category, index) => (
      <li key={index} className="relative group">
        <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <span>{category.name}</span>
          {category.subCategories.length > 0 && <FiChevronRight />}
        </div>
        
        {/* Dropdown Menu - Improved positioning */}
        {category.subCategories.length > 0 && (
          <ul className="absolute md:left-full left-0 top-0 md:top-0 w-48 bg-white text-black rounded-lg shadow-black shadow-lg hidden 
            group-hover:block z-10 
            md:translate-x-0 translate
            md:max-h-[calc(100vh-100px)] md:overflow-y-auto
            [&::-webkit-scrollbar]:hidden">
            {category.subCategories.map((sub, subIndex) => (
              <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                {sub}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
    <div className="absolute top-0 right-0 h-full w-[1px] bg-black" />
  </div>
       {/* Right Section - Carousel */}
      <div className="w-auto md:w-[892px] h-[354px] bg-black md:ml-16 mt-11 relative">
        <div className="flex h-full">
          {/* Left Content */}
          <div className="text-white p-8 flex flex-col justify-center gap-4 w-1/2">
            <Image
              src={slides[currentSlide].logo}
              alt="Brand Logo"
              width={190}
              height={190}
              className='mb-3'
            />
            <h2 className="text-4xl md:text-5xl font-bold py-3">
              {slides[currentSlide].heading}
            </h2>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-lg border-b-2 group-hover:border-b-4 transition-all">
                Shop Now
              </span>
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
  {/* Right Content - Image */}
  <div className="w-1/2 relative">
            <Image
              src={slides[currentSlide].image}
              alt="Product"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border border-white transition-all ${
                currentSlide === index 
                  ? 'bg-[#DB4444]' 
                  : 'bg-[#FFFFFF]'
              }`}
              
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default Hero;