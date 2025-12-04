import React from 'react';
import { User, Calendar, Bell, ExternalLink } from 'lucide-react';
import { MALE_VACANCY_DATA, FEMALE_VACANCY_DATA } from '../constants';
import { JobPost } from '../types';

interface JobDetailProps {
  post: JobPost;
}

const JobDetail: React.FC<JobDetailProps> = ({ post }) => {
  return (
    <div className="bg-white p-4 md:p-8 max-w-4xl mx-auto border-x border-gray-200 shadow-sm min-h-screen">
      {/* Title Section */}
      <div className="mb-6">
        <div className="flex gap-2 mb-2">
             <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">All India Update</span>
             <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Latest Update</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 underline decoration-2 decoration-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-xs text-gray-500 border-b pb-4">
            <div className="bg-gray-200 rounded-full p-2 mr-2">
                <User size={16} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-gray-700">By mpresult</span>
                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
            </div>
        </div>
      </div>

      {/* Hero Image / Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 mb-8 rounded-lg overflow-hidden relative shadow-lg">
          <div className="p-8 md:p-12 text-center text-white relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-2 drop-shadow-md">SSC GD</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-black/30 inline-block px-4 py-1 rounded">( CONSTABLE )</h3>
              <div className="text-3xl md:text-4xl font-extrabold mb-6">RECRUITMENT 2025</div>
              <div className="bg-blue-400 text-black font-black text-2xl px-6 py-2 inline-block shadow-lg transform -skew-x-12">
                  POST - 25487
              </div>
          </div>
          <div className="absolute top-4 right-4 text-blue-300 opacity-50">
             <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-current"></div>
                <div className="w-3 h-3 rounded-full bg-current"></div>
                <div className="w-3 h-3 rounded-full bg-current"></div>
             </div>
          </div>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold opacity-80">
             www.mpresult.in
          </div>
      </div>

      {/* Main Table Content */}
      <div className="space-y-6 text-sm md:text-base">
        
        {/* Vacancy Table */}
        <div className="border-2 border-blue-500">
            <div className="bg-blue-600 text-white font-bold text-center py-2 text-lg">SSC GD Vacancy 2025</div>
            <div className="bg-blue-500 text-white font-bold text-center py-1">SSC GD Notification 2025</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Male Table */}
                <div className="border-r border-blue-200">
                     <div className="bg-blue-100 text-blue-900 font-bold text-center py-2 border-b border-blue-300">Details Recruitment</div>
                     <div className="text-center py-2 text-green-600 font-bold bg-yellow-50 border-b border-blue-200">Post – Constable ( GD ) – 25487</div>
                     <div className="text-center font-bold text-red-600 py-1 border-b border-blue-200">Male – Category Wise Post</div>
                     
                     <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-800 font-bold text-xs border-b border-blue-200">
                                    <th className="p-1 border-r text-red-600">Force</th>
                                    <th className="p-1 border-r">SC</th>
                                    <th className="p-1 border-r">ST</th>
                                    <th className="p-1 border-r">OBC</th>
                                    <th className="p-1 border-r">EWS</th>
                                    <th className="p-1">UR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MALE_VACANCY_DATA.map((row, idx) => (
                                    <tr key={idx} className="border-b border-blue-100 hover:bg-gray-50 text-xs md:text-sm font-medium">
                                        <td className="p-2 border-r text-pink-700 font-bold">{row.force}</td>
                                        <td className="p-2 border-r">{row.sc}</td>
                                        <td className="p-2 border-r">{row.st}</td>
                                        <td className="p-2 border-r">{row.obc}</td>
                                        <td className="p-2 border-r">{row.ews}</td>
                                        <td className="p-2">{row.ur}</td>
                                    </tr>
                                ))}
                                <tr className="bg-pink-50 font-bold text-pink-600 text-xs md:text-sm">
                                    <td className="p-2 border-r">Total Post</td>
                                    <td className="p-2 border-r">3433</td>
                                    <td className="p-2 border-r">2091</td>
                                    <td className="p-2 border-r">5329</td>
                                    <td className="p-2 border-r">2419</td>
                                    <td className="p-2">10198</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>

                     {/* Divider / Ads Placeholders (Simulated) */}
                     <div className="py-4 px-2 flex flex-wrap gap-2 justify-center text-[10px] text-blue-600">
                        {['Professional attire', 'Indore', 'Study abroad', 'Government Job'].map(tag => (
                            <span key={tag} className="border border-blue-300 rounded-full px-2 py-0.5 bg-blue-50 flex items-center gap-1">
                                <ExternalLink size={8}/> {tag}
                            </span>
                        ))}
                     </div>

                     <div className="text-center font-bold text-red-600 py-1 border-y border-blue-200 mt-2">Female – Category Wise Post</div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-800 font-bold text-xs border-b border-blue-200">
                                    <th className="p-1 border-r text-red-600">Force</th>
                                    <th className="p-1 border-r">SC</th>
                                    <th className="p-1 border-r">ST</th>
                                    <th className="p-1 border-r">OBC</th>
                                    <th className="p-1 border-r">EWS</th>
                                    <th className="p-1">UR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEMALE_VACANCY_DATA.map((row, idx) => (
                                    <tr key={idx} className="border-b border-blue-100 hover:bg-gray-50 text-xs md:text-sm font-medium">
                                        <td className="p-2 border-r text-pink-700 font-bold">{row.force}</td>
                                        <td className="p-2 border-r">{row.sc}</td>
                                        <td className="p-2 border-r">{row.st}</td>
                                        <td className="p-2 border-r">{row.obc}</td>
                                        <td className="p-2 border-r">{row.ews}</td>
                                        <td className="p-2">{row.ur}</td>
                                    </tr>
                                ))}
                                <tr className="bg-pink-50 font-bold text-pink-600 text-xs md:text-sm">
                                    <td className="p-2 border-r">Total Post</td>
                                    <td className="p-2 border-r">269</td>
                                    <td className="p-2 border-r">22</td>
                                    <td className="p-2 border-r">436</td>
                                    <td className="p-2 border-r">189</td>
                                    <td className="p-2">904</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>

                </div>

                {/* Right Column Details */}
                <div>
                     {/* Qualification */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Qualification & Experience</div>
                     <div className="p-3 border-b border-blue-200 text-sm font-semibold">
                        • 10th Pass.
                     </div>

                     {/* Salary */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Salary</div>
                     <div className="p-3 border-b border-blue-200 text-sm font-semibold">
                        • 21,700 – 69,100/- PM ( Pay Level – 3 )
                     </div>

                     {/* Age Limit */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Age Limit</div>
                     <div className="text-center font-bold text-green-600 text-xs py-1">AGE ON – 01/12/2025</div>
                     <table className="w-full text-center text-xs font-bold border-b border-blue-200 mb-2">
                        <thead>
                            <tr className="text-red-600">
                                <th className="p-1">Name of Post</th>
                                <th className="p-1">Minimum Age</th>
                                <th className="p-1">Maximum Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-800">
                                <td className="p-1">GD</td>
                                <td className="p-1">18 Year</td>
                                <td className="p-1">23 Year</td>
                            </tr>
                        </tbody>
                     </table>
                     <div className="text-center text-xs font-bold text-purple-800 mb-2 border-b border-blue-200 pb-2">
                        Age Relaxation – SC/ST – 05 Year | OBC – 3 Year
                     </div>

                     {/* Important Dates */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Important Dates</div>
                     <div className="p-3 border-b border-blue-200 text-xs font-semibold leading-relaxed">
                        • Advertisement Date – 01/12/2025<br/>
                        • Form Start Date – 01/12/2025<br/>
                        • Form Last Date – 31/12/2025<br/>
                        • Last Date For Fee Payment – 01/01/2026<br/>
                        • Pre Exam Date – Feb-April 2026
                     </div>

                     {/* Apply Process */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Form Apply Process</div>
                     <div className="p-3 border-b border-blue-200 text-xs font-semibold">
                        1. Online
                     </div>

                     {/* Selection Process */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Selection Process</div>
                     <div className="p-3 border-b border-blue-200 text-xs font-semibold">
                        1. CBT Written Exam<br/>
                        2. PET & PST Test<br/>
                        3. Document Verification<br/>
                        4. Medical Examination
                     </div>

                     {/* Fees */}
                     <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Form Fees</div>
                     <div className="p-3 border-b border-blue-200 text-xs font-semibold">
                        • UR/EWS/OBC – Rs 100/-<br/>
                        • SC/ST – 0/-<br/>
                        • Correction Charge –<br/>
                        <br/>
                        1. First Time – Rs 200/-<br/>
                        2. Second Time – Rs 500/-
                     </div>
                </div>
            </div>

            {/* Syllabus */}
            <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase">Syllabus</div>
            <table className="w-full text-center text-xs md:text-sm border-collapse">
                <thead>
                    <tr className="bg-white text-black font-bold">
                        <th className="p-2 border text-black">Subject</th>
                        <th className="p-2 border text-black">Number of Question</th>
                        <th className="p-2 border text-black">Maximum Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['General Intelligence & Reasoning', 20, 40],
                        ['General Knowledge', 20, 40],
                        ['Elementary Mathematics', 20, 40],
                        ['English/Hindi', 20, 40]
                    ].map(([sub, q, m], i) => (
                        <tr key={i} className="bg-white border text-purple-700 font-bold">
                            <td className="p-3 border">{sub}</td>
                            <td className="p-3 border text-gray-800">{q}</td>
                            <td className="p-3 border text-gray-800">{m}</td>
                        </tr>
                    ))}
                    <tr className="bg-white border text-purple-900 font-bold">
                        <td className="p-2 border">Duration</td>
                        <td colSpan={2} className="p-2 border">60 Minutes</td>
                    </tr>
                </tbody>
            </table>

            {/* Links */}
            <div className="bg-blue-600 text-white font-bold text-center py-1 text-sm uppercase mt-4">Some Important Links</div>
             <table className="w-full text-center text-xs md:text-sm font-bold bg-white">
                <tbody>
                    {[
                        ['Official Notification', 'CLICK HERE'],
                        ['Apply Link', 'CLICK HERE'],
                        ['Official Website', 'CLICK HERE'],
                    ].map(([label, linkText], i) => (
                        <tr key={i} className="border-b border-gray-200">
                            <td className="p-3 text-pink-600 w-1/2 text-right pr-6">{label}</td>
                            <td className="p-3 w-1/2 text-left pl-6">
                                <a href="#" className="text-red-600 underline hover:text-red-800">{linkText}</a>
                            </td>
                        </tr>
                    ))}
                     <tr className="border-b border-gray-200">
                        <td colSpan={2} className="p-2 text-red-600 text-center">Social Media Link</td>
                    </tr>
                    {[
                        ['Instagram Channel', 'CLICK HERE'],
                        ['YouTube Channel', 'CLICK HERE'],
                        ['Telegram Channel', 'CLICK HERE'],
                    ].map(([label, linkText], i) => (
                        <tr key={i} className="border-b border-gray-200">
                            <td className="p-3 text-green-600 w-1/2 text-right pr-6">{label}</td>
                            <td className="p-3 w-1/2 text-left pl-6">
                                <a href="#" className="text-red-600 underline hover:text-red-800">{linkText}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>

        {/* Previous/Next Navigation */}
        <div className="flex justify-between font-bold text-xs md:text-sm text-red-700 mt-8 underline">
            <a href="#" className="hover:text-red-900">&lt;&lt; AIIMS Bhopal Faculty Recruitment 2025 Post Group – A</a>
            <a href="#" className="hover:text-red-900">MP NHDC Apprentice Recruitment 2025 &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;