import React from 'react'

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const Hero = () => {
  return (
     <section className="relative h-[90vh] lg:h-\[100vh]">
    {/* Background Image and Overlay */}
    <div className="absolute inset-0 bg-cover bg-center" style={{
      // backgroundImage: `url(https://placehold.co/1600x1200/4D4C3A/ffffff?text=Luxury+Home+Care+Hero+Image)`,
      backgroundPosition: 'center 40%'
    }}>
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>

    {/* Header (positioned absolutely) */}
 

    {/* Hero Content */}
    <div className="relative flex flex-col justify-center items-center h-full text-center text-white p-6 pt-32 lg:pt-0">
      <h1 className="text-4xl lg:text-7xl font-light max-w-4xl leading-tight mb-6">
        A Luxury Care Home in the heart of Houston, Texas
      </h1>
      <p className="text-lg lg:text-xl font-extralight max-w-3xl mb-10">
        Welcoming a new year at St Bernard's Residential Care Home. A family-run residence care home, providing Residential and Day Care services.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button style={{ backgroundColor: accentColor, color: primaryColor }} className="px-8 py-3 rounded-xl font-semibold shadow-xl transition duration-300 hover:opacity-90">
          Book a Tour
        </button>
        <button className="px-8 py-3 rounded-xl font-semibold border-2 border-white transition duration-300 hover:bg-white hover:text-gray-800">
          View Us
        </button>
      </div>
    </div>
  </section>
  )
}

export default Hero