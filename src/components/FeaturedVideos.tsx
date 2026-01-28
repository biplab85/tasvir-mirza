'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const featuredVideos = [
  {
    id: '1',
    title: "Costco's Business Model Makes BILLIONS",
    description: "Costco's Business Model makes BILLIONS, while you think you are SAVING. Learn the secrets behind their success.",
    thumbnail: 'https://img.youtube.com/vi/B0U4BTG3GlI/maxresdefault.jpg',
    videoId: 'B0U4BTG3GlI',
    views: '150K',
    duration: '12:34',
    category: 'Business',
  },
  {
    id: '2',
    title: 'How to Get Rich Without Anyone Knowing',
    description: '7 Silent Strategies to build wealth quietly and effectively without showing off.',
    thumbnail: 'https://img.youtube.com/vi/YCZEqoojQNY/maxresdefault.jpg',
    videoId: 'YCZEqoojQNY',
    views: '285K',
    duration: '15:22',
    category: 'Finance',
  },
  {
    id: '3',
    title: 'Disappear, Transform & Achieve More',
    description: 'Achieve more in 30 days than most do in 365. A guide to radical transformation.',
    thumbnail: 'https://img.youtube.com/vi/r3iE1DetoB8/maxresdefault.jpg',
    videoId: 'r3iE1DetoB8',
    views: '198K',
    duration: '18:45',
    category: 'Motivation',
  },
  {
    id: '4',
    title: 'Side Hustles Won\'t Save Your American Dream',
    description: 'I wish I knew my side hustles won\'t save my AMERICAN DREAM. The harsh truth revealed.',
    thumbnail: 'https://img.youtube.com/vi/KDjgWTH2QF8/maxresdefault.jpg',
    videoId: 'KDjgWTH2QF8',
    views: '124K',
    duration: '14:18',
    category: 'Lifestyle',
  },
  {
    id: '5',
    title: '7 Silent Strategies to Manage Money',
    description: 'I Wish I knew 7 Silent Strategies to Manage my Money like Rich People. Financial wisdom unveiled.',
    thumbnail: 'https://img.youtube.com/vi/YMXYczlm_L8/maxresdefault.jpg',
    videoId: 'YMXYczlm_L8',
    views: '167K',
    duration: '16:52',
    category: 'Finance',
  },
  {
    id: '6',
    title: "Costco's Business Model Makes BILLIONS",
    description: "Costco's Business Model makes BILLIONS, while you think you are SAVING. Learn the secrets behind their success.",
    thumbnail: 'https://img.youtube.com/vi/B0U4BTG3GlI/maxresdefault.jpg',
    videoId: 'B0U4BTG3GlI',
    views: '150K',
    duration: '12:34',
    category: 'Business',
  },
  {
    id: '7',
    title: 'How to Get Rich Without Anyone Knowing',
    description: '7 Silent Strategies to build wealth quietly and effectively without showing off.',
    thumbnail: 'https://img.youtube.com/vi/YCZEqoojQNY/maxresdefault.jpg',
    videoId: 'YCZEqoojQNY',
    views: '285K',
    duration: '15:22',
    category: 'Finance',
  },
  {
    id: '8',
    title: 'Disappear, Transform & Achieve More',
    description: 'Achieve more in 30 days than most do in 365. A guide to radical transformation.',
    thumbnail: 'https://img.youtube.com/vi/r3iE1DetoB8/maxresdefault.jpg',
    videoId: 'r3iE1DetoB8',
    views: '198K',
    duration: '18:45',
    category: 'Motivation',
  },
  {
    id: '9',
    title: 'Side Hustles Won\'t Save Your American Dream',
    description: 'I wish I knew my side hustles won\'t save my AMERICAN DREAM. The harsh truth revealed.',
    thumbnail: 'https://img.youtube.com/vi/KDjgWTH2QF8/maxresdefault.jpg',
    videoId: 'KDjgWTH2QF8',
    views: '124K',
    duration: '14:18',
    category: 'Lifestyle',
  },
  {
    id: '10',
    title: '7 Silent Strategies to Manage Money',
    description: 'I Wish I knew 7 Silent Strategies to Manage my Money like Rich People. Financial wisdom unveiled.',
    thumbnail: 'https://img.youtube.com/vi/YMXYczlm_L8/maxresdefault.jpg',
    videoId: 'YMXYczlm_L8',
    views: '167K',
    duration: '16:52',
    category: 'Finance',
  },
]

export default function FeaturedVideos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="videos" className="relative section-padding overflow-hidden bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-label mb-4 block">Latest Content</span>
          <h2 className="text-heading">
            Featured <span className="gradient-text">Videos</span>
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-obsidian"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

        {/* Floating Orb */}
        <motion.div
          className="orb orb-blue w-[400px] h-[400px] top-1/4 -right-40"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10" style={{ isolation: 'isolate' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <span className="text-label mb-4 block">Latest Content</span>
          <h2 className="text-heading mb-4">
            Featured <span className="gradient-text">Videos</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Check out my latest videos on investing, personal finance, and building wealth.
            Simple strategies for beginners and intermediate investors in the US.
          </p>
        </motion.div>

        {/* Video Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="coverflow-slider"
          >
            {featuredVideos.map((video, index) => (
              <SwiperSlide key={video.id} className="!w-[300px] sm:!w-[350px] md:!w-[400px] lg:!w-[450px]">
                <div
                  className={`relative group rounded-2xl overflow-hidden transition-all duration-500 ${activeIndex === index ? 'shadow-2xl shadow-neon-pink/20' : ''
                    }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Play Button */}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-btn opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-void/80 rounded text-xs font-mono text-pearl">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 glass rounded-full text-xs font-heading font-medium text-white">
                      {video.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-graphite">
                    <h3 className="font-heading font-semibold text-pearl text-lg mb-2 line-clamp-1 group-hover:text-neon-pink transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-silver text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-silver flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                        {video.views} views
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-heading font-medium text-electric-blue hover:text-mint-glow transition-colors"
                      >
                        Watch Now →
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="https://youtube.com/@TasvirMirza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View All Videos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
