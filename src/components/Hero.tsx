'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 20

      containerRef.current.style.setProperty('--mouse-x', `${xPercent}px`)
      containerRef.current.style.setProperty('--mouse-y', `${yPercent}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-void">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Floating Orbs */}
        <motion.div
          className="orb orb-pink w-[600px] h-[600px] -top-40 -right-40"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-blue w-[500px] h-[500px] bottom-0 -left-40"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="orb orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3d7f" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff3d7f" stopOpacity="1" />
              <stop offset="100%" stopColor="#4facfe" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${20 + i * 15}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
              <span className="text-label">Content Creator & YouTuber</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display mb-6"
            >
              <span className="block text-pearl">TASVIR</span>
              <span className="block gradient-text glow-text">MIRZA</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Helping you master money, decode business, and level up your life.
              Your guide to financial freedom and personal transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#videos"
                onClick={(e) => { e.preventDefault(); scrollToSection('#videos') }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Latest Video
                </span>
              </motion.a>
              <motion.a
                href="https://youtube.com/@TasvirMirza?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe
                </span>
              </motion.a>
            </motion.div>

            {/* Social Stats Quick */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '500K+', label: 'Subscribers' },
                { value: '50M+', label: 'Views' },
                { value: '200+', label: 'Videos' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-silver text-sm font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="relative"
            style={{
              transform: 'translate(var(--mouse-x), var(--mouse-y))',
            }}
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[90%] h-[90%] rounded-full border border-neon-pink/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[80%] h-[80%] rounded-full border border-electric-blue/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Profile Image Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-4 bg-gradient-to-br from-neon-pink/40 to-electric-blue/40 rounded-full blur-3xl" />

              {/* Image Frame */}
              <div className="relative rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/tasvir-mirza.jpg"
                  alt="Tasvir Mirza"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute top-10 -left-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-heading font-medium flex items-center gap-2">
                  <span className="text-neon-coral">💰</span> Finance
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -right-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-sm font-heading font-medium flex items-center gap-2">
                  <span className="text-electric-blue">🏢</span> Business
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-5 left-10 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-sm font-heading font-medium flex items-center gap-2">
                  <span className="text-mint-glow">⚡</span> Motivation
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-silver"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-silver/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-neon-pink rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
