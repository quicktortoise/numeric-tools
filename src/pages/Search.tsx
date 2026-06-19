import { useState } from 'react'
import TextareaPanel from '../components/TextareaPanel'
import { binarySearch, mergeSort } from '../utils/algorithms'
import { inputToIntArray } from '../utils/parsing'

function search(
  devicePool: number[],
  searchTargets: number[],
): { found: number[]; notFound: number[] } {
  const found: number[] = []
  const notFound: number[] = []

  for (const target of searchTargets) {
    if (binarySearch(devicePool, target)) {
      found.push(target)
    } else {
      notFound.push(target)
    }
  }
  return { found, notFound }
}

export default function Search() {
  const [searchListText, setSearchListText] = useState('')
  const [poolListText, setPoolListText] = useState('')
  const [foundText, setFoundText] = useState('')
  const [notFoundText, setNotFoundText] = useState('')

  const handleSearch = () => {
    const devicePool = inputToIntArray(poolListText)
    const searchTargets = inputToIntArray(searchListText)
    const sortedPool = devicePool.length > 1 ? mergeSort(devicePool) : devicePool
    const { found, notFound } = search(sortedPool, searchTargets)
    setFoundText(found.join('\n'))
    setNotFoundText(notFound.join('\n'))
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading font-bold text-2xl text-primary dark:text-fg-contrast">Search</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Inputs */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <TextareaPanel
                id="txt-search-list"
                label="What to search"
                value={searchListText}
                onChange={setSearchListText}
                onClear={() => setSearchListText('')}
              />
            </div>
            <div className="flex-1">
              <TextareaPanel
                id="txt-pool-list"
                label="Where to search"
                value={poolListText}
                onChange={setPoolListText}
                onClear={() => setPoolListText('')}
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="
              w-full px-4 py-2.5 rounded-xl font-semibold text-sm text-fg-contrast
              bg-secondary hover:bg-secondary-dark active:scale-[0.98]
              shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer
            "
          >
            Search
          </button>
        </div>

        {/* Outputs */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <TextareaPanel
              id="txt-results-list"
              label="Found"
              value={foundText}
              readOnly
              onClear={() => setFoundText('')}
            />
          </div>
          <div className="flex-1">
            <TextareaPanel
              id="txt-noresults-list"
              label="Not found"
              value={notFoundText}
              readOnly
              onClear={() => setNotFoundText('')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
