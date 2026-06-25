import PageBreadcrumb from '../components/common/PageBreadcrumb'
import CtaBanner from '../components/common/CtaBanner'
import ThemeButton from '../components/common/ThemeButton'
import { notFoundPage } from '../data/siteContent'

export default function NotFound() {
  return (
    <>
      <PageBreadcrumb title="Error 404" current="Error 404" />

      <section className="error-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="error-items">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="/assets/img/inner-page/404.png" alt="" />
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".5s">
                  {notFoundPage.title}
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {notFoundPage.text}
                </p>
                <ThemeButton to="/" wowDelay=".5s">
                  {notFoundPage.buttonText}
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
