import React from 'react';
import { Dumbbell, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        <div className="flex items-center">
          <div className="bg-titan-gold p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
            <Dumbbell className="h-4 sm:h-5 w-4 sm:w-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-heading font-bold text-white tracking-widest leading-none">TITANS</span>
            <span className="text-[8px] sm:text-[10px] font-heading font-bold text-titan-gold tracking-widest leading-none">HOUSE</span>
          </div>
        </div>

        <div className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Gym Titans House. Todos los derechos reservados.<br className="hidden md:block"/>
          Rengo, Chile.
        </div>

        <div className="flex space-x-4 sm:space-x-6">
          <a href="https://www.instagram.com/titans_house_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Instagram size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Facebook size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};
