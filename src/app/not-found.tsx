// app/error.tsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import React from 'react'

export default function NotFound() {
  return (
    <div>
      
        
       <h1 className='m-20 ml-48 '>Home  <span>   / 404 error </span></h1>
            <div className="h-[70vh] flex flex-col items-center justify-center">
              <h2 className="text-8xl font-semibold mb-4">404 NOT FOUND</h2>
              <p className='text-xl mb-4'>your visited page not found . you may go home page  </p>
              <Link href={'/'}
               
                className="px-7 py-4 mt-14 bg-[#DB4444] text-white rounded hover:bg-opacity-90"
              >
              Back To Home Page
              </Link>
            </div>
          );
        
            </div>
  )
}

