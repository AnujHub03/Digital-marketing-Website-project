import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Share2,
  Layout,
  MapPin,
  ArrowRight,
  Zap,
  Target,
  BarChart,
} from "lucide-react";
import Webthech from "../Components/Webthech";
import ResultHero from "../Components/ResultHero";

// A small helper component to handle the scroll reveal logic per section
const RevealOnScroll = ({ children, delay = "0ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};
const Home = () => {
  // Brand Colors based on Logo:
  // Teal: #3D7E8C | Orange: #F39221

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: " Rank your website on top of Google and get organic traffic that converts into customers.",
      icon: <Search />,
      color: "text-[#3D7E8C]",
      bg: "bg-[#3D7E8C]/10",
    },
    {
      title: "Google Ads (PPC Services)",
      desc: "Get instant leads and sales with highly targeted and ROI-driven ad campaigns.",
      icon: <Target />,
      color: "text-[#F39221]",
      bg: "bg-[#F39221]/10",
    },
    {
      title: "Social Media Marketing  (SMM)",
      desc: " Increase your brand awareness and engagement on platforms like Instagram, Facebook, and LinkedIn.",
      icon: <Share2 />,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Web Architecture",
      desc: " We create responsive, fast, and user-friendly websites that turn visitors into paying customers.",
      icon: <Layout />,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Local SEO Services",
      desc: "Become the #1 choice in your neighborhood and city.",
      icon: <MapPin />,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "Growth Analytics",
      desc: " Dominate your local market and attract nearby customers searching for your services.",
      icon: <BarChart />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="bg-[#F8FAFB] text-slate-800 min-h-screen font-montserrat overflow-x-hidden selection:bg-[#F39221]/30">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-16    px-6 overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-[#3D7E8C]/10 to-[#F39221]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-8 animate-bounce">
            <Zap className="w-4 h-4 text-[#F39221]" fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              The Future of Growth
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            Elevate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7E8C] to-[#3D7E8C]/70">
              Digital
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39221] to-orange-400">
              Empire.
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            Webtech Services is a leading digital marketing company in Delhi,
            offering result-oriented online marketing solutions for businesses
            of all sizes. Whether you are a startup, local business, or
            established brand, we help you build a strong digital presence and
            generate quality leads. Our team focuses on performance, creativity,
            and strategy to deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-[#3D7E8C] text-white rounded-2xl font-bold shadow-lg shadow-[#3D7E8C]/30 hover:scale-105 transition-transform flex items-center gap-2 group">
              Start Your Project{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* --- CORE SERVICES SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
         <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-[#F39221] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Our Core Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Digital <br />
              Marketing Solutions
            </h3>
          </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}ms`}>
              <div
                key={index}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${service.bg} rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}
                ></div>

                <div
                  className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  {React.cloneElement(service.icon, {
                    size: 28,
                    strokeWidth: 2.5,
                  })}
                </div>

                <h4 className="text-2xl font-bold mb-4 text-slate-800">
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>

                <Link
                  to="/services"
                  className="text-sm font-bold text-[#3D7E8C] flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED BUILD TOOLS --- */}
      <section className="py-24 px-6 bg-slate-900 rounded-[3rem] mx-4 my-10 text-white relative overflow-hidden">
        <RevealOnScroll>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39221]/10 blur-[100px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Professional Build Tools
            </h2>
            <p className="text-slate-400 font-medium">
              Free resources to kickstart your professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool Card 1 */}
            <Link
              to="/resume-builder"
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all"
            >
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform inline-block">
                📝
              </div>
              <h4 className="text-2xl font-bold mb-2 text-[#3D7E8C]">
                Resume Builder
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Create high-performance, ATS-friendly resumes in minutes.
              </p>
              <div className="w-12 h-1 bg-[#3D7E8C] rounded-full"></div>
            </Link>

            {/* Tool Card 2 */}
            <Link
              to="/PortfolioMaker"
              className="group bg-white/5 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/10 transition-all scale-105 border-t-[#F39221]"
            >
              <div className="absolute top-4 right-6 bg-[#F39221] text-xs font-black px-3 py-1 rounded-full text-black">
                HOT
              </div>
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform inline-block">
                💼
              </div>
              <h4 className="text-2xl font-bold mb-2 text-[#F39221]">
                Portfolio Maker
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Stunning visual portfolios designed to convert recruiters.
              </p>
              <div className="w-12 h-1 bg-[#F39221] rounded-full"></div>
            </Link>

            {/* Tool Card 3 */}
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all">
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform inline-block">
                🚀
              </div>
              <h4 className="text-2xl font-bold mb-2 text-slate-300">
                Landing Page
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Deploy conversion-ready storefronts for your business.
              </p>
              <div className="w-12 h-1 bg-slate-500 rounded-full"></div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
      <Webthech />
      </RevealOnScroll>
       <RevealOnScroll>
      <ResultHero />
      </RevealOnScroll>
    </div>
  );
};

export default Home;
