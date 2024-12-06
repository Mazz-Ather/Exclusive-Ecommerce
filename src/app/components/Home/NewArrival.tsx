'use client';
import Image from 'next/image';
import Link from 'next/link';

const NewArrival = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-4 py-8">
      {/* Headers remain the same */}
      <div className="flex items-center gap-9 mb-8">
        <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <h2 className="text-lg font-bold text-[#DB4444]">Featured</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex gap-9">
          <h3 className="text-3xl font-bold mt-8">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Single Large Box */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden min-h-[600px] flex flex-col">
          <div className="flex-1">
            <Image
              src="/ps5.png"
              alt="PlayStation"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 mt-auto bg-black bg-opacity-50">
            <div className='relative p-4 z-[999]'>

            <h3 className="text-3xl font-bold mb-2">PlayStation 5</h3>
            <p className="mb-4 text-base">Experience next-gen gaming with PlayStation 5</p>
            <Link href="/shop" className="text-white underline underline-offset-2 font-medium">
              Shop Now
            </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Grid of 3 Boxes */}
        <div className="grid grid-rows-2 gap-6">
          {/* Top Box */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1">
              <Image
                src="/men3.jpg"
                alt="Mens Collection"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 mt-auto bg-black bg-opacity-90">
                <div className='relative z-[999] p-5 text-white'>

              <h3 className="text-3xl font-bold mb-2">Men&apos;s Collection</h3>
              <p className="mb-2 text-base">Latest trends in men&apos;s fashion</p>
              <Link href="/shop" className="text-white underline underline-offset-2 font-medium">
                Shop Now
              </Link>
                </div>
            </div>
          </div>

          {/* Bottom Two Boxes */}
          <div className="grid grid-cols-2 gap-6">
  {/* Bottom Left Box */}
  <div className="relative bg-black rounded-lg overflow-hidden flex flex-col">
    <div className="flex-1"> {/* Made consistent with right box */}
      <Image
        src="/lap1.jpg"
        alt="Speakers"
        fill
        className="object-cover" // Changed to contain for better centering
      />
    </div>
    <div className="p-4 mt-auto bg-black bg-opacity-90">
      <div className='relative z-[999] p-2 text-white'>
        <h3 className="text-2xl font-semibold mb-2">Mac Book</h3>
        <p className="mb-2 text-base">Premium 4k quality</p>
        <Link href="/shop" className="text-white underline underline-offset-2 font-medium">
          Shop Now
        </Link>
      </div>
    </div>
  </div>

            {/* Bottom Right Box */}
            <div className="relative bg-black rounded-lg overflow-hidden flex flex-col">
              <div className="flex-1">
                <Image
                  src="/joy3.webp"
                  alt="Perfume"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 mt-auto bg-black bg-opacity-90">
                <div className='relative z-[999] p-2 text-white'>

                <h3 className="text-2xl font-bold mb-2">PS5 Joystick</h3>
                <p className="mb-2 text-base">Luxury joystick</p>
                <Link href="/shop" className="text-white underline underline-offset-2 font-medium">
                  Shop Now
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
