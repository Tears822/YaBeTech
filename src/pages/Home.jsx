import { Link } from 'react-router-dom'
import BrandSection from '../components/ui/BrandSection'
import CtaBanner from '../components/common/CtaBanner'
import MarqueeStrip from '../components/common/MarqueeStrip'
import SectionHeading from '../components/common/SectionHeading'
import ThemeButton from '../components/common/ThemeButton'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const { hero, whyUs, about, services, featuredProjects, processSteps, valueQuotes, marqueeWords, home, company } = t

  return (
    <>
      <section className="hero-section hero-1 fix bg-cover bg-hero">
        <div className="brevon-text">
          <img src="/assets/img/home-1/hero/yabetech-text.svg" alt="" />
        </div>
        <div className="light-bg">
          <img src="/assets/img/home-1/hero/light-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h6 className="wow fadeInUp">
                  <span>{hero.open}</span>
                  {hero.badge}
                </h6>
                <h1 className="text-anim">
                  {hero.title} <span>{hero.titleAccent}</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {hero.subtitle}
                </p>
                <ThemeButton to="/contact" wowDelay=".5s">
                  {hero.ctaText}
                </ThemeButton>
                <div className="hero-info wow fadeInUp" data-wow-delay=".7s">
                  <div className="info-content">
                    <h3>
                      <span className="count">100</span>+
                    </h3>
                    <p>{hero.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/img/home-1/hero/hero-1.png" alt={company.founder} />
                <div className="box-1 float-bob-y">
                  <img src="/assets/img/home-1/hero/box1.png" alt="" />
                </div>
                <div className="box-2 float-bob-x">
                  <img src="/assets/img/home-1/hero/box2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandSection />

      <section className="service-section fix section-padding">
        <div className="container">
          <SectionHeading
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
            titleAccent={whyUs.titleAccent}
            intro={whyUs.subtitle}
          />
          <div className="row advance-wrap">
            {whyUs.items.map((item) => (
              <div key={item.title} className="col-xl-3 col-lg-4 col-md-6 advance-item">
                <div className="service-card-item">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-bg">
        <div className="about-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="about-image fix">
                <img data-speed=".8" src="/assets/img/home-1/about/about-image.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-7 mt-4 mt-xl-0">
              <div className="about-content">
                <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" className="mb-0" />
                <ThemeButton to="/about" wowDelay=".3s">
                  {t.common.learnMore}
                </ThemeButton>
                <div className="about-conter-items">
                  {about.counters.map((counter, index) => (
                    <div
                      key={counter.label}
                      className="counter-box wow fadeInUp"
                      data-wow-delay={`.${3 + index * 2}s`}
                    >
                      <h6>{counter.label}</h6>
                      <h2>
                        <span className="count">{counter.value}</span>
                        {counter.suffix}
                      </h2>
                      <p>{counter.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <SectionHeading
              eyebrow={home.featureSection.eyebrow}
              title={home.featureSection.title}
              titleAccent={home.featureSection.titleAccent}
              align="left"
              className="mb-0"
            />
            <div className="array-button wow fadeInUp" data-wow-delay=".3s">
              <button type="button" className="array-prev">
                <i className="fa-solid fa-chevron-left" />
              </button>
              <div className="swiper-dot">
                <div className="dot" />
              </div>
              <button type="button" className="array-next">
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="feature-wrapper">
            <div className="swiper feature-box-slider">
              <div className="swiper-wrapper">
                {services.map((service) => (
                  <div key={service.id} className="swiper-slide">
                    <div className="feature-box-items">
                      <h6>{service.id}.</h6>
                      <h3>
                        <Link to={`/service/${service.slug}`}>
                          {service.title} <span className="d-block">{service.subtitle}</span>
                        </Link>
                      </h3>
                      <p>{service.description}</p>
                      <div className="feature-info-box">
                        <ul>
                          {service.tags.slice(0, 3).map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                        <Link to={`/service/${service.slug}`} className="icon">
                          <i className="fa-solid fa-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section tp-project-5-2-area fix section-padding section-bg-2">
        <div className="marquee-section">
          <div className="marquee tp-project-5-2-title">
            {Array.from({ length: 4 }, (_, group) => (
              <div key={group} className="marquee-group">
                {Array.from({ length: 5 }, (_, item) => (
                  <div key={item} className="text">
                    <span>[</span> {home.projectsMarquee} <span>]</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="project-box-area des-portfolio-wrap">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <div
                key={project.slug}
                className={`project-box-items des-portfolio-panel${index === 2 ? ' mb-0' : ''}`}
              >
                <div className="content">
                  <span>[{project.year}]</span>
                  <h3>
                    <Link to="/product">{project.title}</Link>
                  </h3>
                  <Link to="/product" className="icon">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                  <span className="number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="thumb">
                  <img src={project.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section section-padding">
        <div className="container">
          <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} titleAccent={whyUs.titleAccent} />
          <div className="testimonial-warpper">
            <div className="testi-client testi-client--solo">
              <div className="client-img">
                <img src="/profile.png" alt={company.founder} />
              </div>
            </div>
            <div className="swiper testimonial-slider-content">
              <div className="swiper-wrapper">
                {valueQuotes.map((quote) => (
                  <div key={quote.name} className="swiper-slide">
                    <div className="testimonial-content-1">
                      <h3>{quote.text}</h3>
                      <div className="testi-info">
                        <h4>{quote.name}</h4>
                        <p>{quote.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-dot text-center mt-4">
                <div className="dot2" />
              </div>
            </div>
            <div className="array-button">
              <button type="button" className="array-prev">
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button type="button" className="array-next">
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section fix">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="faq-image-1 fix wow fadeInUp" data-wow-delay=".3s">
              <img data-speed=".8" src="/assets/img/home-1/faq-image.jpg" alt="" />
              <div className="incrase-box float-bob-y">
                <h6>{home.businessIncrease}</h6>
                <h3>3X</h3>
                <img src="/assets/img/home-1/increase.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content-1 section-padding">
              <SectionHeading
                eyebrow={home.faqSection.eyebrow}
                title={home.faqSection.title}
                titleAccent={home.faqSection.titleAccent}
                align="left"
                className="mb-0"
              />
              <ul className="accordion-box">
                {processSteps.map((step, index) => (
                  <li
                    key={step.number}
                    className={`accordion block wow fadeInUp${index === 0 ? ' active-block' : ''}`}
                    data-wow-delay={index === 0 ? undefined : `.${index * 2}s`}
                  >
                    <div className={`acc-btn${index === 0 ? ' active' : ''}`}>
                      <span className="number">{step.number}</span>
                      {step.title}
                      <div className="icon fa-solid fa-arrow-down" />
                    </div>
                    <div className={`acc-content${index === 0 ? ' current' : ''}`}>
                      <div className="content">
                        <div className="text">{step.description}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip words={marqueeWords} />
      <CtaBanner />
    </>
  )
}
