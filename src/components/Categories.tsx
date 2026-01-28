'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Finance',
    description: 'Smart money management, wealth building strategies, and financial wisdom for everyday life.',
    videoCount: 45,
    color: 'from-neon-pink to-neon-coral',
    bgColor: 'bg-neon-pink/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Business',
    description: 'Business models, entrepreneurship insights, and corporate strategies decoded.',
    videoCount: 32,
    color: 'from-electric-blue to-cyber-purple',
    bgColor: 'bg-electric-blue/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Motivation',
    description: 'Personal transformation, mindset shifts, and achieving your goals faster.',
    videoCount: 38,
    color: 'from-mint-glow to-electric-blue',
    bgColor: 'bg-mint-glow/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Lifestyle',
    description: 'American dream reality, life lessons, and navigating modern challenges.',
    videoCount: 28,
    color: 'from-cyber-purple to-neon-pink',
    bgColor: 'bg-cyber-purple/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Success Secrets',
    description: 'Hidden strategies the wealthy use, and actionable steps to level up.',
    videoCount: 25,
    color: 'from-neon-coral to-mint-glow',
    bgColor: 'bg-neon-coral/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Side Hustles',
    description: 'Income streams, passive income ideas, and building multiple revenue sources.',
    videoCount: 22,
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
            Explore my diverse range of content. From finance and business insights to motivation
            and lifestyle tips, there&apos;s something for everyone looking to level up.
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
