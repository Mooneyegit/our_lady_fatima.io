// "use client"
// import {useState} from 'react'

// const faqs = [
//     {
//         id: 1,
//         question: "What's the best thing about Switzerland?",
//         answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//     },
//     {
//         id: 2,
//         question: "How do you make holy water?",
//         answer: "You boil the hell out of it. It's an ancient technique passed down through generations of spiritual chemists.",
//     },
//     {
//         id: 3,
//         question: "What do you call someone with no body and no nose?",
//         answer: "Nobody knows! It’s one of life’s great philosophical mysteries.",
//     },
//     {
//         id: 4,
//         question: "Why do you never see elephants hiding in trees?",
//         answer: "Because they're so good at it. Their camouflage skills are severely underestimated in the wild.",
//     },
//     {
//         id: 5,
//         question: "Why can't you hear a pterodactyl go to the bathroom?",
//         answer: "Because the 'P' is silent. A key rule of paleontology etiquette.",
//     },
//     {
//         id: 6,
//         question: "Why did the invisible man turn down the job offer?",
//         answer: "He couldn't see himself doing it. The lack of visibility made career planning difficult.",
//     },
// ];


// const Faq = () => {
//         const [openId, setOpenId] = useState(faqs[0].id);

//     const toggleOpen = (id) => {
//         setOpenId(openId === id ? null : id);
//     };
//   return (
//      <div className="bg-slate-900 py-16 sm:py-24">
//             <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-5xl font-bold tracking-tight text-white pb-12 sm:pb-16">
//                     Frequently asked questions
//                 </h2>

//                 <dl className="space-y-6">
//                     {faqs.map((faq) => (
//                         <div key={faq.id} className="pt-6 border-b border-slate-700/50 pb-6">
//                             <dt>
//                                 <button
//                                     className="flex w-full items-start justify-between text-left text-white focus:outline-none"
//                                     onClick={() => toggleOpen(faq.id)}
//                                 >
//                                     <span className="text-xl font-semibold leading-7">{faq.question}</span>
//                                     <span className="ml-6 flex h-7 items-center">
//                                         {openId === faq.id ? (
//                                             <svg className="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
//                                             </svg>
//                                         ) : (
//                                             <svg className="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//                                             </svg>
//                                         )}
//                                     </span>
//                                 </button>
//                             </dt>
//                             {openId === faq.id && (
//                                 <dd className="mt-2 pr-12 transition-all duration-300 ease-in-out">
//                                     <p className="text-base leading-7 text-slate-400">{faq.answer}</p>
//                                 </dd>
//                             )}
//                         </div>
//                     ))}
//                 </dl>
//             </div>
//         </div>
//   )
// }

// export default Faq


"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What's the difference between assisted living and a nursing home?",
    answer:
      " Assisted living provides support with daily activities while promoting independence. Nursing homes offer 24/7 medical care. Many seniors thrive in assisted living for years before needing skilled nursing.",
  },
  {
    id: 2,
    question: "Do you accept Medicaid or Medicare?",
    answer:
      "We work with families to explore all payment options, including long-term care insurance, VA benefits, and private pay. Contact us for a personalized financial consultation.",
  },
  {
    id: 3,
    question: "Can couples with different care needs live together?",
    answer:
      "Yes! We often accommodate couples where one spouse needs memory care while the other only needs assisted living. We create customized solutions for each situation.",
  },
  {
    id: 4,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Their camouflage skills are severely underestimated in the wild.",
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the 'P' is silent. A key rule of paleontology etiquette.",
  },
  {
    id: 6,
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. The lack of visibility made career planning difficult.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(faqs[0].id);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#F9F9F7] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-gray-600 pb-12 sm:pb-16">
          Frequently asked questions
        </h2>

        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="pt-6 border-b border-slate-700/50 pb-6"
            >
              <dt>
                <button
                  className="flex w-full items-start justify-between text-left text-gray-600 focus:outline-none"
                  onClick={() => toggleOpen(faq.id)}
                >
                  <span className="text-xl font-semibold leading-7">
                    {faq.question}
                  </span>

                  <span className="ml-6 flex h-7 items-center">
                    {openId === faq.id ? (
                      <svg
                        className="h-6 w-6 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </dt>

              {openId === faq.id && (
                <dd className="mt-2 pr-12 transition-all duration-300 ease-in-out">
                  <p className="text-base leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
