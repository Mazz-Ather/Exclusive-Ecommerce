// app/signup/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Image Section */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%]">
        <div className="relative h-full">
          <Image
            src="/signup1.png"
            alt="Sign Up"
            fill
            className="object-cover py-11"
            priority
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
        <div className="w-full max-w-[450px] space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl mb-3 font-bold">Login To Exclusive</h1>
            <p className="text-gray-900  text-sm sm:text-base">Enter your details below</p>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-5">
              <div className="border-b border-gray-300">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
                />
              </div>

             

              <div className="border-b border-gray-300">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
  <button 
    type="submit"
    className="w-[30%] bg-[#DB4444] text-white py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-opacity-90 transition-colors"
  >
    Login
  </button>
  <p className="sm:text-base text- text-[#DB4444]">Forgot Password ? </p>
</div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
