'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tech Reviews',
    description: 'In-depth reviews of the latest gadgets, smartphones, laptops, and tech accessories.',
    videoCount: 85,
    color: 'from-neon-pink to-neon-coral',
    bgColor: 'bg-neon-pink/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tutorials',
    description: 'Step-by-step guides on software, editing, coding, and creative workflows.',
    videoCount: 52,
    color: 'from-electric-blue to-cyber-purple',
    bgColor: 'bg-electric-blue/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Gaming',
    description: 'Gaming content, reviews, walkthroughs, and epic gaming moments.',
    videoCount: 38,
    color: 'from-mint-glow to-electric-blue',
    bgColor: 'bg-mint-glow/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Vlogs',
    description: 'Behind the scenes, daily life, travel adventures, and personal stories.',
    videoCount: 25,
    color: 'from-cyber-purple to-neon-pink',
    bgColor: 'bg-cyber-purple/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Experiments',
    description: 'Fun tech experiments, DIY projects, and creative builds.',
    videoCount: 18,
    color: 'from-neon-coral to-mint-glow',
    bgColor: 'bg-neon-coral/10',
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Q&A',
    description: 'Community questions, advice sessions, and interactive content.',
    videoCount: 12,
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
            Explore my diverse range of content. From tech reviews to gaming, there&apos;s
            something for every tech enthusiast.
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
