import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import ProjectDetails from './pages/ProjectDetails'
import Resume from './pages/Resume'
import Service from './pages/Service'
import ServiceDetails from './pages/ServiceDetails'

function LegacyProjectRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/product/${slug}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="service/:slug" element={<ServiceDetails />} />
          <Route path="service-details" element={<Navigate to="/service/ai-powered-features" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:slug" element={<ProjectDetails />} />
          <Route path="project" element={<Navigate to="/product" replace />} />
          <Route path="project-details" element={<Navigate to="/product/mrs-philippines-montreal" replace />} />
          <Route path="project/:slug" element={<LegacyProjectRedirect />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resume" element={<Resume />} />
          <Route path="blog/*" element={<Navigate to="/" replace />} />
          <Route path="faq" element={<Navigate to="/" replace />} />
          <Route path="team/*" element={<Navigate to="/" replace />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
