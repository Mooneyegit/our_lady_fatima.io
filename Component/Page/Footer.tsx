import React from 'react'
import {  Rocket} from 'lucide-react';
const links = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Automation', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Submit ticket', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
    ],
    legal: [
        { name: 'Terms of service', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'License', href: '#' },
    ],
};

const Footer = () => {
  return (
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
            {/* Main Links Grid */}
            <div className="grid grid-cols-2 gap-8 xl:col-span-4 xl:grid-cols-5 border-b border-slate-800 pb-10 mb-10">
                {/* Logo and Wave */}
                <div className="col-span-2 md:col-span-1 flex justify-start">
                    <div className="flex flex-col items-start">
                        <Rocket className="h-8 w-8 text-indigo-400" />
                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            The future of remote work, built today.
                        </p>
                    </div>
                </div>

                {/* Navigation Sections */}
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 col-span-2 md:col-span-4">
                    {Object.entries(links).map(([title, linkGroup]) => (
                        <div key={title} className="text-sm">
                            <h3 className="text-base font-semibold text-white capitalize">{title}</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {linkGroup.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-slate-400 hover:text-white transition duration-200">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter and Copyright/Social */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                {/* Newsletter Signup */}
                <div className="mb-8 md:mb-0 max-w-lg">
                    <h3 className="text-lg font-semibold text-white">Subscribe to our newsletter</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    <form className="mt-4 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-xl border-0 bg-slate-800/80 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible\:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Copyright and Social Icons */}
                <div className="flex flex-col items-start md:items-end">
                    <div className="flex space-x-6">
                        {/* {[Facebook, Instagram, Github, Youtube, Mail].map((Icon, index) => (
                            <a key={index} href="#" className="text-slate-500 hover:text-indigo-400 transition duration-200">
                                <span className="sr-only">{Icon.name}</span>
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))} */}
                    </div>
                    <p className="mt-8 text-xs leading-5 text-slate-500">
                        &copy; 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer