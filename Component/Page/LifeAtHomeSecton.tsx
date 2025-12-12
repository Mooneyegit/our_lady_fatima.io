import { ChevronRight, Check } from 'lucide-react'
import Image from 'next/image';
import CoupleImage from '@/public/assert/Timber Woods is designed to promote a….jpg'

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const LifeAtHomeSecton = () => {
  return (
     <section id="life" className="py-16 lg:py-24" style={{ backgroundColor: '#F9F9F7' }}>
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div>
          <h2 className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: accentColor }}>
            Community & Well-being
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light mb-6" style={{ color: primaryColor }}>
            Life at Home Care
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Activities at Home Care is an important part of the home and well-being of the residents. It is important to be able to enjoy the activities they have a connection to any past times and hobbies you may have.
            <br /><br />
            A varied programme of activities is prepared and designed to promote enjoyment, sensory input, and stimulation. Regular exercise classes, music afternoons, quizzes and craft sessions are all part of the program. Engage in sessions most loved by residents through the week, and ensure members of staff from all departments spend time on a meaningful activity with a resident.
          </p>
          <div className="space-y-3 mb-8">
            <p className="flex items-center text-gray-700"><Check className="w-5 h-5 mr-3" style={{ color: accentColor }} />Personalized activity programs</p>
            <p className="flex items-center text-gray-700"><Check className="w-5 h-5 mr-3" style={{ color: accentColor }} />Dedicated, compassionate staff</p>
            <p className="flex items-center text-gray-700"><Check className="w-5 h-5 mr-3" style={{ color: accentColor }} />Nutritious, chef-prepared meals</p>
          </div>
          <button style={{ backgroundColor: accentColor, color: primaryColor }} className="flex items-center px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
            View Sample Menu <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="lg:pl-10 order-first lg:order-last">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={CoupleImage}
              alt="Elderly couple sitting together enjoying conversation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LifeAtHomeSecton