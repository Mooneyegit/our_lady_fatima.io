"use client"
import React from 'react'
import { motion} from 'framer-motion';
import { ChevronRight, Rss } from 'lucide-react';


const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const lightBackground = '#F9F9F7';


interface PostItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  author: string;
  imageUrl: string;
}

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
    <div className="p-6 flex flex-col grow">
      <p className="text-xs uppercase font-medium mb-1" style={{ color: accentColor }}>{post.date} - {post.author}</p>
      <h3 className="text-2xl font-light mb-3" style={{ color: primaryColor }}>{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4 grow">{post.summary}</p>
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
            className="grow p-3 rounded-xl border border-gray-600 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
          />
          <button style={{ backgroundColor: accentColor, color: primaryColor }} className="px-6 py-3 rounded-xl font-semibold transition duration-300 hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </motion.div>
);

const page = () => {
  return (
    <>
    <BlogPage />
    </>
  )
}

export default page