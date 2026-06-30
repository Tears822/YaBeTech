import { NavLink } from 'react-router-dom'
import { useNav } from '../../i18n/useNav'

function closeOffcanvas() {
  document.querySelector('.offcanvas__info')?.classList.remove('info-open')
  document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open')
}

export default function MobileNav() {
  const nav = useNav()

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <ul>
        {nav.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.end} onClick={closeOffcanvas}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
