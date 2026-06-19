import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface NavLinkItem {
  to: string
  label: string
}

interface HeaderProps {
  links: NavLinkItem[]
}

export default function Header({ links }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="relative bg-primary dark:bg-primary-dark text-fg-contrast">
      <div className="flex flex-row items-center justify-between h-14 px-4 w-full max-w-[975px] mx-auto">
        <h1 className="font-heading font-bold text-xl text-fg-contrast m-0 leading-none">
          Numeric Tools
        </h1>
        <button
          className="md:hidden px-3 py-1 rounded bg-secondary text-fg-contrast text-sm cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
        <nav
          className={[
            'md:block md:static md:w-auto md:bg-transparent md:shadow-none',
            'absolute top-14 left-0 w-full z-10',
            'bg-bg dark:bg-bg-dark shadow-md',
            menuOpen ? 'block' : 'hidden',
          ].join(' ')}
        >
          <ul className="flex flex-col md:flex-row list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block py-4 md:py-2 md:px-3 text-center no-underline leading-none',
                      'md:border-y-2 md:border-transparent md:hover:border-fg-contrast',
                      isActive
                        ? 'font-bold text-secondary md:font-normal md:text-fg-contrast md:border-fg-contrast'
                        : 'text-primary dark:text-fg-contrast md:text-fg-contrast',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
