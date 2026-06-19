import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Ranges from './pages/Ranges'
import Search from './pages/Search'
import Repeated from './pages/Repeated'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/ranges', label: 'Ranges' },
  { to: '/search', label: 'Search' },
  { to: '/repeated', label: 'Repeated' },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg dark:bg-bg-dark font-sans">
      <Header links={navLinks} />
      <main className="flex-1 w-full max-w-[975px] mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranges" element={<Ranges />} />
          <Route path="/search" element={<Search />} />
          <Route path="/repeated" element={<Repeated />} />
        </Routes>
      </main>
      <footer className="w-full bg-primary dark:bg-primary-dark text-fg-contrast text-center py-3 mt-4">
        <p className="m-0">
          Made with ♥ by{' '}
          <a
            href="https://github.com/mdanieltg/"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:underline"
          >
            mdanieltg
          </a>
        </p>
      </footer>
    </div>
  )
}
