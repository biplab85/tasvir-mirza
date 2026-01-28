'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'Video Production', level: 95, color: 'from-neon-pink to-neon-coral' },
  { name: 'Content Strategy', level: 90, color: 'from-electric-blue to-cyber-purple' },
  { name: 'Tech Reviews', level: 88, color: 'from-mint-glow to-electric-blue' },
  { name: 'Storytelling', level: 92, color: 'from-cyber-purple to-neon-pink' },
]

const contentFocus = [
  { icon: '🎬', title: 'Tech Reviews', description: 'In-depth analysis of latest gadgets' },
  { icon: '📚', title: 'Tutorials', description: 'Step-by-step learning guides' },
  { icon: '🎮', title: 'Gaming', description: 'Gaming content and reviews' },
  { icon: '✨', title: 'Vlogs', description: 'Behind the scenes moments' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        <div className="diagonal-lines absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Get to Know Me</span>
          <h2 className="text-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-electric-blue/20 rounded-3xl transform rotate-3" />

              {/* Image Container */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/tasvir-mirza.jpg"
                  alt="Tasvir Mirza"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                className="absolute -right-6 top-10 glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-4xl font-bold gradient-text">5+</div>
                <div className="text-silver text-sm font-heading">Years Creating</div>
              </motion.div>

              {/* Projects Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
                className="absolute -left-6 bottom-20 glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-4xl font-bold gradient-text">200+</div>
                <div className="text-silver text-sm font-heading">Videos Made</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Bio */}
            <div className="mb-10">
              <h3 className="text-subheading text-pearl mb-4">
                Digital Creator & Tech Enthusiast
              </h3>
              <p className="text-body mb-4">
                Hey there! I&apos;m Tasvir Mirza, a passionate content creator dedicated to
                making technology accessible and entertaining for everyone. With over 5 years
                of experience in video production, I&apos;ve built a community of tech enthusiasts
                who share my love for innovation.
              </p>
              <p className="text-body">
                From in-depth tech reviews to step-by-step tutorials, my content aims to
                educate, inspire, and entertain. I believe in the power of storytelling to
                make complex topics simple and engaging.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h4 className="font-heading font-semibold text-pearl mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-neon-pink to-transparent" />
                Skills & Expertise
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-heading text-sm text-pearl">{skill.name}</span>
                      <span className="font-mono text-xs text-neon-pink">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-graphite rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Focus */}
            <div>
              <h4 className="font-heading font-semibold text-pearl mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-electric-blue to-transparent" />
                Content Focus
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {contentFocus.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="glass rounded-xl p-4 card-hover gradient-border"
                  >
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h5 className="font-heading font-semibold text-pearl text-sm mb-1">
                      {item.title}
                    </h5>
                    <p className="text-silver text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
