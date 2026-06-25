import { Link } from 'react-router-dom'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import {
  resumeProfile,
  targetFit,
  skillGroups,
  careerJourney,
  earlierExperience,
  certifications,
  education,
  languages,
} from '../data/resume'
import '../styles/resume.css'

export default function Resume() {
  const { name, title, location, phone, email, linkedin, summary, highlights, stats, tags } = resumeProfile

  return (
    <div className="resume-page">
      <PageBreadcrumb title="Resume" />

      <section className="fix resume-hero-section">
        <div className="container">
          <div className="resume-hero-card wow fadeInUp" data-wow-delay=".2s">
            <div className="resume-hero-layout">
              <div className="resume-hero-aside">
                <div className="resume-hero-avatar">
                  <img src="/profile.png" alt={name} />
                </div>
              </div>

              <div className="resume-hero-body">
                <div className="section-title mb-0">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> Senior Software Engineer
                  </h6>
                  <h2 className="text-anim">{name}</h2>
                  <p className="mt-3 mb-0">{title}</p>
                </div>

                <div className="resume-contact">
                  <span className="resume-contact-item">
                    <i className="fa-solid fa-location-dot" aria-hidden="true" />
                    {location}
                  </span>
                  <a className="resume-contact-item" href={`tel:${phone.replace(/\D/g, '')}`}>
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    {phone}
                  </a>
                  <a className="resume-contact-item" href={`mailto:${email}`}>
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    {email}
                  </a>
                  <a className="resume-contact-item" href={linkedin} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>

                <div className="resume-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="resume-tag">{tag}</span>
                  ))}
                </div>

                <div className="resume-stats">
                  {stats.map((stat) => (
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
                    <img src="/assets/img/home-1/star.svg" alt="" /> Professional Profile
                  </h6>
                  <h2 className="text-anim">About Me</h2>
                </div>
                <p>{summary}</p>
                <ul className="resume-list list-unstyled mt-4 mb-0">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="resume-section wow fadeInUp" data-wow-delay=".3s">
                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> Architecture & Security
                  </h6>
                  <h2 className="text-anim">Target Fit</h2>
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
              <img src="/assets/img/home-1/star.svg" alt="" /> Career Journey
            </h6>
            <h2 className="text-anim">Professional Experience</h2>
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
                      <span key={tool} className="resume-tool-tag">{tool}</span>
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
              <img src="/assets/img/home-1/star.svg" alt="" /> Technical Skills
            </h6>
            <h2 className="text-anim">Skills & Tools</h2>
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
                    <span key={skill} className="resume-tool-tag">{skill}</span>
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
                    <img src="/assets/img/home-1/star.svg" alt="" /> Earlier Experience
                  </h6>
                  <h2 className="text-anim">Earlier Roles</h2>
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
                    <img src="/assets/img/home-1/star.svg" alt="" /> Certifications
                  </h6>
                  <h2 className="text-anim">Credentials</h2>
                </div>
                <ul className="resume-list list-unstyled mb-5">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="section-title">
                  <h6 className="sub-title">
                    <img src="/assets/img/home-1/star.svg" alt="" /> Education
                  </h6>
                  <h2 className="text-anim">Background</h2>
                </div>
                <h4>{education.title}</h4>
                <p>{education.school} · {education.period}</p>
                <p>{education.note}</p>
                <p className="mb-0">
                  <strong>Languages:</strong> {languages.join(' · ')}
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
                <h3 className="text-white mb-3">Open to new opportunities</h3>
                <p>Senior and lead frontend roles · architecture and security reviews · full-stack modernization projects.</p>
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
                      <span>Get in touch</span>
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
