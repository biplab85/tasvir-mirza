'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=B0U4BTG3GlI',
    thumb: 'https://img.youtube.com/vi/B0U4BTG3GlI/maxresdefault.jpg',
    title: "Costco's Business Model",
    category: 'Business',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=YCZEqoojQNY',
    thumb: 'https://img.youtube.com/vi/YCZEqoojQNY/maxresdefault.jpg',
    title: 'How to Get Rich Silently',
    category: 'Finance',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=r3iE1DetoB8',
    thumb: 'https://img.youtube.com/vi/r3iE1DetoB8/maxresdefault.jpg',
    title: 'Transform in 30 Days',
    category: 'Motivation',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=KDjgWTH2QF8',
    thumb: 'https://img.youtube.com/vi/KDjgWTH2QF8/maxresdefault.jpg',
    title: 'American Dream Reality',
    category: 'Lifestyle',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=YMXYczlm_L8',
    thumb: 'https://img.youtube.com/vi/YMXYczlm_L8/maxresdefault.jpg',
    title: 'Money Management Secrets',
    category: 'Finance',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=12223YKulIA',
    thumb: 'https://img.youtube.com/vi/12223YKulIA/maxresdefault.jpg',
    title: 'Success Strategies',
    category: 'Business',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=2NQ8uzJJub8',
    thumb: 'https://img.youtube.com/vi/2NQ8uzJJub8/maxresdefault.jpg',
    title: 'Wealth Building Tips',
    category: 'Finance',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=43Rlp0qpjiU',
    thumb: 'https://img.youtube.com/vi/43Rlp0qpjiU/maxresdefault.jpg',
    title: 'Life Lessons',
    category: 'Motivation',
  },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [fancyboxLoaded, setFancyboxLoaded] = useState(false)

  useEffect(() => {
    // Dynamically import Fancybox
    const loadFancybox = async () => {
      const { Fancybox } = await import('@fancyapps/ui')
      await import('@fancyapps/ui/dist/fancybox/fancybox.css')

      Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
          autoStart: true,
        },
        Toolbar: {
          display: {
            left: ['infobar'],
            middle: [],
            right: ['slideshow', 'fullscreen', 'download', 'close'],
          },
        },
        animated: true,
        dragToClose: true,
      })

      setFancyboxLoaded(true)
    }

    loadFancybox()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-obsidian"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        <div className="diagonal-lines absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Visual Stories</span>
          <h2 className="text-heading mb-4">
            Media <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A collection of my best content - from business insights to wealth-building strategies.
            Click any video to watch and learn.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              href={item.type === 'video' ? item.src : item.src}
              data-fancybox="gallery"
              data-caption={item.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`aspect-square ${index === 0 || index === 5 ? 'md:aspect-auto md:h-full' : ''}`}>
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-mono text-neon-pink uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-semibold text-pearl text-sm md:text-base">
                  {item.title}
                </h3>
              </div>

              {/* Video Play Icon */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neon-pink/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-void ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-neon-pink/50 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://youtube.com/@TasvirMirza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              View More on YouTube
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
