import React from 'react';
import { CheckCircle2, TrendingUp, Users, Target, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';

const Webthech = () => {
  // Brand Colors based on Logo:
  // Teal: #3D7E8C | Orange: #F39221

  const highlights = [
    { text: "Experienced Digital Marketing Experts", icon: <Users size={20} /> },
    { text: "100% Result-Oriented Approach", icon: <Target size={20} /> },
    { text: "Affordable Pricing Plans", icon: <TrendingUp size={20} /> },
    { text: "Customized Marketing Strategies", icon: <BarChart3 size={20} /> },
    { text: "Transparent Reporting", icon: <ShieldCheck size={20} /> },
    { text: "Dedicated Support", icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION 1: WHY CHOOSE US (Grid Layout) --- */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              <span className="text-[#3D7E8C]">🔷</span> Why Choose Webtech?
            </h2>
            <div className="hidden md:block h-px flex-1 bg-slate-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#F8FAFB] border border-transparent hover:border-[#3D7E8C]/20 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3D7E8C]/10 text-[#3D7E8C] flex items-center justify-center group-hover:bg-[#3D7E8C] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: GROW YOUR BUSINESS (Split Layout) --- */}
        <div className="relative rounded-[3rem] bg-slate-50 p-8 md:p-16 overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#F39221]/10 blur-3xl rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#F39221]/10 text-[#F39221] text-xs font-black uppercase tracking-widest mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Grow Your Business <br />
                <span className="text-[#3D7E8C]">With Our Expertise.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                At Webtech Services, we understand that every business is different. 
                That’s why we create customized marketing strategies based on your 
                business goals, target audience, and competition.
              </p>
              <button className="flex items-center gap-2 font-bold text-[#F39221] hover:gap-4 transition-all group">
                Get a Custom Strategy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Increase Traffic", desc: "Get eyes on your brand." },
                { title: "Quality Leads", desc: "Turn visitors into customers." },
                { title: "Boost ROI", desc: "Maximize your spend." },
                { title: "Brand Authority", desc: "Lead your industry." }
              ].map((focus, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="h-2 w-8 bg-[#3D7E8C] rounded-full mb-4"></div>
                  <h4 className="font-black text-slate-800 mb-1">{focus.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{focus.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webthech;