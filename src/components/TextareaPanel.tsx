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
  const handleCopy = async () => {
    if (value) {
      await navigator.clipboard.writeText(value)
    }
  }

  const btnClass =
    'flex-1 px-2 py-1 rounded border border-primary bg-primary text-fg-contrast text-sm ' +
    'active:bg-fg-contrast active:text-primary dark:active:bg-bg-dark dark:active:text-fg-contrast ' +
    'cursor-pointer'

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-fg dark:text-fg-contrast">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        readOnly={readOnly}
        onChange={readOnly ? undefined : (e) => onChange?.(e.target.value)}
        className="
          font-mono text-xs resize-none max-h-[22em] w-full p-1
          border border-gray-300 dark:border-gray-600 rounded
          bg-white dark:bg-gray-800
          text-fg dark:text-gray-100
        "
      />
      <div className="flex flex-row flex-wrap gap-1">
        <button onClick={handleCopy} className={btnClass}>
          Copy
        </button>
        {(!readOnly || onClear) && (
          <button onClick={onClear} className={btnClass}>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
