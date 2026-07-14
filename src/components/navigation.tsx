'use client'

import { useState } from 'react'
import { Menu, X, BrainCircuit } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#robotics', label: 'Robotics' },
    { href: '#rehab', label: 'Rehabilitation' },
    { href: '#converge', label: 'Technology' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/72 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #5b8def 0%, #ff9a62 100%)' }}
              >
                <BrainCircuit size={20} className="text-white" />
              </div>
              <div className="logo-two-tone">
                <h1 className="header-title">
                  <span className="a">Neura</span> <span className="b">Robotics</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: '#8d97ab' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#edf1f7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8d97ab')}
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:yatharthpatel014@gmail.com" className="hidden lg:inline-flex nav-cta-button !px-[18px] !py-[9px] text-[13px]">
              Get in touch
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
