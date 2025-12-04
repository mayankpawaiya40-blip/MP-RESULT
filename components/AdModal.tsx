import React, { useState, useEffect } from 'react';
import { X, PlayCircle } from 'lucide-react';

const AdModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
        >
            <X size={24} />
        </button>

        <div className="flex flex-col items-center pt-8 pb-6 px-6 text-center">
             {/* Logo Small */}
             <div className="mb-4 flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-600">MP</span>
                <span className="text-xl font-bold text-blue-700 uppercase leading-none">RESULT</span>
             </div>

             <h2 className="text-xl font-bold text-pink-700 mb-2">Unlock more content</h2>
             <p className="text-gray-600 text-sm mb-6">
                Take action to continue accessing the content on this site
             </p>

             <div className="w-full border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 group transition-colors shadow-sm">
                <div className="text-left">
                    <p className="font-bold text-red-600 text-sm">View a short ad</p>
                    <p className="text-xs text-gray-500">Site-wide access for 24 hours</p>
                </div>
                <PlayCircle className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
             </div>
        </div>
      </div>
    </div>
  );
};

export default AdModal;