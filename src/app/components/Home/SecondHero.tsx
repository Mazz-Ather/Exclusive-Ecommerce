// components/SecondHero.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const SecondHero = () => {
  const [time, setTime] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newTime = { ...prevTime };
        
        // Decrease seconds
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          // Decrease minutes
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            // Decrease hours
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              // Decrease days
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


  return (
    <div className="w-full bg-black/95 border-[1px] mt-11 border-black rounded-md max-w-[1170px]  min-h-[500px] p-14 mx-auto mb-9 ">
      <div className="mx-auto  flex flex-col md:flex-row items-center gap-8 px-4 py-8 md:py-0">
        {/* Left Section */}
        <div className="flex-1 space-y-6 w-full">
          <span className="text-[#00FF66] text-sm font-medium">Categories</span>
          
          <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight">
            Enhance Your Musical Experience
          </h1>
          
          <div className="flex gap-4 flex-wrap">
            {/* Timer Circles */}
            {[
              { label: 'Days', value: time.days },
              { label: 'Hours', value: time.hours },
              { label: 'Minutes', value: time.minutes },
              { label: 'Seconds', value: time.seconds }
            ].map((item) => (
              <div 
                key={item.label}
                className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-white text-black rounded-full flex flex-col items-center justify-center shadow-md"
              >
                <span className="text-lg md:text-xl font-bold">{item.value}</span>
                <span className="text-[10px] md:text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#00FF66] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Buy Now
          </button>
        </div>

        {/* Right Section */}
      {/* Right Section */}
{/* Right Section */}
<div className="flex-1 w-full flex justify-center">
  <div className="relative w-full max-w-[400px] md:max-w-[600px] aspect-square md:h-[420px]">
    {/* Background white circular */}
    {/* <div className="absolute inset-0 bg-white  rounded-full transform scale-95" /> */}
    
    {/* Headphones image on top */}

    <div className='flex items-center justify-center bg-black'>
    <Image
      src="/frame2.png"
      alt="Headphones"
      fill
      className="object-contain z-10 p-4 drop-shadow-[5px_5px_90px_rgba(255,255,255,1)]"
      priority
      />
  </div>
      </div>
</div>

      </div>
    </div>
  );
};

export default SecondHero;
