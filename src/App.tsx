import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import { AboutMePage } from './pages/about/AboutMePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/Resume'
import { WorkExperiencePage } from './pages/WorkExperience'
import { Header } from './components/header/Header'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="relative flex min-h-screen flex-col bg-background">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Header />
          </header>

          <div className="flex-1">
            <Outlet />
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      }>
        <Route path="about" element={(
          <AboutMePage />
        )} />

        <Route path="experience" element={(
          <WorkExperiencePage />
        )} />

        <Route path="projects" element={(
          <ProjectsPage />
        )} />

        <Route path="resume" element={(
          <ResumePage />
        )} />

        {/* If there was no path, redirect to the landing page */}
        <Route path="" element={
          <Navigate to='/about' />
        } />
      </Route>

    </Routes>
  )
}

export default App
