import { useLanguage } from '../../i18n/LanguageContext'

export default function BrandSection({ className = '' }) {
  const { t } = useLanguage()

  return (
    <section className={`brand-section ${className}`.trim()}>
      <div className="swiper brand-slider">
        <div className="swiper-wrapper">
          {t.partnerLogos.map((logo) => (
            <div key={logo.name} className="swiper-slide">
              <div className="brand-box-1">
                <span className="brand-img-1">
                  <img src={logo.src} alt={logo.name} className="brand-logo brand-logo-svg" />
                </span>
                <span className="brand-img-1">
                  <img src={logo.src} alt="" aria-hidden="true" className="brand-logo brand-logo-svg" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
