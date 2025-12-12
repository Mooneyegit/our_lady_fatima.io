import React from 'react';

// 1. Define the TypeScript interface for a Service object
interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

// 2. Define colors (assuming they are constants or would come from a theme/context)
const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';

// Data array is now correctly typed
const servicesData: Service[] = [
  {
    title: "Residential Care",
    description: "We offer family-run Residential Home Care in Melbourne, providing Residential Care, Dementia Care, Respite and Day Care services for the elderly.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Residential",
  },
  {
    title: "Dementia Care",
    description: "Our dedicated team provides specialist support and a safe, nurturing environment for residents living with dementia, focusing on dignity and well-being.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Dementia",
  },
  {
    title: "Respite Care",
    description: "Offering short-term care to give primary caregivers a well-deserved break, ensuring their loved ones receive the highest quality of care in a comfortable setting.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Respite",
  },
];

// 3. Define the interface for ServiceCard props
interface ServiceCardProps {
  service: Service;
}

// 4. Use React.FC and define the props type
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
   <div className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
    <div className="relative h-48">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h4 className="text-2xl font-light mb-3" style={{ color: primaryColor }}>{service.title}</h4>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  </div>
);

// 5. Use React.FC for the main component
const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: accentColor }}>
        Our Services
      </h2>
      <h3 className="text-4xl lg:text-5xl font-light mb-12" style={{ color: primaryColor }}>
        Specialized Care for Every Need
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services;