import { useState } from 'react'
import TextareaPanel from '../components/TextareaPanel'
import { mergeSort } from '../utils/algorithms'
import { inputToIntArray, inputToRangeArray } from '../utils/parsing'

function expandRange(range: string): number[] {
  const splitRange = range.split('-')
  if (splitRange.length === 1) return [parseInt(splitRange[0], 10)]

  const expandedRange: number[] = []
  const firstNumber = parseInt(splitRange[0], 10) || 0
  const lastNumber = parseInt(splitRange[1], 10) || firstNumber

  for (let i = firstNumber; i <= lastNumber; i++) {
    expandedRange.push(i)
  }
  return expandedRange
}

function unfold(foldedValues: string[]): number[] {
  const unfoldedValues = new Set<number>()
  for (const range of foldedValues) {
    for (const item of expandRange(range)) {
      unfoldedValues.add(item)
    }
  }
  return [...unfoldedValues]
}

function fold(values: number[], dontContractTwo: boolean): string[] {
  const foldedArray: string[] = []

  for (let i = 0; i < values.length; i++) {
    if (values[i] == null) continue

    const firstNumber = values[i]
    let lastNumber = firstNumber

    while (i < values.length) {
      const next = values[i + 1]
      if (lastNumber + 1 !== next) {
        break
      } else {
        lastNumber++
        i++
      }
    }

    if (firstNumber === lastNumber) {
      foldedArray.push(String(firstNumber))
    } else if (dontContractTwo && lastNumber - firstNumber === 1) {
      foldedArray.push(`${firstNumber}\n${lastNumber}`)
    } else {
      foldedArray.push(`${firstNumber}-${lastNumber}`)
    }
  }

  return foldedArray
}

const actionBtnClass =
  'w-full px-4 py-2.5 rounded-xl font-semibold text-sm text-fg-contrast ' +
  'bg-secondary hover:bg-secondary-dark active:scale-[0.98] ' +
  'shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer'

export default function Ranges() {
  const [unfoldedText, setUnfoldedText] = useState('')
  const [foldedText, setFoldedText] = useState('')
  const [dontContractTwo, setDontContractTwo] = useState(false)

  const handleFold = () => {
    const valuesToFold = inputToIntArray(unfoldedText)
    setFoldedText(fold(valuesToFold, dontContractTwo).join('\n'))
  }

  const handleUnfold = () => {
    const rangeArray = inputToRangeArray(foldedText)
    const raw = unfold(rangeArray)
    const sorted = raw.length > 1 ? mergeSort(raw) : raw
    setUnfoldedText(sorted.join('\n'))
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading font-bold text-2xl text-primary dark:text-fg-contrast">Ranges</h2>

      <label className="inline-flex items-center gap-2.5 cursor-pointer select-none w-fit
                        text-sm text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          checked={dontContractTwo}
          onChange={(e) => setDontContractTwo(e.target.checked)}
          className="w-4 h-4 rounded accent-primary cursor-pointer"
        />
        Do not contract two-value ranges
      </label>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-3">
          <TextareaPanel
            id="txt-unfolded-list"
            label="Unfolded"
            value={unfoldedText}
            onChange={setUnfoldedText}
            onClear={() => setUnfoldedText('')}
          />
          <button onClick={handleFold} className={actionBtnClass}>
            Fold →
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <TextareaPanel
            id="txt-folded-list"
            label="Folded"
            value={foldedText}
            onChange={setFoldedText}
            onClear={() => setFoldedText('')}
          />
          <button onClick={handleUnfold} className={actionBtnClass}>
            ← Unfold
          </button>
        </div>
      </div>
    </div>
  )
}
