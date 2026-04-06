import React from 'react';
import { 
  TrendingUp, MousePointerClick, UserCheck, 
  CheckCircle, Quote, PhoneCall, HelpCircle, 
  ChevronDown, MessageSquare 
} from 'lucide-react';

const ResultHero = () => {
  // Brand Colors: Teal: #3D7E8C | Orange: #F39221

  const results = [
    "Higher Google Rankings", "More Website Traffic", 
    "Better Lead Generation", "Increased Sales", 
    "Strong Online Presence"
  ];

  return (
    <div className="font-montserrat text-slate-800">
      
      {/* --- SECTION 1: EXPECTED RESULTS --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-[#3D7E8C]">🔷</span> Results You Can Expect
            </h2>
            <p className="text-slate-500 font-medium">Data-backed growth for your digital footprint.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((res, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border-b-4 border-[#3D7E8C] hover:-translate-y-1 transition-transform">
                <CheckCircle className="text-[#3D7E8C] flex-shrink-0" size={24} />
                <span className="font-bold text-lg">{res}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">
              <span className="text-[#3D7E8C]">🔷</span> Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Webtech Services helped us grow our business online and generate quality leads.",
              "Highly professional team with great digital marketing strategies."
            ].map((text, i) => (
              <div key={i} className="relative p-10 rounded-[2rem] bg-[#F8FAFB] border border-slate-100">
                <Quote className="absolute top-6 left-6 text-[#F39221]/20" size={40} fill="currentColor" />
                <p className="italic text-lg text-slate-600 mb-6 relative z-10 leading-relaxed">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3D7E8C] flex items-center justify-center text-white font-bold">
                    {i === 0 ? "B" : "M"}
                  </div>
                  <div>
                    <p className="font-black text-sm text-slate-900 leading-none">{i === 0 ? "Business Owner" : "Marketing Director"}</p>
                    <p className="text-xs text-slate-400 mt-1">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CALL TO ACTION (CTA) --- */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br bg-slate-800 p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 from-[#3D7E8C]/20 to-transparent blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to Grow Your <br/>Business Online?</h2>
            <p className="text-teal-50 max-w-2xl mx-auto mb-10 text-lg font-medium">Partner with Webtech Services – your trusted digital marketing agency in Delhi. Let’s turn your vision into revenue.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-[#F39221] hover:bg-orange-500 text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                <PhoneCall size={20} /> Contact Us Today
              </button>
              <button className="px-10 py-5 bg-white text-[#3D7E8C] hover:bg-slate-50 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-3">
                <MessageSquare size={20} /> Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: FAQ SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-[#3D7E8C]">🔷</span> FAQ Section
            </h2>
            <p className="text-slate-500 font-medium">Quick answers to boost your SEO knowledge.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Why choose Webtech Services for digital marketing?", a: "We provide customized, result-driven strategies that help businesses grow faster by focusing on ROI rather than just clicks." },
              { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. It usually takes 3–6 months depending on competition and industry dynamics." },
              { q: "Do you provide Google Ads services?", a: "Yes, we run high-performing PPC campaigns specializing in lead generation and immediate sales conversion." }
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl bg-[#F8FAFB] border border-transparent hover:border-[#3D7E8C]/20 transition-all cursor-pointer">
                <summary className="flex items-center justify-between font-black text-slate-800 list-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-[#3D7E8C]" size={20} />
                    {faq.q}
                  </div>
                  <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" size={20} />
                </summary>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed pl-8 border-l-2 border-[#3D7E8C]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ResultHero;