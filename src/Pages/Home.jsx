import React from 'react'

const Home = () => {
  return (
    
    <div className='bg-white text-black min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 p-6 font-montserrat'>
      
      
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 tracking-tight">
          Project Builders
        </h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Professional tools designed to help you build your digital presence in minutes.
        </p>
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
        
       
        <button
          type="button"
          className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-blue-500 transition-all duration-300 h-64"
        >
          <div className="p-4 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <span className="text-3xl">📝</span>
          </div>
          <span className="text-2xl font-bold">Resume Builder</span>
          <p className="text-sm text-gray-500 text-center">Create a job-winning CV</p>
        </button>

        <button
          type="button"
          className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-purple-500 transition-all duration-300 h-64"
        >
          <div className="p-4 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <span className="text-3xl">💼</span>
          </div>
          <span className="text-2xl font-bold">Portfolio Maker</span>
          <p className="text-sm text-gray-500 text-center">Showcase your best work</p>
        </button>

        <button
          type="button"
          className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 h-64"
        >
          <div className="p-4 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <span className="text-3xl">🚀</span>
          </div>
          <span className="text-2xl font-bold">Landing Page</span>
          <p className="text-sm text-gray-500 text-center">Convert visitors into leads</p>
        </button>
        
      </div>
    </div>
  )
}

export default Home