// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHeart, FiShoppingCart, FiMenu, FiX, FiSearch, FiUser, FiPackage, FiX as FiCancellation, FiStar, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import WishlistDropdown from './WishlistDropdown';
import CartIcon from './CartIcon';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const accountMenuItems = [
    { icon: <FiUser size={20} />, text: 'Manage My Account', href: '/account' },
    { icon: <FiPackage size={20} />, text: 'My Orders', href: '/orders' },
    { icon: <FiCancellation size={20} />, text: 'My Cancellations', href: '/cancellations' },
    { icon: <FiStar size={20} />, text: 'My Reviews', href: '/reviews' },
    { icon: <FiLogOut size={20} />, text: 'Logout', href: '/logout' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 relative max-w-[1440px] mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            <Link href={'/'}>
            EXCLUSIVE
            </Link>
            </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-black hover:scale-110 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Center Section */}
        <div className={`
          fixed md:relative top-[72px] md:top-0 left-0 
          w-full md:w-auto h-screen md:h-auto
          bg-black md:bg-transparent
          flex flex-col md:flex-row items-center justify-start md:justify-center 
          gap-8 pt-10 md:pt-0
          transition-transform duration-300 ease-in-out z-50
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:flex-1
        `}>
          <Link 
            href="/"
            className={`text-white md:text-black text-xl md:text-lg hover:text-gray-300 md:hover:underline transition-all ${
              pathname === '/' ? 'underline' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`text-white md:text-black text-xl md:text-lg hover:text-gray-300 md:hover:underline transition-all ${
              pathname === '/contact' ? 'underline' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`text-white md:text-black text-xl md:text-lg hover:text-gray-300 md:hover:underline transition-all ${
              pathname === '/about' ? 'underline' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/sign-up"
            className={`text-white md:text-black text-xl md:text-lg hover:text-gray-300 md:hover:underline transition-all ${
              pathname === '/signup' ? 'underline' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Signup
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What you are looking for?"
              className="px-4 py-2 pr-10 border rounded-md focus:outline-none focus:border-black"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          {/* <div className='relative'>
          <button className="text-black hover:scale-110 transition-transform">
            <FiHeart size={24} />
            <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
      4
    </span>
          </button>
          </div> */}
          <WishlistDropdown/>
          <CartIcon/>
         {/* <div className="relative">
  <button className="text-black hover:scale-110 transition-transform">
    <FiShoppingCart size={24} />
    <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
      2
    </span>
  </button>
</div> */}

          
          {/* Account Icon and Dropdown */}
          <div className="relative">
            <button 
              className={`text-black hover:scale-110 transition-transform ${showAccountMenu ? 'text-orange-500' : ''}`}
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <FiUser size={24} />
            </button>

            {showAccountMenu && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg py-2 z-50 
              bg-gradient-to-tr from-purple-500/40 to-gray-500 backdrop-blur-md text-white">
           {accountMenuItems.map((item, index) => (
             <Link
               key={index}
               href={item.href}
               className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 text-white"
               onClick={() => setShowAccountMenu(false)}
             >
               <span className="text-white">{item.icon}</span>
               <span>{item.text}</span>
             </Link>
           ))}
         </div>
         
            )}
          </div>
        </div>
      </nav>
      <div className="h-[1px] bg-black w-full" />
    </>
  );
};

export default Navbar;
