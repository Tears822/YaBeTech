import ThemeButton from './ThemeButton'
import { defaultCta } from '../../data/siteContent'

export default function CtaBanner({
  title = defaultCta.title,
  titleAccent = defaultCta.titleAccent,
  text = defaultCta.text,
  buttonText = defaultCta.buttonText,
  buttonTo = defaultCta.buttonTo,
  buttonHref,
  footer,
  wowDelay = '.3s',
}) {
  return (
    <section className="cta-newsletter-section bg-cover bg-cta-newsletter">
      <div className="container">
        <div className="cta-newsletter-wrapper">
          <h2 className="text-anim">
            {title} <br /> <span>{titleAccent}</span>
          </h2>
          <div className={`newsletter-form wow fadeInUp${wowDelay ? '' : ''}`} data-wow-delay={wowDelay}>
            {text && <p>{text}</p>}
            {buttonHref ? (
              <ThemeButton href={buttonHref}>{buttonText}</ThemeButton>
            ) : (
              <ThemeButton to={buttonTo}>{buttonText}</ThemeButton>
            )}
            {footer}
          </div>
        </div>
      </div>
    </section>
  )
}
