'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80',
    title: 'Gaming Setup Tour',
    category: 'Setup',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
    title: 'Behind the Scenes',
    category: 'BTS',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    title: 'Coding Session',
    category: 'Work',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&q=80',
    title: 'Tech Collection',
    category: 'Tech',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=400&q=80',
    title: 'Unboxing Stream',
    category: 'Live',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560762484-813fc97650a0?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1560762484-813fc97650a0?w=400&q=80',
    title: 'Studio Setup',
    category: 'Setup',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
    title: 'New Camera Gear',
    category: 'Gear',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80',
    title: 'Headphone Review',
    category: 'Tech',
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
            A glimpse into my world - from studio setups to behind-the-scenes moments.
            Click any image or video to explore.
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
            href="https://instagram.com/tasvirmirza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View More on Instagram
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
