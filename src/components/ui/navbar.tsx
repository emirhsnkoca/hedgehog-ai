'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo ve İsim - En sola */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-20 w-20">
              <Image
                src="/hedgehog-logo-glow.png"
                alt="Hedgehog AI"
                width={96}
                height={96}
                className="object-contain transition-all duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#7928ca] transition-all duration-300 group-hover:opacity-80">
              Hedgehog AI
            </span>
          </Link>

          {/* Menü Butonları - Ortada */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="Home">
              Home
            </Link>
            <Link href="/about" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="About">
              About
            </Link>
            <Link href="/features" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="Features">
              Features
            </Link>
            <Link href="/roadmap" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="Roadmap">
              Roadmap
            </Link>
            <Link href="/team" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="Team">
              Team
            </Link>
            <Link href="/docs" className="text-xl text-purple-300 hover:text-[#e02acd] transition-colors nav-typewriter" data-text="Docs">
              Docs
            </Link>
          </div>

          {/* Sosyal Medya İkonları - En sağda */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://twitter.com/hedgehog_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-[#e02acd] transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/hedgehog_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-[#e02acd] transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.92 1.22-5.41 3.57-.51.35-.97.52-1.39.51-.46-.01-1.33-.26-1.98-.48-.8-.27-1.44-.42-1.38-.89.03-.25.37-.51 1.02-.78 4.01-1.74 6.69-2.89 8.04-3.45 3.82-1.59 4.61-1.87 5.13-1.88.12 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.2-.03.31z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 