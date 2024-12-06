// components/Services.tsx
'use client';
import Image from 'next/image';
import { FiArrowUp } from 'react-icons/fi';

const Services = () => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    
    // If we're already at the top, no need to continue
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 20);
    }
  };

  const services = [
    {
      id: 1,
      icon: '/ser4.png',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      id: 2,
      icon: '/ser2.png',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      id: 3,
      icon: '/ser1.png',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  return (
    <div className="max-w-[1420px] mx-auto px-4 py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <div className="relative w-[80px] h-[80px]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Scroll to top button */}
      <button
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 bg-gray-700 hover:bg-black opacity-100 text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-700"
>
  <FiArrowUp size={24} />
</button>
    </div>
  );
};

export default Services;
