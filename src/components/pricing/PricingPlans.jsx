import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { pricingPage, pricingPlans } from '../../data/siteContent'

export default function PricingPlans() {
  return (
    <section className="pricing-section fix section-padding">
      <div className="container">
        <div className="section-title-area align-items-end">
          <SectionHeading
            eyebrow={pricingPage.eyebrow}
            title={pricingPage.title}
            titleAccent={pricingPage.titleAccent}
            align="left"
            className="mb-0"
            titleClassName="tx-title sec_title tz-itm-title tz-itm-anim"
          />
        </div>
        <p className="mt-3 mb-5 wow fadeInUp" data-wow-delay=".3s">
          {pricingPage.intro}
        </p>
        <div className="row pricing-row">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="col-xl-4 col-lg-6 col-md-6">
              <div className={`pricing-box-items${plan.featured ? ' active' : ''}`}>
                <div className="pricing-header">
                  <span>{plan.name}</span>
                  <h3 className="price">
                    {plan.priceLabel}
                    {plan.priceSuffix && <sub>{plan.priceSuffix}</sub>}
                  </h3>
                  <p>{plan.description}</p>
                </div>
                <Link to="/contact" className="pricing-btn">
                  <span className="content-wrap">
                    <span className="default-content">
                      <i className="fa-solid fa-arrow-up-right" />
                      <span>{plan.ctaText}</span>
                    </span>
                    <span className="hover-content">
                      <i className="fa-solid fa-arrow-up-right" />
                      <span>{plan.ctaText}</span>
                    </span>
                  </span>
                </Link>
                <div className="pricing-list">
                  <h5>Includes:</h5>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-circle-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
