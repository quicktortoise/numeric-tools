import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface NavLinkItem {
  to: string
  label: string
}

interface HeaderProps {
  links: NavLinkItem[]
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-5 h-5 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

export default function Header({ links }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-30 bg-primary dark:bg-primary-dark shadow-md">
      <div className="flex items-center justify-between h-14 px-4 w-full max-w-5xl mx-auto">
        <span className="font-heading font-bold text-lg text-fg-contrast tracking-wide select-none">
          Numeric Tools
        </span>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                     bg-white/10 hover:bg-white/20 text-fg-contrast
                     transition-colors duration-150 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 no-underline',
                  isActive
                    ? 'bg-white/20 text-fg-contrast'
                    : 'text-fg-contrast/70 hover:text-fg-contrast hover:bg-white/10',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile nav — slides down */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-200 ease-out',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav className="px-4 pb-3 flex flex-col gap-1 border-t border-white/10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  'px-3 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors duration-150',
                  isActive
                    ? 'bg-white/20 text-fg-contrast font-semibold'
                    : 'text-fg-contrast/70 hover:text-fg-contrast hover:bg-white/10',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
