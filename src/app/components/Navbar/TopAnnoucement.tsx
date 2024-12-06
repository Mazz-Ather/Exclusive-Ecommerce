// components/TopAnnouncement.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

const TopAnnouncement = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = ['English', 'Urdu', 'French', 'German', 'Arabic'];

  return (
    <div className="bg-black text-white py-3">
      <div className="max-w-[1420px] mx-auto px-4 flex justify-end gap-8 md:gap-36 lg:gap-80 items-center">
        <p className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <Link href="/shop" className="underline ml-2 font-medium">
            ShopNow
          </Link>
        </p>
        
        <div className="relative right-0">
          <button 
            className="flex items-center gap-2 text-sm"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            English <FiChevronDown />
          </button>

          {showLanguages && (
            <div className="absolute z-[999] top-full right-0 mt-2 bg-white text-black py-2 rounded-md shadow-lg w-32">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setShowLanguages(false)}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopAnnouncement;
