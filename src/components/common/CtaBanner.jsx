import ThemeButton from './ThemeButton'
import { useLanguage } from '../../i18n/LanguageContext'

export default function CtaBanner({
  title,
  titleAccent,
  text,
  buttonText,
  buttonTo = '/contact',
  buttonHref,
  footer,
  wowDelay = '.3s',
}) {
  const { t } = useLanguage()
  const cta = t.cta

  return (
    <section className="cta-newsletter-section bg-cover bg-cta-newsletter">
      <div className="container">
        <div className="cta-newsletter-wrapper">
          <h2 className="text-anim">
            {title ?? cta.title} <br /> <span>{titleAccent ?? cta.titleAccent}</span>
          </h2>
          <div className="newsletter-form wow fadeInUp" data-wow-delay={wowDelay}>
            {(text ?? cta.text) && <p>{text ?? cta.text}</p>}
            {buttonHref ? (
              <ThemeButton href={buttonHref}>{buttonText ?? cta.button}</ThemeButton>
            ) : (
              <ThemeButton to={buttonTo}>{buttonText ?? cta.button}</ThemeButton>
            )}
            {footer}
          </div>
        </div>
      </div>
    </section>
  )
}
