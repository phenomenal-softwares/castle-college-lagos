import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import SiteHeader from '../components/SiteHeader/SiteHeader'
import SiteFooter from '../components/SiteFooter/SiteFooter'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import AcademicsPage from '../pages/AcademicsPage/AcademicsPage'
import AdmissionsPage from '../pages/AdmissionsPage/AdmissionsPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import OurCampusPage from '../pages/OurCampusPage/OurCampusPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import PortalPage from '../pages/PortalPage/PortalPage'
import PortalAccessPage from '../pages/PortalAccessPage/PortalAccessPage'
import PortalDashboardPage from '../pages/PortalDashboardPage/PortalDashboardPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import styles from './AppRouter.module.css'
import '../styles/site.css'

function AppRouter() {
  return (
    <BrowserRouter>
      <div className={`${styles.appRouter} site-shell`}>
        <ScrollToTop />
        <SiteHeader />
        <main className="site-main">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/campus" element={<OurCampusPage />} />
              <Route path="/facilities" element={<Navigate to="/campus" replace />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/" element={<NewsPage />} />
              <Route path="/gallery" element={<Navigate to="/campus" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portal" element={<PortalPage />} />
              <Route path="/portal/student" element={<PortalAccessPage role="student" title="Student Portal" />} />
              <Route path="/portal/teacher" element={<PortalAccessPage role="teacher" title="Teacher Portal" />} />
              <Route path="/portal/parent" element={<PortalAccessPage role="parent" title="Parent Portal" />} />
              <Route path="/portal/admin" element={<PortalAccessPage role="admin" title="Admin Portal" />} />
              <Route path="/portal/student/dashboard" element={<PortalDashboardPage role="student" />} />
              <Route path="/portal/teacher/dashboard" element={<PortalDashboardPage role="teacher" />} />
              <Route path="/portal/parent/dashboard" element={<PortalDashboardPage role="parent" />} />
              <Route path="/portal/admin/dashboard" element={<PortalDashboardPage role="admin" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
