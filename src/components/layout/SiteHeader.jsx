import { Link, NavLink } from 'react-router-dom'
import { primaryNav } from '../../config/navigation'
import { BRAND_LOGO, BRAND_NAME, BRAND_PHONE, BRAND_PHONE_TEL } from '../../constants/brand'
import ThemeButton from '../common/ThemeButton'

export default function SiteHeader() {
  return (
    <header id="header-sticky" className="header-1">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <Link to="/" className="logo brand-logo">
              <img src={BRAND_LOGO} alt={BRAND_NAME} />
              <span className="brand-logo__text">{BRAND_NAME}</span>
            </Link>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    {primaryNav.map((item) => (
                      <li key={item.to}>
                        <NavLink to={item.to} end={item.end}>
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <button type="button" className="main-header__search search-toggler d-none d-xxl-block" aria-label="Search">
                <i className="fa-regular fa-magnifying-glass" />
              </button>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <button type="button" className="main-header__search search-toggler d-xxl-none" aria-label="Search">
                <i className="fa-regular fa-magnifying-glass" />
              </button>
              <ThemeButton href={`tel:${BRAND_PHONE_TEL}`} className="d-none d-xxl-block" icon="call">
                {BRAND_PHONE}
              </ThemeButton>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <i className="fa-regular fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
