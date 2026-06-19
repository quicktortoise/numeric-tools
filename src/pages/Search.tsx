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

  const panelClass = 'flex-1'

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <div className={panelClass}>
            <TextareaPanel
              id="txt-search-list"
              label="What to search:"
              value={searchListText}
              onChange={setSearchListText}
              onClear={() => setSearchListText('')}
            />
          </div>
          <div className={panelClass}>
            <TextareaPanel
              id="txt-pool-list"
              label="Where to search:"
              value={poolListText}
              onChange={setPoolListText}
              onClear={() => setPoolListText('')}
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="
            w-full px-3 py-2 rounded border border-secondary
            bg-secondary text-fg-contrast font-semibold
            active:bg-fg-contrast active:text-secondary
            dark:active:bg-bg-dark dark:active:text-fg-contrast
            cursor-pointer
          "
        >
          Search
        </button>
      </div>

      <div className="flex-1 flex flex-row gap-2">
        <div className={panelClass}>
          <TextareaPanel
            id="txt-results-list"
            label="Found:"
            value={foundText}
            readOnly
            onClear={() => setFoundText('')}
          />
        </div>
        <div className={panelClass}>
          <TextareaPanel
            id="txt-noresults-list"
            label="Not found:"
            value={notFoundText}
            readOnly
            onClear={() => setNotFoundText('')}
          />
        </div>
      </div>
    </div>
  )
}
