import BrandSection from '../components/ui/BrandSection'
import CtaBanner from '../components/common/CtaBanner'
import MarqueeStrip from '../components/common/MarqueeStrip'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import SectionHeading from '../components/common/SectionHeading'
import ThemeButton from '../components/common/ThemeButton'
import { about, aboutPage, company } from '../data/siteContent'

export default function About() {
  return (
    <>
      <PageBreadcrumb title="About" />

      <section className="about-inner-section fix section-padding">
        <div className="container">
          <div className="section-title-area align-items-end">
            <div className="section-title">
              <h6 className="sub-title wow fadeInUp">
                <img src="/assets/img/home-1/star.svg" alt="" />
                {company.availability}
              </h6>
              <h2 className="text-anim">
                Front-end &amp; AI engineering <br /> led by {company.founder}.
              </h2>
            </div>
            <div className="about-content">
              <p>{about.summary}</p>
              <div className="about-info">
                <div className="client-image">
                  <img src="/assets/img/inner-page/about-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="about-inner-image">
            <div className="fix">
              <img data-speed=".8" src="/assets/img/inner-page/about-image.jpg" alt="" />
            </div>
          </div>
          <div className="about-counter-wrapper">
            <div className="row g-4">
              {about.counters.map((counter, index) => (
                <div
                  key={counter.label}
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay={`.${3 + index * 2}s`}
                >
                  <div className="about-counter-item">
                    <h6>{counter.label}</h6>
                    <h2>
                      <span className="count">{counter.value}</span>
                      {counter.suffix}
                    </h2>
                    <p>{counter.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-text-inner fix actually-area section-bg">
        <div className="container">
          <SectionHeading
            eyebrow={aboutPage.valuesEyebrow}
            title={aboutPage.valuesTitle}
            intro={aboutPage.valuesIntro}
            titleClassName="font-sequelsans-romanbody t_line"
          />
          <ThemeButton to="/contact" className="mt-5" wowDelay=".5s">
            Get started
          </ThemeButton>
        </div>
      </section>

      <MarqueeStrip words={aboutPage.marqueeWords} />
      <BrandSection className="mt-0 mb-30" />
      <CtaBanner />
    </>
  )
}
