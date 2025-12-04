import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-4 text-sm font-semibold">
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Contact Us</a>
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Disclaimer</a>
        </div>
        <div className="text-xs text-blue-200">
            © 2025 MP Result. All rights reserved.
        </div>
        <div className="text-[10px] text-blue-400 mt-2">
            Unlock Your Opportunities with MP Result
        </div>
      </div>
    </footer>
  );
};

export default Footer;