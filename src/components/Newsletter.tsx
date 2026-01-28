'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent" />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-electric-blue/5" />

        {/* Grid Pattern */}
        <div className="grid-pattern absolute inset-0 opacity-20" />

        {/* Floating Orbs */}
        <motion.div
          className="orb orb-purple w-[600px] h-[600px] -top-40 -left-40"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-pink w-[400px] h-[400px] -bottom-20 -right-20"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 lg:p-12 text-center overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-electric-blue to-mint-glow" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-pink to-electric-blue flex items-center justify-center"
          >
            <svg className="w-10 h-10 text-void" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-label mb-4 block">Join the Community</span>
            <h2 className="text-heading mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-body max-w-xl mx-auto mb-8">
              Get exclusive content, early access to videos, behind-the-scenes updates,
              and tech tips delivered straight to your inbox. No spam, just pure value.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div
              className={`relative flex flex-col sm:flex-row gap-4 p-2 rounded-2xl transition-all duration-300 ${
                isFocused
                  ? 'bg-graphite shadow-lg shadow-neon-pink/10'
                  : 'bg-graphite/50'
              }`}
            >
              {/* Input */}
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-transparent text-pearl font-body placeholder:text-silver outline-none"
                />
                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-pink to-electric-blue"
                  initial={{ width: 0 }}
                  animate={{ width: isFocused ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-primary !py-4 !px-8 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubscribed}
              >
                <span className="flex items-center gap-2">
                  {isSubscribed ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>
            </div>

            {/* Privacy Note */}
            <p className="text-silver text-xs mt-4">
              By subscribing, you agree to receive emails from Tasvir Mirza.
              Your privacy is respected. Unsubscribe anytime.
            </p>
          </motion.form>

          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid sm:grid-cols-3 gap-6"
          >
            {[
              { icon: '🎬', text: 'Early Video Access' },
              { icon: '💡', text: 'Exclusive Tech Tips' },
              { icon: '🎁', text: 'Giveaways & Perks' },
            ].map((perk, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5"
              >
                <span className="text-xl">{perk.icon}</span>
                <span className="text-sm font-heading text-pearl">{perk.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Subscriber Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
              ].map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-graphite object-cover"
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-graphite bg-gradient-to-br from-neon-pink to-electric-blue flex items-center justify-center text-xs font-bold text-void">
                +5K
              </div>
            </div>
            <span className="text-sm text-silver">
              Join <span className="text-pearl font-medium">5,000+</span> subscribers
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
