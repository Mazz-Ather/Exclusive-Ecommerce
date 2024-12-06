// components/ColorProducts.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiHeart, FiEye } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

interface SelectedColors {
    [key: number]: string;
}

interface ProductImage {
    [key: string]: string;  // This allows string indexing for colors
  }
// Add isNew to the Product interface
interface Product {
    id: number;
    name: string;
    image: ProductImage;
    price: number;
    rating: number;
    reviews: number;
    colors: string[];
    isNew?: boolean;  // Added isNew as an optional property
}
const ColorProducts = () => {
  const products:Product[] = [
    {
      id: 1,
      name: "Gaming Headphone",
      image: {
        red: "/c11.png",
        white: "/joy2.jpg",
      },
      price: 120,
      rating: 4,
      reviews: 75,
      colors: ['red', 'green', 'yellow'],
      isNew: true  
    //   isNew: true // Add NEW label to first product
    },
    {
      id: 2,
      name: "Gaming Headphone",
      image: {
        green: "/tab1.jpg",
        blue: "/tab2.jpg",
      },
      price: 120,
      rating: 4,
      reviews: 75,
      colors: ['green', 'blue'],
    //   isNew?: true // Add NEW label to second product
    },
    {
      id: 3,
      name: "Gaming Headphone",
      image: {
        yellow: "/tab1.jpg",
        purple: "/tab2.jpg",
      },
      price: 120,
      rating: 4,
      reviews: 75,
      colors: ['yellow', 'purple'],
      isNew: true  
    },
    {
      id: 4,
      name: "Gaming Headphone",
      image: {
        orange: "/tab1.jpg",
        pink: "/tab2.jpg",
      },
      price: 120,
      rating: 4,
      reviews: 75,
      colors: ['orange', 'pink']
    }
  ];

  const [selectedColors, setSelectedColors] = useState<SelectedColors>({
    1: 'red',
    2: 'green',
    3: 'yellow',
    4: 'orange'
  });

  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-36 md:gap-20 lg:gap-11 py-11 mx-auto mt-20">
      {products.map((product) => (
        <div key={product.id} className="group relative h-[350px] w-[270px]">
          <div className="relative overflow-hidden">
            <Image
              src={selectedColors[product.id] === product.colors[0] 
                ? product.image[product.colors[0]] 
                : product.image[product.colors[1]]}
              alt={product.name}
              width={280}
              height={280}
              className="w-full object-cover"
            />

            {product.isNew && (
              <div className="absolute top-3 left-3 bg-[#00FF66] text-white px-3 py-1 rounded">
                NEW
              </div>
            )}

            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <FiHeart size={20} />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <FiEye size={20} />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Add to Cart
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium">{product.name}</h4>
            <div className="items-center justify-between mt-2">
              <span className="text-[#DB4444]">${product.price}</span>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
              <div className="flex py-5 gap-5">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(product.id, color)}
                    className={`w-4 h-4 rounded-full ${
                      selectedColors[product.id] === color 
                        ? 'ring-2 ring-offset-2 ring-black' 
                        : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorProducts;
