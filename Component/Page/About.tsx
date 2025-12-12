import Image from 'next/image';
import {ChevronRight } from 'lucide-react'

import MainImage from '@/public/assert/Experience the highest level of medical care….jpg'

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ backgroundColor: '#F9F9F7' }}>
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="lg:pr-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={MainImage}
              alt="Caregiver assisting elderly resident with a tablet"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: accentColor }}>
            About Home Care
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light mb-6" style={{ color: primaryColor }}>
            Commitment to Comfort and Happiness
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are a family run, Residential Care Home in Melbourne, providing Residential Care, Dementia Care, Respite and Day Care services for the elderly. We are dedicated to creating a warm, supportive, and stimulating environment that feels just like home.
            <br /><br />
            Our philosophy centers on personalized care, respecting the unique needs and preferences of every resident. Our staff are highly trained, passionate, and committed to ensuring the highest quality of life.
          </p>
          <button style={{ backgroundColor: primaryColor }} className="flex items-center text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
            Get Started <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About