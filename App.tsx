import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import JobDetail from './components/JobDetail';
import Footer from './components/Footer';
import AdModal from './components/AdModal';
import { ViewState, JobPost } from './types';
import { LATEST_UPDATES } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [currentPost, setCurrentPost] = useState<JobPost | null>(null);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    if (newView === ViewState.HOME) {
        setCurrentPost(null);
    }
  };

  const handlePostClick = (post: JobPost) => {
    // For the demo, we will force the SSC GD layout for any click, 
    // but typically you'd fetch specific data based on post.id
    setCurrentPost(post);
    setView(ViewState.JOB_DETAIL);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans flex flex-col">
      <Header onNavigate={handleNavigate} />
      
      {/* Marquee Section */}
      <div className="bg-[#1e40af] text-white py-1 overflow-hidden relative border-b border-blue-400">
         <div className="animate-marquee whitespace-nowrap text-sm font-bold">
            <span className="mx-4">⚡ SSC GD Recruitment 2025 Apply Online (Post – 25487)</span>
            <span className="mx-4">⚡ MP District Court Recruitment 2025</span>
            <span className="mx-4">⚡ AIIMS Bhopal Faculty Recruitment 2025</span>
            <span className="mx-4">⚡ MP NHDC Apprentice Recruitment 2025</span>
         </div>
      </div>

      <main className="flex-grow">
        {view === ViewState.HOME && (
            <>
                <HomeView onPostClick={handlePostClick} />
                <AdModal />
            </>
        )}
        {view === ViewState.JOB_DETAIL && currentPost && (
            <JobDetail post={currentPost} />
        )}
        {/* Fallback if accessing detail directly without state (not happening in this mock, but good practice) */}
        {view === ViewState.JOB_DETAIL && !currentPost && (
             <JobDetail post={LATEST_UPDATES[0]} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;