import { Link } from 'react-router-dom'
import { BRAND_EMAIL } from '../constants/brand'
import CtaBanner from '../components/common/CtaBanner'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import SectionHeading from '../components/common/SectionHeading'
import { company, featuredProjects, productPage } from '../data/siteContent'

export default function Product() {
  return (
    <>
      <PageBreadcrumb title="Product" />

      <section className="project-section fix section-padding">
        <div className="container">
          <SectionHeading
            eyebrow={productPage.eyebrow}
            title={productPage.title}
            titleAccent={productPage.titleAccent}
            intro={productPage.intro}
            className="mb-5"
          />

          <div className="row g-4">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`.${3 + (index % 2) * 2}s`}
              >
                <div className="project-box-items-inner">
                  <div className="thumb">
                    <img src={project.image} alt={project.title} />
                    <img src={project.image} alt="" aria-hidden="true" />
                  </div>
                  <div className="project-content-area">
                    <div className="content">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text">
                          {tag}
                        </span>
                      ))}
                      <h3>
                        <Link to={`/product/${project.slug}`}>{project.title}</Link>
                      </h3>
                    </div>
                    <Link
                      to={`/product/${project.slug}`}
                      className="circle-check"
                      aria-label={`View ${project.title}`}
                    >
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={productPage.ctaTitle}
        titleAccent={productPage.ctaTitleAccent}
        text={productPage.ctaText}
        buttonText={productPage.ctaButton}
        footer={
          <p className="mt-3 mb-0">
            <a href={`mailto:${BRAND_EMAIL}`} className="text-white">
              Or email {company.founder.split(' ')[0]} directly
            </a>
          </p>
        }
      />
    </>
  )
}
