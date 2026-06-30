import { Link } from 'react-router-dom'
import { BRAND_EMAIL, BRAND_LOGO, BRAND_NAME, BRAND_PHONE, BRAND_PHONE_TEL, BRAND_LOCATION } from '../../constants/brand'
import { useLanguage } from '../../i18n/LanguageContext'
import { useFooterQuickLinks } from '../../i18n/useNav'

export default function Footer() {
  const { t } = useLanguage()
  const footerNav = useFooterQuickLinks()
  const { footer, company } = t

  return (
    <footer className="footer-section">
      <div className="footer-area">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <Link to="/" className="footer-logo brand-logo">
                      <img src={BRAND_LOGO} alt={BRAND_NAME} />
                      <span className="brand-logo__text">{BRAND_NAME}</span>
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>{footer.blurb}</p>
                    <Link to="/contact" className="footer-btn">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-up-right" />
                      </span>
                      {footer.letsTalk}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>{footer.quickLinks}</h3>
                  </div>
                  <ul className="gt-list-area">
                    {footerNav.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 ps-lg-0 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>{footer.services}</h3>
                  </div>
                  <ul className="gt-list-area">
                    {footer.serviceLinks.slice(0, 5).map((item) => (
                      <li key={item.label}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>{footer.getInTouch}</h3>
                  </div>
                  <ul className="contact-list footer-contact-list">
                    <li>
                      <span className="footer-contact-icon" aria-hidden="true">
                        <i className="fal fa-map-marker-alt" />
                      </span>
                      <span>{BRAND_LOCATION}</span>
                    </li>
                    <li>
                      <span className="footer-contact-icon" aria-hidden="true">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href={`tel:${BRAND_PHONE_TEL}`}>{BRAND_PHONE}</a>
                    </li>
                    <li>
                      <span className="footer-contact-icon" aria-hidden="true">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
                    </li>
                    <li>
                      <span className="footer-contact-icon" aria-hidden="true">
                        <i className="fa-regular fa-clock" />
                      </span>
                      <span>{company.hours}</span>
                    </li>
                  </ul>
                  <div className="social-icon d-flex align-items-center footer__social-links">
                    <a href={company.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href={`tel:${BRAND_PHONE_TEL}`} aria-label={`Call ${BRAND_PHONE}`}>
                      <i className="fa-solid fa-phone" />
                    </a>
                    <a href={`mailto:${BRAND_EMAIL}`} aria-label={`Email ${BRAND_EMAIL}`}>
                      <i className="fa-solid fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInUp" data-wow-delay=".3s">
                © {new Date().getFullYear()} <b>{BRAND_NAME}.</b> {footer.rightsReserved}
              </p>
              <div className="social-icon d-flex align-items-center footer-bottom__social wow fadeInUp" data-wow-delay=".5s">
                <a href={company.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href={`tel:${BRAND_PHONE_TEL}`} aria-label={`Call ${BRAND_PHONE}`}>
                  <i className="fa-solid fa-phone" />
                </a>
                <a href={`mailto:${BRAND_EMAIL}`} aria-label={`Email ${BRAND_EMAIL}`}>
                  <i className="fa-solid fa-envelope" />
                </a>
              </div>
              <ul className="footer-list wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <Link to="/contact">{footer.privacy}</Link>
                </li>
                <li>।</li>
                <li>
                  <Link to="/contact">{footer.terms}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
