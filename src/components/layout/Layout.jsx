import { Link, Outlet } from 'react-router-dom'
import { useTemplateEffects } from '../../hooks/useTemplateEffects'
import { BRAND_LOGO, BRAND_NAME, BRAND_EMAIL, BRAND_PHONE, BRAND_PHONE_TEL, BRAND_LOCATION } from '../../constants/brand'
import { footer, company } from '../../data/siteContent'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import ChatWidget from '../ui/ChatWidget'
import ThemeButton from '../common/ThemeButton'

const PRELOADER_LETTERS = ['Y', 'A', 'B', 'E', 'T', 'E', 'C', 'H']

export default function Layout() {
  useTemplateEffects()

  return (
    <div className="page-wrapper">
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner" />
          <div className="txt-loading">
            {PRELOADER_LETTERS.map((letter, index) => (
              <span key={`preloader-${index}`} data-text-preloader={letter} className="letters-loading">
                {letter}
              </span>
            ))}
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`col-3 loader-section ${i < 2 ? 'section-left' : 'section-right'}`}>
                <div className="bg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="color-palate">
        <button type="button" className="color-trigger" aria-label="Theme settings">
          <i className="fa-solid fa-gear" />
        </button>
        <button type="button" className="close-color-trigger" aria-label="Close theme settings">
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="color-palate-inner">
          <Link to="/" className="palate-logo mb-4 d-block">
            <img src={BRAND_LOGO} alt={BRAND_NAME} />
          </Link>
          <h6>Dark Verion</h6>
          <ul className="dark-version box-version option-box">
            <li className="box">Dark Mode</li>
            <li>Light Mode</li>
          </ul>
        </div>
      </div>

      <button type="button" id="back-top" className="back-to-top" aria-label="Back to top">
        <i className="fa-regular fa-arrow-up" />
      </button>

      <div className="mouseCursor cursor-outer" />
      <div className="mouseCursor cursor-inner" />

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src={BRAND_LOGO} alt={BRAND_NAME} />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button type="button" aria-label="Close menu">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">{footer.blurb}</p>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">{BRAND_LOCATION}</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">{company.hours}</div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`tel:${BRAND_PHONE_TEL}`}>{BRAND_PHONE}</a>
                    </div>
                  </li>
                </ul>
                <ThemeButton to="/contact" className="mt-4">
                  Contact us
                </ThemeButton>
                <div className="social-icon d-flex align-items-center">
                  <a href={company.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />

      <SiteHeader />

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        <div className="search-popup__content">
          <form role="search" className="search-popup__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" id="search" name="search" placeholder="Search Here..." />
            <button type="submit" aria-label="Search" className="search-btn">
              <span>
                <i className="fa-regular fa-magnifying-glass" />
              </span>
            </button>
          </form>
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
          <Footer />
        </div>
      </div>

      <ChatWidget />
    </div>
  )
}
