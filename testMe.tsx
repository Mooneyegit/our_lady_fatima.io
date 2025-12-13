import React, { useState } from 'react';
import { Menu, MapPin, Phone, Mail, ChevronRight, Check, Rss } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Global Constants and Types ---

// Define the primary color (dark olive/brown) and accent color (soft gold)
const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const lightBackground = '#F9F9F7';

type PageName = 'Home' | 'About' | 'Services' | 'Blog' | 'Contact';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  details: string[]; // Added for Services Page
}

interface PostItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  author: string;
  imageUrl: string;
}

// --- Data Structure ---

const servicesData: ServiceItem[] = [
  {
    title: "Residential Care",
    description: "We offer family-run Residential Home Care in Melbourne, providing round-the-clock support in a home-like setting.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Residential+Care",
    details: ["24/7 Professional Nursing", "Personalised Care Plans", "Daily Social Activities", "Nutritious Meals & Dining"],
  },
  {
    title: "Dementia Care",
    description: "Our dedicated team provides specialist support and a safe, nurturing environment focusing on dignity and well-being.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Dementia+Care",
    details: ["Specialist Dementia Unit", "Sensory & Cognitive Stimulation", "Safe, Secure Environment", "Trained Memory Care Staff"],
  },
  {
    title: "Respite Care",
    description: "Offering short-term care to give primary caregivers a well-deserved break, ensuring loved ones receive high-quality temporary care.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Respite+Care",
    details: ["Flexible Stay Durations", "Full Access to Amenities", "Rehabilitation Support", "Immediate Placement Availability"],
  },
  {
    title: "Day Care Services",
    description: "Engaging and social day programs for local seniors, providing a stimulating environment and promoting community connection.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Day+Care",
    details: ["Transportation Options", "Lunch and Snacks Provided", "Group Activities & Outings", "Family Support Services"],
  },
];

const blogPosts: PostItem[] = [
  {
    id: 1,
    title: "The Importance of Routine in Dementia Care",
    summary: "Maintaining a predictable daily structure can significantly reduce anxiety and confusion for residents living with dementia. Learn our best practices.",
    date: "Dec 1, 2025",
    author: "Dr. Eleanor Vance",
    imageUrl: "https://placehold.co/400x200/4D4C3A/A8996C?text=Dementia+Routine",
  },
  {
    id: 2,
    title: "Choosing the Right Time for Residential Care",
    summary: "It's a difficult decision. This guide offers key indicators and emotional support to help families determine when residential care is the best option.",
    date: "Nov 15, 2025",
    author: "Mr. David Chen",
    imageUrl: "https://placehold.co/400x200/A8996C/4D4C3A?text=Care+Decision",
  },
  {
    id: 3,
    title: "Respite Care: Giving Caregivers the Break They Deserve",
    summary: "Respite care is vital for preventing caregiver burnout. See how our short-term stays benefit both the senior and their primary family caregiver.",
    date: "Oct 28, 2025",
    author: "Ms. Sarah Jones",
    imageUrl: "https://placehold.co/400x200/4D4C3A/A8996C?text=Respite+Break",
  },
];

// --- SEO Metadata Component (Simulation for single-file environment) ---
const MetaHead: React.FC<{ page: PageName }> = ({ page }) => {
    // In a real Next.js application, this would use the next/head component 
    // to inject these tags into the document's actual <head>.
    const siteTitle = "CareHome - Luxury Residential & Dementia Care";
    const canonicalUrl = "https://carehome.com/";
    
    let pageTitle = siteTitle;
    let description = "A family-run luxury care home in Melbourne, Australia, specializing in Residential, Dementia, Respite, and Day Care services. Commitment to comfort and happiness.";

    switch (page) {
        case 'About':
            pageTitle = `About Us | ${siteTitle}`;
            description = "Learn about CareHome's history, family values, and our commitment to personalized, dignified care for the elderly.";
            break;
        case 'Services':
            pageTitle = `Our Services | ${siteTitle}`;
            description = "Explore our specialized care programs, including 24/7 Residential Care, secure Dementia Care, and flexible Respite services.";
            break;
        case 'Blog':
            pageTitle = `Insights & Blog | ${siteTitle}`;
            description = "Read our latest articles and expert advice on elderly care, well-being, and community life.";
            break;
        case 'Contact':
            pageTitle = `Contact Us | ${siteTitle}`;
            description = "Get in touch with the CareHome team to book a tour, inquire about admissions, or ask any questions.";
            break;
    }

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${canonicalUrl}${page === 'Home' ? '' : page.toLowerCase()}`} />
            
            {/* Open Graph / Social Sharing Meta */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${canonicalUrl}${page === 'Home' ? '' : page.toLowerCase()}`} />
            <meta property="og:image" content="https://placehold.co/1200x630/4D4C3A/A8996C?text=CareHome+Social+Share" />
            <meta property="og:locale" content="en_AU" />
            
            {/* Twitter Card Meta */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@CareHomeMelbourne" />
        </>
    );
};


