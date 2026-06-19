import { Link } from 'react-router-dom'

function RangesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7h8M8 12h8M8 17h8M3 7h.01M3 12h.01M3 17h.01" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function RepeatedIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

const tools = [
  {
    to: '/ranges',
    label: 'Ranges',
    description: 'Expand and contract numeric ranges.',
    Icon: RangesIcon,
  },
  {
    to: '/search',
    label: 'Search',
    description: 'Cross-reference two numeric lists.',
    Icon: SearchIcon,
  },
  {
    to: '/repeated',
    label: 'Repeated',
    description: 'Detect duplicate entries in a list.',
    Icon: RepeatedIcon,
  },
]

export default function Home() {
  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h2 className="font-heading font-bold text-3xl text-primary dark:text-fg-contrast mb-2">
          Numeric Tools
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Browser-based utilities for working with numeric data
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tools.map(({ to, label, description, Icon }) => (
          <Link
            key={to}
            to={to}
            className="group block no-underline"
          >
            <div className="
              h-full bg-white dark:bg-slate-800 rounded-2xl p-6
              border border-slate-200 dark:border-slate-700
              shadow-sm hover:shadow-md
              hover:-translate-y-1
              transition-all duration-200
            ">
              <div className="
                w-10 h-10 rounded-xl mb-4 flex items-center justify-center
                bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400
                group-hover:bg-primary group-hover:text-white
                transition-colors duration-200
              ">
                <Icon />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{label}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
