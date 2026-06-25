import FormSelect from '../components/ui/FormSelect'
import CtaBanner from '../components/common/CtaBanner'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import SectionHeading from '../components/common/SectionHeading'
import ThemeButton from '../components/common/ThemeButton'
import { BRAND_EMAIL, BRAND_LOCATION, BRAND_PHONE, BRAND_PHONE_TEL } from '../constants/brand'
import { company, contactPage, servicesPage } from '../data/siteContent'

const cardIcons = {
  location: 'fa-sharp fa-solid fa-location-dot',
  phone: 'fa-solid fa-phone',
  clock: 'fa-regular fa-clock',
}

export default function Contact() {
  const [locationCard, contactCard, availabilityCard] = contactPage.cards
  const serviceSelectOptions = servicesPage.serviceOptions.map((option) => ({
    value: option,
    label: option,
  }))

  return (
    <>
      <PageBreadcrumb title="Contact" />

      <section className="contact-info-section fix section-padding">
        <div className="container">
          <SectionHeading
            eyebrow={contactPage.eyebrow}
            title={contactPage.title}
            titleAccent={contactPage.titleAccent}
            intro={contactPage.intro}
          />
          <div className="row contact-info-row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp contact-info-col" data-wow-delay=".3s">
              <div className="contact-info-box">
                <div className="icon">
                  <i className={cardIcons[locationCard.icon]} />
                </div>
                <div className="content">
                  <h4>{locationCard.title}</h4>
                  <div className="contact-info-lines">
                    <span className="contact-info-lines__item">{BRAND_LOCATION}</span>
                    <span className="contact-info-lines__item">{locationCard.lines[1]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp contact-info-col" data-wow-delay=".5s">
              <div className="contact-info-box">
                <div className="icon">
                  <i className={cardIcons[contactCard.icon]} />
                </div>
                <div className="content">
                  <h4>{contactCard.title}</h4>
                  <div className="contact-info-lines">
                    <a className="contact-info-lines__item" href={`tel:${BRAND_PHONE_TEL}`}>
                      {contactCard.phoneLabel}: {BRAND_PHONE}
                    </a>
                    <a
                      className="contact-info-lines__item contact-info-lines__item--email"
                      href={`mailto:${BRAND_EMAIL}`}
                    >
                      {contactCard.emailLabel}: {BRAND_EMAIL}
                    </a>
                    <a
                      className="contact-info-lines__item"
                      href={company.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn: {company.founder}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp contact-info-col" data-wow-delay=".7s">
              <div className="contact-info-box">
                <div className="icon">
                  <i className={cardIcons[availabilityCard.icon]} />
                </div>
                <div className="content">
                  <h4>{availabilityCard.title}</h4>
                  <div className="contact-info-lines">
                    <span className="contact-info-lines__item">{company.hours}</span>
                    <span className="contact-info-lines__item">{company.availability}</span>
                    <span className="contact-info-lines__item">Contract rate: {company.hourlyRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 contact-form-row">
              <div className="col-lg-6 contact-form-col">
                <div className="contact-map">
                  <iframe
                    title="Montreal map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89470.16315917493!2d-73.6496559!3d45.5016889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontr%C3%A9al%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sca!4v1719244800000!5m2!1sen!2sca"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-6 contact-form-col">
                <div className="contact-box-items">
                  <p className="mb-2">{contactPage.roleLabel}</p>
                  <h2 className="text-anim">{contactPage.formTitle}</h2>
                  <p className="mt-3 mb-4">{contactPage.formIntro}</p>
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
                          <input type="tel" placeholder="Phone number (optional)" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <div className="form">
                            <FormSelect
                              name="service"
                              placeholder="What do you need help with?"
                              options={serviceSelectOptions}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            placeholder="Describe your project, stack, timeline, and goals"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                        <ThemeButton type="submit">Send message</ThemeButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        text="Book a free discovery call. First conversation is always no obligation."
        buttonText={`Email ${company.founder.split(' ')[0]}`}
        buttonHref={`mailto:${BRAND_EMAIL}`}
      />
    </>
  )
}
