import { Link } from 'react-router-dom'

export default function PageBreadcrumb({ title, current }) {
  return (
    <div className="breadcrumb-wrapper bg-cover bg-breadcrumb">
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {title}
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">
                <i className="fa-solid fa-house" /> Home
              </Link>
            </li>
            <li>/</li>
            <li>{current ?? title}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
