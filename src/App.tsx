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
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranges" element={<Ranges />} />
          <Route path="/search" element={<Search />} />
          <Route path="/repeated" element={<Repeated />} />
        </Routes>
      </main>
      <footer className="py-5 text-center text-sm text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
        Made with ♥ by{' '}
        <a
          href="https://github.com/mdanieltg/"
          target="_blank"
          rel="noreferrer"
          className="text-primary dark:text-secondary hover:underline"
        >
          mdanieltg
        </a>
      </footer>
    </div>
  )
}
