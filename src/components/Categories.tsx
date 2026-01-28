'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Investing Basics',
    description: 'Stock market fundamentals, ETFs, index funds, and getting started with investing.',
    videoCount: 35,
    color: 'from-neon-pink to-neon-coral',
    bgColor: 'bg-neon-pink/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personal Finance',
    description: 'Budgeting, saving strategies, and managing your money effectively.',
    videoCount: 30,
    color: 'from-electric-blue to-cyber-purple',
    bgColor: 'bg-electric-blue/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Market Updates',
    description: 'Latest financial news, market trends, and what they mean for your portfolio.',
    videoCount: 25,
    color: 'from-mint-glow to-electric-blue',
    bgColor: 'bg-mint-glow/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Money Habits',
    description: 'Building wealth mindset, daily habits, and practical money management tips.',
    videoCount: 20,
    color: 'from-cyber-purple to-neon-pink',
    bgColor: 'bg-cyber-purple/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Savings Strategies',
    description: 'Emergency funds, savings goals, and practical steps to save more money.',
    videoCount: 8,
    color: 'from-neon-coral to-mint-glow',
    bgColor: 'bg-neon-coral/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Income Strategies',
    description: 'Ways to increase your income, side income ideas, and earning potential.',
    videoCount: 7,
    color: 'from-electric-blue to-mint-glow',
    bgColor: 'bg-electric-blue/10',
  },
]

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      {/* Floating Orbs */}
      <motion.div
        className="orb orb-purple w-[400px] h-[400px] -bottom-40 left-1/4"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">What I Create</span>
          <h2 className="text-heading mb-4">
            Content <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Explore my content focused on US finance and investing. From investing basics to
            practical money strategies, everything you need to start building wealth.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-2xl p-6 overflow-hidden card-hover gradient-border cursor-pointer">
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 text-void group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-pearl mb-3 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-silver text-sm mb-4 group-hover:text-pearl/80 transition-colors">
                    {category.description}
                  </p>

                  {/* Video Count & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-silver">
                      {category.videoCount} videos
                    </span>
                    <motion.span
                      className={`text-xs font-heading font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent flex items-center gap-1`}
                      whileHover={{ x: 5 }}
                    >
                      Explore
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Videos Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-full px-8 py-4">
            <span className="text-silver font-heading">Total Videos:</span>
            <span className="font-display text-2xl font-bold gradient-text">
              {categories.reduce((acc, cat) => acc + cat.videoCount, 0)}+
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
