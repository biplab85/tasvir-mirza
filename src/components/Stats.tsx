'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const stats = [
  {
    value: 506,
    suffix: '+',
    label: 'Subscribers',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#0a0a0f"/>
      </svg>
    ),
    description: 'Growing community of finance enthusiasts',
    color: 'from-neon-pink to-neon-coral',
  },
  {
    value: 90386,
    suffix: '+',
    label: 'Total Views',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
    description: 'Financial education content watched',
    color: 'from-electric-blue to-cyber-purple',
  },
  {
    value: 125,
    suffix: '+',
    label: 'Videos',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
      </svg>
    ),
    description: 'Investing & finance videos created',
    color: 'from-mint-glow to-electric-blue',
  },
  {
    value: 2,
    suffix: '+',
    label: 'Years Creating',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
      </svg>
    ),
    description: 'Creating content since October 2022',
    color: 'from-cyber-purple to-neon-pink',
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    const duration = 2000

    const formatNumber = (num: number) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
      }
      return num.toString()
    }

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  const formatDisplay = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }

  return (
    <span className="font-display text-5xl lg:text-6xl font-bold">
      {formatDisplay(displayValue)}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-obsidian"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint-glow/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

        {/* Animated Grid */}
        <div className="grid-pattern absolute inset-0 opacity-20" />

        {/* Glowing Orbs */}
        <motion.div
          className="orb orb-pink w-[500px] h-[500px] -top-60 left-1/4"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-blue w-[400px] h-[400px] -bottom-40 right-1/4"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Social Proof</span>
          <h2 className="text-heading mb-4">
            Channel <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Numbers that tell the story of a growing finance education channel and community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-full glass rounded-2xl p-6 text-center overflow-hidden card-hover">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(135deg, var(--neon-pink), var(--electric-blue))`,
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 text-void group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>

                {/* Label */}
                <h3 className="font-heading text-lg font-semibold text-pearl mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-silver text-sm">
                  {stat.description}
                </p>

                {/* Decorative Glow */}
                <div
                  className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden"
        >
          <div className="py-6 border-y border-white/5">
            <div className="marquee-container">
              <div className="marquee-content">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {['Investing', 'Personal Finance', 'Money Habits', 'Market Updates', 'Wealth Building', 'Savings Tips', 'Stock Market', 'Financial Freedom'].map((item, j) => (
                      <span
                        key={j}
                        className="px-8 font-display text-2xl lg:text-4xl font-bold text-smoke whitespace-nowrap"
                      >
                        {item}
                        <span className="text-neon-pink mx-4">•</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
