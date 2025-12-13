"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

interface TestimonialSlideProps extends Testimonial {}

const testimonialData: Testimonial[] = [
  {
    quote:
      "The dedication and quality of service exceeded all our expectations. A truly essential partner for growth.",
    author: "Alice Johnson",
    title: "CEO, TechSphere",
    imageUrl: "https://placehold.co/100x100/A8996C/4D4C3A?text=A.J.",
  },
  {
    quote:
      "We've seen massive improvements in efficiency since implementing their strategy. Highly recommend their expertise.",
    author: "Bob Smith",
    title: "Director of Operations, GreenFlow",
    imageUrl: "https://placehold.co/100x100/4D4C3A/A8996C?text=B.S.",
  },
  {
    quote:
      "Exceptional design and attention to detail. The whole process was seamless and incredibly professional.",
    author: "Carol Williams",
    title: "Founder, Creative Hub",
    imageUrl: "https://placehold.co/100x100/A8996C/4D4C3A?text=C.W.",
  },
  {
    quote:
      "Exceptional design and attention to detail. The whole process was seamless and incredibly professional.",
    author: "David Williams",
    title: "Founder, Creative Git",
    imageUrl: "https://placehold.co/100x100/A8996C/4D4C3A?text=D.W.",
  },
];

const TestimonialSlide = ({
  quote,
  author,
  title,
  imageUrl,
}: TestimonialSlideProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center p-8 bg-white/5 rounded-2xl">
      <Image
        src={imageUrl}
        alt={author}
        width={96}
        height={96}
        className="rounded-full mx-auto mb-6"
      />

      <Quote className="text-white w-8 h-8 mx-auto mb-6" />

      <p className="text-xl italic text-white mb-8">“{quote}”</p>

      <p className="font-bold text-white">{author}</p>
      <p className="text-[#A8996C]">{title}</p>
    </div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-[#4D4C3A] text-center">
      <TestimonialSlide {...testimonialData[current]} />

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
        {testimonialData.map((testimonial, index) => (
          <button
            key={testimonial.author}
            aria-current={current === index}
            onClick={() => setCurrent(index)}
            className={`mx-auto rounded-full transition-all duration-200 items-center  ${
              current === index
                ? "ring-4 ring-[#A8996C] scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.author}
              width={96}
              height={96}
              className="rounded-full"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
