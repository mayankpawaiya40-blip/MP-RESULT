import React from 'react';
import { LATEST_UPDATES, MP_VACANCY, PRIVATE_JOBS } from '../constants';
import { JobPost } from '../types';

interface HomeViewProps {
  onPostClick: (post: JobPost) => void;
}

const PostList: React.FC<{ title: string; posts: JobPost[]; onPostClick: (post: JobPost) => void }> = ({ title, posts, onPostClick }) => (
  <div className="bg-white border border-blue-200 shadow-sm rounded-sm overflow-hidden h-full flex flex-col">
    <div className="bg-[#1e40af] text-white text-center font-bold py-2 uppercase text-sm tracking-wide">
      {title}
    </div>
    <div className="p-4 bg-[#e8f1fd] flex-grow">
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="text-[13px] md:text-sm font-medium text-gray-800 border-b border-blue-200 pb-2 last:border-0">
            <span className="text-red-600 mr-2 text-[10px]">●</span>
            <button 
                onClick={() => onPostClick(post)} 
                className="hover:text-blue-700 hover:underline text-left leading-snug"
            >
              {post.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
          <button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs px-4 py-1.5 rounded transition-colors font-bold">
            View More
          </button>
      </div>
    </div>
  </div>
);

const HomeView: React.FC<HomeViewProps> = ({ onPostClick }) => {
  return (
    <div className="container mx-auto px-2 py-4">
      
      {/* Introduction Box */}
      <div className="bg-white border border-gray-300 p-4 mb-6 text-center shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            MP Result : MP Board Result, MP Govt Job, MP Private Job, MP Police Vacancy, Sarkari Result
        </h1>
      </div>

      {/* 3 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PostList title="LATEST UPDATES" posts={LATEST_UPDATES} onPostClick={onPostClick} />
        <PostList title="MP SARKARI NAUKRI" posts={MP_VACANCY} onPostClick={onPostClick} />
        <PostList title="MP DISTRICT PRIVATE VACANCY" posts={PRIVATE_JOBS} onPostClick={onPostClick} />
      </div>
      
      {/* Extra Section just to fill space like screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
         <PostList title="RESULT" posts={LATEST_UPDATES.slice(0,3)} onPostClick={onPostClick} />
         <PostList title="ADMIT CARD" posts={LATEST_UPDATES.slice(2,5)} onPostClick={onPostClick} />
         <PostList title="ALL INDIA UPDATE" posts={LATEST_UPDATES.slice(1,4)} onPostClick={onPostClick} />
      </div>

    </div>
  );
};

export default HomeView;