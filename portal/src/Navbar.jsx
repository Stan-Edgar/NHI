import React from 'react';
import Logo from './assets/nhiLogo.png';

export default function Nav() {
  return (
    <div className="flex justify-between items-center max-w-[1190px] h-[56px] mx-auto my-8 px-6 sm:px-10 md:px-6">
      {/* Left side */}
      <div className="flex items-center gap-x-10">
        <a href="">
          <img src={Logo} alt="Beyond100 Logo" className="h-20 cursor-pointer"/>
        </a>

        {/* Nav links (desktop only) */}
        <div className="hidden md:flex gap-x-6 font-manrope text-[1rem] opacity-65">
          <a href="./index.html">Home</a>
          <a href="">About</a>
          <a href="">Providers</a>
          <a href="">Services</a>
          <a href="">Contact Us</a>
        </div>
      </div>

      {/* CTA button */}
      <div className="px-5 py-2 bg-[#1fcd39] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer">
        <a href="./form.html" target="_blank" rel="noopener noreferrer">
            Register now
        </a>
      </div>
    </div>
  );
}