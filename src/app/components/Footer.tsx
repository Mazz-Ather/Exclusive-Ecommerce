// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaCopyright } from "react-icons/fa"; // From FontAwesome

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-11 max-w-[1440px] mx-auto">
      <div className="max-w-[1420px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 sm:ml-64 md:ml-0  lg:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4 hover:scale-105 ease-in-out duration-300">EXCLUSIVE</h2>
          <h3 className="text-xl mb-4">Subscribe</h3>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white mt-5 w-56 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 flex-1 outline-none"
            />
            <button className="p-2 hover:text-[#DB4444] -ml-11 transition-colors">
              <FiSend size={20} />
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-5">
              <li>PECHS Block 6, <br />Karachi</li>
              <li className='hidden md:block lg:hidden'>exclusive <br />@gmail.com</li>
              <li className='md:hidden lg:block'>exclusive@gmail.com</li>
              <li>+92352861062</li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Account</h3>
            <ul className="space-y-4">
              <li><Link href="/account" className="hover:text-[#DB4444] transition-colors">My Account</Link></li>
              <li className="flex gap-2">
                <Link href="/login" className="hover:text-[#DB4444] transition-colors">Login</Link>
                /
                <Link href="/register" className="hover:text-[#DB4444] transition-colors">Register</Link>
              </li>
              <li><Link href="/cart" className="hover:text-[#DB4444] transition-colors">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-[#DB4444] transition-colors">Wishlist</Link></li>
              <li><Link href="/shop" className="hover:text-[#DB4444] transition-colors">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-5">
              <li><Link href="/privacy" className="hover:text-[#DB4444] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#DB4444] transition-colors">Terms Of Use</Link></li>
              <li><Link href="/faq" className="hover:text-[#DB4444] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#DB4444] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          
          <div className="flex gap-4">
            <div className="w-24 h-24 relative">
              <Image
                src="/f1.png"
                alt="QR Code"
                fill
                className="object-contain brightness-110"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Image
                src="/f2.png"
                alt="Google Play"
                width={120}
                height={40}
                className="object-contain brightness-110"
              />
              <Image
                src="/f3.png"
                alt="App Store"
                width={120}
                height={40}
                className="object-contain brightness-110"
              />
            </div>
          </div>

          <div className="flex gap-12 mt-6">
            {[
              { Icon: FaFacebookF, href: '#' },
              { Icon: FaTwitter, href: '#' },
              { Icon: FaInstagram, href: '#' },
              { Icon: FaLinkedinIn, href: '#' }
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="hover:text-[#DB4444] transition-colors"
              >
                <social.Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='h-px bg-white/10 w-full mt-9'/>
      <div className="flex items-center justify-center gap-2 mt-6 -mb-5">
      <FaCopyright className="text-gray-600" />
      <p className="text-sm text-gray-600">
        2024 Exclusive. All rights reserved
      </p>
    </div>
    </footer>
  );
};

export default Footer;
