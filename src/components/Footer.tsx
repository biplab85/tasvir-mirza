'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'YouTube', href: 'https://youtube.com/@TasvirMirza' },
    { label: 'Instagram', href: 'https://instagram.com/tasvirmirza' },
    { label: 'Twitter', href: 'https://twitter.com/tasvirmirza' },
    { label: 'TikTok', href: 'https://tiktok.com/@tasvirmirza' },
  ],
  resources: [
    { label: 'Media Kit', href: '#' },
    { label: 'Collaborations', href: '#contact' },
    { label: 'Discord', href: 'https://discord.gg/tasvirmirza' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative overflow-hidden bg-obsidian border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="font-display text-3xl font-bold tracking-tight">
                <span className="text-pearl">TASVIR</span>
                <span className="gradient-text">.</span>
              </span>
            </a>
            <p className="text-silver text-sm mb-6 max-w-xs">
              Content creator, tech enthusiast, and digital storyteller bringing you
              the best in tech reviews and tutorials.
            </p>

            {/* Subscribe Button */}
            <motion.a
              href="https://youtube.com/@TasvirMirza?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-pink to-neon-coral text-void font-heading font-semibold text-sm rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading font-semibold text-pearl mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }
                    }}
                    className="text-silver hover:text-pearl transition-colors text-sm animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-pearl mb-4">Social</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver hover:text-neon-pink transition-colors text-sm animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold text-pearl mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }
                    }}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-silver hover:text-electric-blue transition-colors text-sm animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver text-sm">
            © {new Date().getFullYear()} Tasvir Mirza. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-silver hover:text-pearl text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-silver hover:text-pearl text-sm transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-silver hover:text-neon-pink transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="font-display text-[20vw] font-bold text-graphite/30 whitespace-nowrap leading-none -mb-[5vw] text-center">
          TASVIR
        </div>
      </div>
    </footer>
  )
}
