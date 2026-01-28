'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const featuredVideos = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max - Ultimate Review',
    description: 'Is it worth the upgrade? Find out in this comprehensive review.',
    thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    views: '1.2M',
    duration: '18:42',
    category: 'Tech Review',
  },
  {
    id: '2',
    title: 'Building a Dream Gaming Setup',
    description: 'Watch me build the ultimate gaming setup from scratch.',
    thumbnail: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    views: '856K',
    duration: '24:15',
    category: 'Setup',
  },
  {
    id: '3',
    title: 'Best Budget Laptops 2024',
    description: 'Top 5 laptops that won\'t break the bank but deliver performance.',
    thumbnail: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    views: '2.1M',
    duration: '21:30',
    category: 'Tech Review',
  },
  {
    id: '4',
    title: 'Learn Video Editing in 30 Minutes',
    description: 'Complete beginner tutorial for Premiere Pro and DaVinci Resolve.',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    views: '945K',
    duration: '32:18',
    category: 'Tutorial',
  },
  {
    id: '5',
    title: 'Day in My Life as a YouTuber',
    description: 'Behind the scenes of creating content for 500K subscribers.',
    thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    views: '678K',
    duration: '15:45',
    category: 'Vlog',
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
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

        {/* Floating Orb */}
        <motion.div
          className="orb orb-blue w-[400px] h-[400px] top-1/4 -right-40"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <span className="text-label mb-4 block">Latest Content</span>
          <h2 className="text-heading mb-4">
            Featured <span className="gradient-text">Videos</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Check out my latest and most popular videos. From tech reviews to tutorials,
            there&apos;s something for everyone.
          </p>
        </motion.div>

        {/* Video Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-16"
          >
            {featuredVideos.map((video, index) => (
              <SwiperSlide
                key={video.id}
                className="!w-[340px] sm:!w-[420px] lg:!w-[500px]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group rounded-2xl overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'shadow-2xl shadow-neon-pink/20' : ''
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
                    <div className="absolute top-3 left-3 px-3 py-1 glass rounded-full text-xs font-heading font-medium text-neon-pink">
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
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
