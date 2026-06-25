import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/common/CtaBanner'
import PageBreadcrumb from '../components/common/PageBreadcrumb'
import ThemeButton from '../components/common/ThemeButton'
import { featuredProjects } from '../data/siteContent'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = featuredProjects.find((item) => item.slug === slug) ?? featuredProjects[0]

  return (
    <>
      <PageBreadcrumb title="Project details" current={project.title.split(':')[0]} />

      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="details-top-img fix">
              <img data-speed=".8" src={project.image} alt="" />
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="project-details-content">
                  <span className="text">[{project.year}]</span>
                  <h2>{project.title}</h2>
                  <div className="tag-list mt-3 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>
                    Representative client work spanning front-end modernization, API integration, and
                    production deployment. Reach out to discuss similar projects for your team.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-sidebar">
                  <div className="sidebar-widget">
                    <h3>More work</h3>
                    <ul className="category-list">
                      {featuredProjects.map((item) => (
                        <li key={item.slug}>
                          <Link to={`/product/${item.slug}`}>
                            {item.title.split(':')[0]}
                            <i className="fa-solid fa-arrow-up-right" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ThemeButton to="/contact">Discuss a project</ThemeButton>
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
