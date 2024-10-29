import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-white shadow-md z-10 relative'>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Header content */}
      <div className="relative z-10">
        <div className="container mx-auto flex justify-between items-center py-6 px-6 text-white">
          {/* Logo */}
          <div className="text-3xl font-bold">
            BakeCrafters
          </div>

          {/* Navigation */}
          <nav className="space-x-6">
            <Link href="/home" className="hover:text-gray-300 font-semibold"> 
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-300 font-semibold"> 
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-300 font-semibold">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300 font-semibold">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-300 rounded-lg px-4 py-2 text-black outline-none"
            />
            <button className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1-5H6.4M16 11a4 4 0 11-8 0" />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
