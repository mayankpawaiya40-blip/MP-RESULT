import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, HelpCircle, Send, Home, X, Menu, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
}

// Custom Book and Pen Icon
const BookPenIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
    {/* Book Shadow/Cover */}
    <path d="M10 78 Q50 92 90 78 V84 Q50 98 10 84 Z" fill="#8B4513" />

    {/* Left Page */}
    <path d="M10 35 Q30 45 50 35 V78 Q30 88 10 78 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
    
    {/* Right Page */}
    <path d="M50 35 Q70 45 90 35 V78 Q70 88 50 78 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />

    {/* Book Spine Center */}
    <path d="M50 35 V78" stroke="#E5E7EB" strokeWidth="1" />

    {/* Text Lines Left */}
    <path d="M18 45 Q32 52 42 45" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 55 Q32 62 42 55" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 65 Q32 72 42 65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />

    {/* Text Lines Right */}
    <path d="M58 45 Q72 52 82 45" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    <path d="M58 55 Q72 62 82 55" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    <path d="M58 65 Q72 72 82 65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />

    {/* Pen */}
    <g transform="translate(45, 10) rotate(-35 25 25)">
       {/* Pen Body */}
       <rect x="20" y="10" width="12" height="50" fill="#1D4ED8" rx="2" stroke="#1E3A8A" />
       {/* Pen Grip */}
       <rect x="20" y="50" width="12" height="10" fill="#3B82F6" stroke="#1E3A8A" />
       {/* Pen Tip Cone */}
       <path d="M20 60 L26 72 L32 60 Z" fill="#FCD34D" stroke="#B45309" />
       {/* Nib */}
       <circle cx="26" cy="72" r="1.5" fill="#000" />
       {/* Clip */}
       <rect x="24" y="10" width="4" height="30" fill="#93C5FD" rx="1" />
    </g>
  </svg>
);

// Madhya Pradesh Shasan Logo (Simplified)
const MPShasanIcon = () => (
  <svg width="65" height="65" viewBox="0 0 100 100" className="ml-3" xmlns="http://www.w3.org/2000/svg">
    {/* Outer red circle */}
    <circle cx="50" cy="50" r="48" fill="white" stroke="#b91c1c" strokeWidth="2.5"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="#b91c1c" strokeWidth="1"/>
    
    {/* Abstract Text Curves */}
    <path d="M25 20 Q50 5 75 20" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M30 80 Q50 95 70 80" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Ashoka Emblem Abstract */}
    <g transform="translate(50, 50) scale(0.8)">
        {/* Main Pillar */}
        <path d="M-10 -20 C-15 -20 -18 -15 -18 -5 L-15 25 L15 25 L18 -5 C18 -15 15 -20 10 -20 Z" fill="#d97706" />
        {/* Heads */}
        <circle cx="0" cy="-20" r="8" fill="#d97706"/>
        <circle cx="-12" cy="-16" r="6" fill="#d97706"/>
        <circle cx="12" cy="-16" r="6" fill="#d97706"/>
    </g>
    
    {/* Green Dots simulating Banyan leaves/Decoration */}
    <circle cx="50" cy="12" r="2" fill="green"/>
    <circle cx="12" cy="50" r="2" fill="green"/>
    <circle cx="88" cy="50" r="2" fill="green"/>
    <circle cx="50" cy="88" r="2" fill="green"/>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: Thu. Dec 4th, 2025 19:52:32
      const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      const datePart = now.toLocaleDateString('en-US', dateOptions);
      const timePart = now.toLocaleTimeString('en-GB', { hour12: false });
      setCurrentTime(`${datePart} ${timePart}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex flex-col w-full shadow-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-1 bg-white border-b text-xs sm:text-sm text-gray-700 font-medium">
        <div className="flex items-center gap-2">
           <span>{currentTime}</span>
           <span className="bg-blue-600 text-white px-1 rounded text-[10px]">IST</span>
        </div>
        <div className="flex gap-2">
            <a href="#" className="bg-blue-900 p-1 rounded text-white hover:opacity-80"><Facebook size={14} /></a>
            <a href="#" className="bg-black p-1 rounded text-white hover:opacity-80"><Twitter size={14} /></a>
            <a href="#" className="bg-pink-600 p-1 rounded text-white hover:opacity-80"><Instagram size={14} /></a>
            <a href="#" className="bg-red-600 p-1 rounded text-white hover:opacity-80"><Youtube size={14} /></a>
            <a href="#" className="bg-green-500 p-1 rounded text-white hover:opacity-80"><HelpCircle size={14} /></a>
            <a href="#" className="bg-blue-400 p-1 rounded text-white hover:opacity-80"><Send size={14} /></a>
        </div>
      </div>

      {/* Logo Area */}
      <div className="bg-white py-4 flex justify-center items-center border-b-4 border-blue-500">
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate(ViewState.HOME)}>
           <BookPenIcon />
           <div className="flex flex-col items-center mx-3">
             <div className="text-5xl font-bold text-red-800 tracking-tighter leading-none" style={{ fontFamily: 'sans-serif' }}>
                MP
             </div>
             <div className="text-4xl font-extrabold text-blue-700 tracking-wide uppercase leading-none mt-1">
                RESULT
             </div>
             <div className="text-[10px] text-gray-500 text-center tracking-widest mt-1">
                Unlock Your Opportunities
             </div>
           </div>
           <MPShasanIcon />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#3b82f6] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-12">
            <button onClick={() => onNavigate(ViewState.HOME)} className="p-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded shadow-sm">
                <Home size={20} />
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-wide">
                {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                        <a href={item.link} className="hover:text-yellow-300 transition-colors">{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex gap-4 items-center">
                 {/* Mobile Menu Button */}
                 <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Search size={20} className="cursor-pointer hover:text-yellow-300"/>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-blue-700 border-t border-blue-500">
                <ul className="flex flex-col p-4 gap-3 text-sm font-semibold uppercase">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label} className="border-b border-blue-600 pb-2">
                             <a href={item.link} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </nav>
    </header>
  );
};

export default Header;