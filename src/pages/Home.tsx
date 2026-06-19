import { Link } from 'react-router-dom'

const tools = [
  { to: '/ranges', label: 'Ranges', description: 'Expand and contract numeric ranges.' },
  { to: '/search', label: 'Search', description: 'Cross-reference two numeric lists.' },
  { to: '/repeated', label: 'Repeated', description: 'Detect duplicate entries in a list.' },
]

export default function Home() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full md:w-72 rounded-xl overflow-hidden border border-primary shadow-md">
        <div className="bg-primary dark:bg-primary-dark px-4 py-3">
          <h2 className="font-heading font-bold text-fg-contrast text-xl m-0">Numeric Tools</h2>
        </div>
        <ul className="list-none m-0 p-0 bg-secondary dark:bg-secondary-dark">
          {tools.map((tool) => (
            <li
              key={tool.to}
              className="border-b border-secondary-dark last:border-0 hover:bg-secondary-dark transition-colors"
            >
              <Link to={tool.to} className="block px-4 py-4 text-fg-contrast no-underline">
                <span className="font-bold block">{tool.label}</span>
                <span className="text-sm opacity-90">{tool.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
