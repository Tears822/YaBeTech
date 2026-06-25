import { useEffect, useId, useRef, useState } from 'react'

export default function FormSelect({
  options,
  placeholder,
  name,
  defaultValue = '',
  className = '',
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef(null)
  const listId = useId()

  const selectedOption = options.find((option) => option.value === value)
  const displayText = selectedOption?.label ?? placeholder

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
        setActiveIndex(-1)
      }
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  const selectOption = (optionValue) => {
    setValue(optionValue)
    setOpen(false)
    setActiveIndex(-1)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
      return
    }

    if (!open && (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown')) {
      event.preventDefault()
      setOpen(true)
      setActiveIndex(value ? options.findIndex((option) => option.value === value) : 0)
      return
    }

    if (!open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => Math.min(index + 1, options.length - 1))
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => Math.max(index - 1, 0))
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      selectOption(options[activeIndex].value)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`nice-select single-select w-100 form-select-custom ${open ? 'open' : ''} ${className}`.trim()}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="form-select-custom__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className={`current ${!value ? 'is-placeholder' : ''}`}>{displayText}</span>
      </button>
      <ul className="list" role="listbox" id={listId}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`option ${value === option.value ? 'selected' : ''} ${
              activeIndex === index ? 'focus' : ''
            }`}
            role="option"
            aria-selected={value === option.value}
            onClick={(event) => {
              event.stopPropagation()
              selectOption(option.value)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {name ? <input type="hidden" name={name} value={value} /> : null}
    </div>
  )
}
