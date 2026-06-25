import { Link } from 'react-router-dom'

function ButtonInner({ children, icon = 'arrow' }) {
  if (icon === 'call') {
    return (
      <div className="btn_inner">
        <div className="btn_icon">
          <span>
            <img src="/assets/img/call.svg" alt="" />
            <img src="/assets/img/call.svg" alt="" aria-hidden="true" />
          </span>
        </div>
        <div className="btn_text">
          <span>{children}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="btn_inner">
      <div className="btn_icon">
        <span>
          <i className="fa-solid fa-arrow-up-right" />
          <i className="fa-solid fa-arrow-up-right" />
        </span>
      </div>
      <div className="btn_text">
        <span>{children}</span>
      </div>
    </div>
  )
}

export default function ThemeButton({
  to,
  href,
  children,
  className = '',
  wowDelay,
  type = 'button',
  onClick,
  icon = 'arrow',
}) {
  const classes = ['theme-btn', className, wowDelay ? 'wow fadeInUp' : '']
    .filter(Boolean)
    .join(' ')
  const wowProps = wowDelay ? { 'data-wow-delay': wowDelay } : {}

  if (to) {
    return (
      <Link to={to} className={classes} {...wowProps}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...wowProps}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...wowProps}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </button>
  )
}
