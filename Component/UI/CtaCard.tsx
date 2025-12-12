

const CtaCard = () => {
  return (
      <div className="bg-[#F9F9F7] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#A8996C] p-8 text-center shadow-2xl sm:p-16">
                <h2 className="mx-auto max-w-4xl text-3xl lg:text-5xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                    Ready to experience exceptional care?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                     Discover the right level of care for your loved one in few clicks and schedule a tour today!.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-xl bg-[#A8996C] px-6 py-3 text-sm md:text-lg font-semibold text-white shadow-sm hover:bg-gray-600 transition duration-300 focus-visible\:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Get started
                    </a>
                    <a href="#" className="text-lg font-semibold leading-6 text-white hover:text-gray-400 transition duration-300">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
                {/* Background gradient effect */}
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-\[64rem] w-\[64rem] -translate-x-1/2 [mask-image\:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#CTA-gradient)" fillOpacity="0.4" />
                    <defs>
                        <radialGradient id="CTA-gradient">
                            <stop stopColor="#6366F1" />
                            <stop offset={1} stopColor="#1E293B" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default CtaCard