// --- Shared Components ---

// Prop type for the Header component
interface HeaderProps {
  currentPage: PageName;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageName>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: PageName[] = ['Home', 'About', 'Services', 'Blog', 'Contact'];

  const handleNavClick = (page: PageName) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      {/* Top Contact Bar (Dark Olive Green) */}
      <div style={{ backgroundColor: primaryColor }} className="hidden lg:flex justify-between items-center py-2 px-12 text-sm">
        <div className="flex space-x-4">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-gray-300" />
            70 St. Street Name Rd, Solihull B92 7BP
          </span>
        </div>
        <div className="flex space-x-6">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-1 text-gray-300" />
            123-456-8321
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-1 text-gray-300" />
            support@company.com
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between items-center py-4 px-6 lg:px-12 bg-black bg-opacity-10 backdrop-blur-sm">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setCurrentPage('Home')} 
          className="text-2xl font-bold tracking-widest focus:outline-none"
        >
          <span style={{ color: accentColor }}>Care</span><span className="text-white">Home</span>
        </motion.button>
        <div className="hidden lg:flex space-x-8 text-sm font-medium">
          {navItems.map(item => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (navItems.indexOf(item) * 0.05) }}
              onClick={() => handleNavClick(item)}
              className="hover:text-amber-200 transition focus:outline-none"
            >
              {item}
            </motion.button>
          ))}
        </div>
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 py-4 px-6 text-sm flex flex-col space-y-2 bg-black bg-opacity-90 overflow-hidden"
          >
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="py-2 text-left hover:text-amber-200 transition border-b border-gray-700 last:border-b-0 focus:outline-none"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer: React.FC = () => (
  <motion.footer 
    style={{ backgroundColor: primaryColor }} 
    className="text-white py-12 px-6 lg:px-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & Mission */}
        <div className="col-span-2 lg:col-span-1">
          <div className="text-2xl font-bold tracking-widest mb-4">
            <span style={{ color: accentColor }}>Care</span><span className="text-white">Home</span>
          </div>
          <p className="text-sm text-gray-300">
            Providing compassionate, luxury care in the heart of the community. Your loved ones are safe with us.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button className="hover:text-white transition">About Us</button></li>
            <li><button className="hover:text-white transition">Our Services</button></li>
            <li><button className="hover:text-white transition">Life at Home</button></li>
            <li><button className="hover:text-white transition">Careers</button></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Care Types</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            {servicesData.slice(0, 4).map(s => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Contact</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              70 St. Street Name Rd, Solihull B92 7BP
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              123-456-8321
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              support@company.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CareHome. All rights reserved.
      </div>
    </div>
  </motion.footer>
);

// --- Page Components ---

const HomePage: React.FC = () => (
  <motion.div
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-[110px] lg:pt-0"
  >
    <section className="relative h-[90vh] lg:h-[100vh]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center -z-10" style={{
        backgroundImage: `url(https://placehold.co/1600x1200/4D4C3A/ffffff?text=Luxury+Home+Care+Hero+Image)`,
        backgroundPosition: 'center 40%'
      }}>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative flex flex-col justify-center items-center h-full text-center text-white p-6 pt-32 lg:pt-0"
      >
        <h1 className="text-4xl lg:text-7xl font-light max-w-4xl leading-tight mb-6 text-shadow-light">
          A Luxury Care Home in the heart of Melbourne, Australia
        </h1>
        <p className="text-lg lg:text-xl font-extralight max-w-3xl mb-10 text-shadow-light">
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
      </motion.div>
    </section>

    {/* About Section (As part of Home Page scroll) */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="lg:pr-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/700x500/A8996C/4D4C3A?text=Caregiver+and+Elderly+Resident"
                alt="Caregiver assisting elderly resident with a tablet"
                className="w-full h-auto object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/700x500/A8996C/4D4C3A?text=Image+Load+Error"}
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
            </p>
            <button style={{ backgroundColor: primaryColor }} className="flex items-center text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
              Read More <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Services Overview Section */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: accentColor }}>
          Our Specialized Services
        </h2>
        <h3 className="text-4xl lg:text-5xl font-light mb-12" style={{ color: primaryColor }}>
          A Range of Care Options for Peace of Mind
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.slice(0, 4).map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden text-left"
            >
              <div className="relative h-48">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/400x250/ECECEC/6B7B43?text=Image+Load+Error"}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-light mb-2" style={{ color: primaryColor }}>{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                <button className="flex items-center text-sm font-medium" style={{ color: accentColor }}>
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </motion.div>
);

const AboutPage: React.FC = () => (
  <motion.div 
    key="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-32 lg:pt-40"
  >
    {/* Hero Banner for About */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cover bg-center h-64 flex items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/4D4C3A/A8996C?text=About+Us+Banner)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-5xl font-light text-white z-10 text-shadow-light">Our Story</h1>
    </motion.div>

    {/* Content Section 1: Our Philosophy */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl lg:text-5xl font-light mb-6" style={{ color: primaryColor }}>
              A Home, Not Just a Residence
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 pl-4" style={{ borderColor: accentColor }}>
              "The quality of life should never diminish with age. We are dedicated to ensuring every day is lived with dignity, comfort, and engagement." - The Founder's Motto
            </p>
            <button style={{ backgroundColor: accentColor, color: primaryColor }} className="flex items-center px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
              Meet Our Team <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://placehold.co/700x500/A8996C/4D4C3A?text=Founders+Image"
              alt="Care Home Founders"
              className="w-full h-auto object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/700x500/A8996C/4D4C3A?text=Image+Load+Error"}
            />
          </div>
        </div>
      </div>
    </motion.section>

    {/* Content Section 2: Values */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-4xl lg:text-5xl font-light mb-12" style={{ color: primaryColor }}>
          The Pillars of Our Care
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Dignity", "Compassion", "Excellence"].map((value, index) => (
            <motion.div 
              key={value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-3" style={{ color: accentColor }}>{value}</h4>
              <p className="text-gray-600">
                {value === "Dignity" && "Respecting the individuality and personal history of every resident, ensuring all care is provided with the utmost discretion and respect."}
                {value === "Compassion" && "Our team delivers care with true heart, empathy, and kindness, recognizing the emotional needs alongside the physical ones."}
                {value === "Excellence" && "We are committed to continuous improvement, maintaining the highest standards in clinical care, facilities, and staff training."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </motion.div>
);

const ServicesPage: React.FC = () => (
  <motion.div 
    key="services"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-32 lg:pt-40"
  >
    {/* Hero Banner for Services */}
    <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/A8996C/4D4C3A?text=Services+Banner)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-5xl font-light text-white z-10 mb-2 text-shadow-light">Comprehensive Care</h1>
      <p className="relative text-lg text-gray-200 z-10 text-shadow-light">Tailored solutions for every stage of life.</p>
    </div>

    {/* Services Grid */}
    <section className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-12 text-center" style={{ color: primaryColor }}>
          Our Care Programs
        </h2>
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'bg-white' : `bg-gray-50`}`}
            >
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1'}>
                <h3 className="text-3xl lg:text-4xl font-light mb-4" style={{ color: primaryColor }}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description} We believe in a holistic approach, ensuring physical, emotional, and social needs are met with excellence.</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: accentColor }} />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button style={{ backgroundColor: primaryColor }} className="flex items-center text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
                  Enquire About {service.title} <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2'}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-auto object-cover rounded-xl"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/700x500/A8996C/4D4C3A?text=Image+Load+Error"}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const BlogCard: React.FC<{ post: PostItem; index: number }> = ({ post, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-2xl"
  >
    <div className="h-56">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/400x200/A8996C/4D4C3A?text=Image+Load+Error"}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs uppercase font-medium mb-1" style={{ color: accentColor }}>{post.date} - {post.author}</p>
      <h3 className="text-2xl font-light mb-3" style={{ color: primaryColor }}>{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.summary}</p>
      <button className="flex items-center text-sm font-medium mt-auto" style={{ color: primaryColor }}>
        Read Article <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </motion.div>
);

const BlogPage: React.FC = () => (
  <motion.div 
    key="blog"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-32 lg:pt-40"
  >
    {/* Hero Banner for Blog */}
    <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center relative" style={{ backgroundColor: primaryColor }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <Rss className="relative w-12 h-12 text-white mb-4 z-10" />
      <h1 className="relative text-5xl font-light text-white z-10 mb-2 text-shadow-light">Our Insights</h1>
      <p className="relative text-lg text-gray-200 z-10 text-shadow-light">Expert advice on elderly care and well-being.</p>
    </div>

    {/* Blog Posts Grid */}
    <section className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-12 text-center" style={{ color: primaryColor }}>
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter Signup (Example) */}
    <section className="py-16" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-6 lg:px-12 text-center text-white">
        <h3 className="text-3xl font-light mb-4">Stay Informed</h3>
        <p className="mb-6 text-gray-300">Subscribe to our newsletter for the latest in caregiving and retirement life.</p>
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-3 rounded-xl border border-gray-600 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
          />
          <button style={{ backgroundColor: accentColor, color: primaryColor }} className="px-6 py-3 rounded-xl font-semibold transition duration-300 hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </motion.div>
);

const ContactPage: React.FC = () => (
    <motion.div 
        key="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 lg:pt-40"
    >
      {/* Hero Banner for Contact */}
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/4D4C3A/A8996C?text=Contact+Us+Banner)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Mail className="relative w-12 h-12 text-white mb-4 z-10" />
        <h1 className="relative text-5xl font-light text-white z-10 text-shadow-light">Get In Touch</h1>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}
      >
          <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Contact Info Column */}
                  <div className="lg:col-span-1 space-y-8 p-6 rounded-xl shadow-lg" style={{ backgroundColor: lightBackground }}>
                      <h3 className="text-3xl font-light" style={{ color: primaryColor }}>Find Us</h3>
                      
                      <div className="flex items-start">
                          <MapPin className="w-6 h-6 mr-4 flex-shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Address</p>
                              <p className="text-gray-600">70 St. Street Name Rd, Solihull B92 7BP, Melbourne, VIC 3000</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <Phone className="w-6 h-6 mr-4 flex-shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Phone</p>
                              <p className="text-gray-600">Main Line: 123-456-8321</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <Mail className="w-6 h-6 mr-4 flex-shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Email</p>
                              <p className="text-gray-600">Admissions: info@company.com</p>
                          </div>
                      </div>
                  </div>

                  {/* Contact Form Column */}
                  <div className="lg:col-span-2 p-8 rounded-xl shadow-2xl bg-white">
                      <h3 className="text-3xl font-light mb-6" style={{ color: primaryColor }}>Send Us a Message</h3>
                      <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <input type="text" placeholder="Your Full Name" className="p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition" />
                              <input type="email" placeholder="Your Email Address" className="p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition" />
                          </div>
                          <div>
                              <select className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-600">
                                  <option value="">I am interested in...</option>
                                  <option value="Residential Care">Residential Care</option>
                                  <option value="Respite Care">Respite Care</option>
                              </select>
                          </div>
                          <div>
                              <textarea placeholder="Your Message" rows={5} className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"></textarea>
                          </div>
                          <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="submit" 
                              style={{ backgroundColor: accentColor, color: primaryColor }} 
                              className="px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:opacity-90"
                          >
                              Submit Enquiry
                          </motion.button>
                      </form>
                  </div>
              </div>
          </div>
      </motion.section>
    </motion.div>
);


// --- Main Application Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('Home');

  // Conditional rendering (simulated routing)
  const renderPage = () => {
    // We wrap the component in AnimatePresence so Framer Motion can handle the exit animation
    return (
      <AnimatePresence mode="wait">
        {currentPage === 'Home' && <HomePage key="Home" />}
        {currentPage === 'About' && <AboutPage key="About" />}
        {currentPage === 'Services' && <ServicesPage key="Services" />}
        {currentPage === 'Blog' && <BlogPage key="Blog" />}
        {currentPage === 'Contact' && <ContactPage key="Contact" />}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen font-sans antialiased relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Simulation of SEO Head Tags - In a real Next.js app, this would use <Head> */}
      <MetaHead page={currentPage} />
      
      <style>{`
        /* Global Styles for Tailwind Integration */
        body {
          background-color: ${lightBackground};
          scroll-behavior: smooth;
        }
        /* Custom text shadow for better readability on hero banners */
        .text-shadow-light {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
        }
      `}</style>

      {/* The Header is always fixed, but its background transparency is managed by its own styling. */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="min-h-[70vh] relative">
        {/* Render the specific page content with transition */}
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}