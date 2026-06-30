import { Link } from 'react-router-dom'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import { useLanguage } from '../i18n/LanguageContext'
import '../styles/resume.css'

export default function Resume() {
  const { t } = useLanguage()
  const { resume, pages } = t
  const { sections, cta, profile, targetFit, skillGroups, careerJourney, earlierExperience, certifications, education, languages } =
    resume

  return (
    <div className="resume-page">
      <PageBreadcrumb title={pages.resume} />

      <section className="fix resume-hero-section">
        <div className="container">
          <div className="resume-hero-card wow fadeInUp" data-wow-delay=".2s">
            <div className="resume-hero-layout">
              <div className="resume-hero-aside">
                <div className="resume-hero-avatar">
                  <img src="/profile.png" alt={profile.name} />
                </div>
              </div>

              <div className="resume-hero-body">
                <div className="section-title mb-0">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.seniorEngineer}
                  </h6>
                  <h2 className="text-anim">{profile.name}</h2>
                  <p className="mt-3 mb-0">{profile.title}</p>
                </div>

                <div className="resume-contact">
                  <span className="resume-contact-item">
                    <i className="fa-solid fa-location-dot" aria-hidden="true" />
                    {profile.location}
                  </span>
                  <a className="resume-contact-item" href={`tel:${t.company.phoneTel}`}>
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    {t.company.phone}
                  </a>
                  <a className="resume-contact-item" href={`mailto:${t.company.email}`}>
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    {t.company.email}
                  </a>
                  <a className="resume-contact-item" href={t.company.linkedin} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>

                <div className="resume-tags">
                  {profile.tags.map((tag) => (
                    <span key={tag} className="resume-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="resume-stats">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="resume-stat">
                      <div className="resume-stat-icon" aria-hidden="true">
                        <i className={stat.icon} />
                      </div>
                      <div className="resume-stat-text">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="resume-section wow fadeInUp" data-wow-delay=".2s">
                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.professionalProfile}
                  </h6>
                  <h2 className="text-anim">{sections.aboutMe}</h2>
                </div>
                <p>{profile.summary}</p>
                <ul className="resume-list list-unstyled mt-4 mb-0">
                  {profile.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="resume-section wow fadeInUp" data-wow-delay=".3s">
                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.architectureSecurity}
                  </h6>
                  <h2 className="text-anim">{sections.targetFit}</h2>
                </div>
                <ul className="resume-list list-unstyled mb-0">
                  {targetFit.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/home-1/star.svg" alt="" /> {sections.careerJourney}
            </h6>
            <h2 className="text-anim">{sections.professionalExperience}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              {careerJourney.map((item, index) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="resume-timeline-item wow fadeInUp"
                  data-wow-delay={`${0.2 + index * 0.05}s`}
                >
                  <div className="resume-timeline-meta">{item.period}</div>
                  <h3>{item.role}</h3>
                  <h5>{item.company}</h5>
                  <ul className="resume-list list-unstyled mb-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="resume-tool-tags">
                    {item.tools.map((tool) => (
                      <span key={tool} className="resume-tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/home-1/star.svg" alt="" /> {sections.technicalSkills}
            </h6>
            <h2 className="text-anim">{sections.skillsTools}</h2>
          </div>

          <div className="resume-skills-grid">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="resume-skill-card wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.05}s`}
              >
                <h4>{group.title}</h4>
                <div className="resume-tool-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="resume-tool-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fix section-padding section-bg pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="resume-section wow fadeInUp" data-wow-delay=".2s">
                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.earlierExperience}
                  </h6>
                  <h2 className="text-anim">{sections.earlierRoles}</h2>
                </div>
                {earlierExperience.map((item) => (
                  <div key={item.company} className="resume-earlier-item">
                    <div className="resume-timeline-meta">{item.period}</div>
                    <h4>{item.role}</h4>
                    <h5>{item.company}</h5>
                    <p className="mb-0">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="resume-section wow fadeInUp" data-wow-delay=".3s">
                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.certifications}
                  </h6>
                  <h2 className="text-anim">{sections.credentials}</h2>
                </div>
                <ul className="resume-list list-unstyled mb-5">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> {sections.education}
                  </h6>
                  <h2 className="text-anim">{sections.background}</h2>
                </div>
                <h4>{education.title}</h4>
                <p>
                  {education.school} · {education.period}
                </p>
                <p>{education.note}</p>
                <p className="mb-0">
                  <strong>{sections.languagesLabel}:</strong> {languages.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fix section-padding pt-0">
        <div className="container">
          <div className="resume-cta wow fadeInUp" data-wow-delay=".2s">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h3 className="text-white mb-3">{cta.title}</h3>
                <p>{cta.text}</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="/contact" className="theme-btn">
                  <div className="btn_inner">
                    <div className="btn_icon">
                      <span>
                        <i className="fa-solid fa-arrow-up-right" />
                        <i className="fa-solid fa-arrow-up-right" />
                      </span>
                    </div>
                    <div className="btn_text">
                      <span>{cta.button}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
