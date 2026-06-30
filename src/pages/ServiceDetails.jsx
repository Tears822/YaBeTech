import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import ThemeButton from '../components/common/ThemeButton'
import { useLanguage } from '../i18n/LanguageContext'

export default function ServiceDetails() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const { services, faqItems, serviceDetails, faqSection } = t
  const service = services.find((item) => item.slug === slug) ?? services[0]

  return (
    <>
      <PageBreadcrumb title={t.pages.serviceDetails} current={service.title} />

      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="service-top-img fix">
              <img data-speed=".8" src="/assets/img/inner-page/service-details-01.jpg" alt="" />
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <h2>
                    {service.title} {service.subtitle}
                  </h2>
                  <p className="mt-3">{service.description}</p>
                  <div className="service-list-items mt-4">
                    <ul>
                      {service.tags.map((tag) => (
                        <li key={tag}>
                          <i className="fa-solid fa-circle-check" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-sidebar">
                  <div className="sidebar-widget">
                    <h3>{serviceDetails.allServices}</h3>
                    <ul className="category-list">
                      {services.map((item) => (
                        <li key={item.id}>
                          <Link to={`/service/${item.slug}`}>
                            {item.title} {item.subtitle}
                            <i className="fa-solid fa-arrow-up-right" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h3>{serviceDetails.startProject}</h3>
                    <p>{serviceDetails.startProjectText}</p>
                    <ThemeButton to="/contact">{t.common.getInTouch}</ThemeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/home-1/star.svg" alt="" /> {faqSection.eyebrow}
            </h6>
            <h2 className="text-anim">
              {faqSection.title} <br /> <span>{faqSection.titleAccent}</span>
            </h2>
          </div>
          <ul className="accordion-box">
            {faqItems.map((item, index) => (
              <li
                key={item.question}
                className={`accordion block wow fadeInUp${index === 0 ? ' active-block' : ''}`}
              >
                <div className={`acc-btn${index === 0 ? ' active' : ''}`}>
                  {item.question}
                  <div className="icon fa-solid fa-arrow-down" />
                </div>
                <div className={`acc-content${index === 0 ? ' current' : ''}`}>
                  <div className="content">
                    <div className="text">{item.answer}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
