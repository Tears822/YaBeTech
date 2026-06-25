import { partnerLogos } from '../../data/siteContent'

export default function BrandSection({ className = '' }) {
  return (
    <div className={`brand-section ${className}`.trim()}>
      <div className="swiper brand-slider">
        <div className="swiper-wrapper">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="swiper-slide">
              <div className="brand-box-1">
                <span className="brand-img-1">
                  <img className="brand-logo" src={logo.src} alt={logo.name} />
                </span>
                <span className="brand-img-1">
                  <img className="brand-logo" src={logo.src} alt="" aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
