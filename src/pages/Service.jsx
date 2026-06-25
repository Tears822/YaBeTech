import { Link } from 'react-router-dom'
import FormSelect from '../components/ui/FormSelect'
import CtaBanner from '../components/common/CtaBanner'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import SectionHeading from '../components/common/SectionHeading'
import ThemeButton from '../components/common/ThemeButton'
import { company, services, servicesPage } from '../data/siteContent'

export default function Service() {
  const serviceSelectOptions = servicesPage.serviceOptions.map((option) => ({
    value: option,
    label: option,
  }))

  return (
    <>
      <PageBreadcrumb title="Services" />

      <section className="feature-section section-padding fix">
        <div className="container">
          <SectionHeading
            eyebrow={servicesPage.eyebrow}
            title={servicesPage.title}
            titleAccent={servicesPage.titleAccent}
            intro={servicesPage.intro}
            className="mb-5"
          />
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`.${3 + (index % 3) * 2}s`}
              >
                <div className="feature-box-items mt-0">
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
      </section>

      <section className="contact-section-2 bg-cover section-padding bg-contact-panel">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <SectionHeading
                  eyebrow={company.tagline}
                  title="Senior engineering,"
                  titleAccent="direct to you."
                  intro={`${company.founder} brings 25+ years of experience from Loto-Québec, Brault & Martineau, and other major organizations. Engagements are typically ${company.hourlyRate} for contract work, with fixed-scope quotes available after a free discovery call.`}
                  align="left"
                  light
                />
                <ul className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                  {servicesPage.highlights.map((item) => (
                    <li key={item} className="text-white mb-2">
                      <i className="fa-solid fa-circle-check me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="contact-box-items style-2">
                  <SectionHeading
                    eyebrow="get in touch"
                    title={servicesPage.contactTitle}
                    intro={servicesPage.contactText}
                    align="left"
                  />
                  <form
                    action="#"
                    id="contact-form"
                    className="contact-form-box"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="row g-4 align-items-center">
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <input type="text" placeholder="Full name *" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <input type="email" placeholder="Email address *" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <input type="tel" placeholder="Phone number" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <div className="form">
                            <FormSelect
                              name="service"
                              placeholder="Choose a service"
                              options={serviceSelectOptions}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <textarea name="message" placeholder="Tell me about your project" />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                        <ThemeButton to="/contact">Contact me</ThemeButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
