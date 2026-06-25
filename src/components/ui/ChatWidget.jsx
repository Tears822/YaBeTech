import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND_EMAIL, BRAND_LOGO } from '../../constants/brand'
import { chatbotConfig, getChatbotReply } from '../../data/chatbot'

function createMessage(role, text) {
  return { id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, text }
}

export default function ChatWidget() {
  const panelId = useId()
  const inputId = useId()
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [createMessage('bot', chatbotConfig.welcome)])

  useEffect(() => {
    if (!open) return undefined

    inputRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    const scrollToBottom = () => {
      list.scrollTop = list.scrollHeight
    }

    scrollToBottom()
    requestAnimationFrame(scrollToBottom)
  }, [messages, open])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((current) => [...current, createMessage('user', trimmed)])
    setInput('')

    window.setTimeout(() => {
      setMessages((current) => [...current, createMessage('bot', getChatbotReply(trimmed))])
    }, 350)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className={`chat-widget ${open ? 'is-open' : ''}`}>
      {open ? (
        <div
          className="chat-widget__panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${panelId}-title`}
        >
          <div className="chat-widget__header">
            <div className="chat-widget__header-info">
              <span className="chat-widget__avatar" aria-hidden="true">
                <img src={BRAND_LOGO} alt="" />
              </span>
              <div>
                <h2 id={`${panelId}-title`} className="chat-widget__title">
                  {chatbotConfig.agentRole}
                </h2>
                <p className="chat-widget__subtitle">Powered by YaBeTech</p>
              </div>
            </div>
            <button
              type="button"
              className="chat-widget__close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="chat-widget__messages" ref={listRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-widget__message-row chat-widget__message-row--${message.role}`}
              >
                {message.role === 'bot' ? (
                  <span className="chat-widget__message-avatar" aria-hidden="true">
                    <img src={BRAND_LOGO} alt="" />
                  </span>
                ) : null}
                <div className={`chat-widget__message chat-widget__message--${message.role}`}>
                  <p>{message.text}</p>
                </div>
                {message.role === 'user' ? (
                  <span
                    className="chat-widget__message-avatar chat-widget__message-avatar--user"
                    aria-hidden="true"
                  >
                    <i className="fa-solid fa-user" />
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="chat-widget__quick-prompts">
            {chatbotConfig.quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="chat-widget__quick-prompt"
                onClick={() => sendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="chat-widget__form" onSubmit={onSubmit}>
            <label className="visually-hidden" htmlFor={inputId}>
              Message
            </label>
            <input
              ref={inputRef}
              id={inputId}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={chatbotConfig.placeholder}
              autoComplete="off"
            />
            <button type="submit" className="chat-widget__send" aria-label="Send message">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </form>

          <div className="chat-widget__footer">
            <Link to="/contact">Contact page</Link>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${BRAND_EMAIL}`}>Email {chatbotConfig.agentName}</a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="chat-widget__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <i className="fa-solid fa-xmark" />
        ) : (
          <span className="chat-widget__toggle-logo-wrap" aria-hidden="true">
            <img src={BRAND_LOGO} alt="" className="chat-widget__toggle-logo" />
          </span>
        )}
        {!open ? <span className="chat-widget__toggle-label">Chat</span> : null}
      </button>
    </div>
  )
}
