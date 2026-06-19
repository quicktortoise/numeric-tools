import { useState } from 'react'

interface TextareaPanelProps {
  id: string
  label: string
  value: string
  onChange?: (value: string) => void
  onClear?: () => void
  readOnly?: boolean
  rows?: number
}

export default function TextareaPanel({
  id,
  label,
  value,
  onChange,
  onClear,
  readOnly = false,
  rows = 10,
}: TextareaPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!value) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm
                    border border-slate-200 dark:border-slate-700 p-4">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        value={value}
        readOnly={readOnly}
        onChange={readOnly ? undefined : (e) => onChange?.(e.target.value)}
        className="
          font-mono text-sm resize-none max-h-[22em] w-full p-3
          rounded-xl bg-slate-50 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-700
          text-slate-800 dark:text-slate-100
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          transition-colors duration-150
          read-only:bg-slate-100 dark:read-only:bg-slate-900/80 read-only:cursor-default
        "
      />

      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="
            px-3 py-1.5 rounded-lg text-xs font-medium
            bg-slate-100 dark:bg-slate-700
            text-slate-600 dark:text-slate-300
            hover:bg-slate-200 dark:hover:bg-slate-600
            active:scale-95
            transition-all duration-150 cursor-pointer
            min-w-[60px]
          "
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>

        {(!readOnly || onClear) && (
          <button
            onClick={onClear}
            className="
              px-3 py-1.5 rounded-lg text-xs font-medium
              bg-slate-100 dark:bg-slate-700
              text-slate-600 dark:text-slate-300
              hover:bg-slate-200 dark:hover:bg-slate-600
              active:scale-95
              transition-all duration-150 cursor-pointer
            "
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
