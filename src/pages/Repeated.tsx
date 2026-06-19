import { useState } from 'react'
import TextareaPanel from '../components/TextareaPanel'
import { mergeSortF } from '../utils/algorithms'

interface DictionaryEntry {
  key: string
  count: number
}

function analyzeLines(lines: string[]): DictionaryEntry[] {
  const dictionary: DictionaryEntry[] = []

  for (const line of lines) {
    if (line.length === 0) continue
    const item = dictionary.find((x) => x.key === line)
    if (item) {
      item.count++
    } else {
      dictionary.push({ key: line, count: 1 })
    }
  }

  return mergeSortF(
    dictionary,
    (x) => x.count,
    (a, b) => a > b,
  )
}

export default function Repeated() {
  const [inputText, setInputText] = useState('')
  const [uniqueText, setUniqueText] = useState('')
  const [resultsText, setResultsText] = useState('')

  const handleFind = () => {
    const lines = inputText.split('\n').map((x) => x.trim())
    const result = analyzeLines(lines)

    setUniqueText(result.map((x) => x.key).join('\n'))
    setResultsText(
      result
        .map((x) => `${x.key}: ${x.count} ${x.count > 1 ? 'occurrences' : 'occurrence'}`)
        .join('\n'),
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-2">
        <TextareaPanel
          id="txt-duplicates-list"
          label="List to analyze:"
          value={inputText}
          onChange={setInputText}
          onClear={() => setInputText('')}
        />
        <button
          onClick={handleFind}
          className="
            w-full px-3 py-2 rounded border border-secondary
            bg-secondary text-fg-contrast font-semibold
            active:bg-fg-contrast active:text-secondary
            dark:active:bg-bg-dark dark:active:text-fg-contrast
            cursor-pointer
          "
        >
          Find
        </button>
      </div>

      <div className="flex-1">
        <TextareaPanel
          id="txt-filtered-list"
          label="Unique items:"
          value={uniqueText}
          readOnly
          onClear={() => setUniqueText('')}
        />
      </div>

      <div className="flex-1">
        <TextareaPanel
          id="txt-results-list"
          label="Results:"
          value={resultsText}
          readOnly
          onClear={() => setResultsText('')}
        />
      </div>
    </div>
  )
}
