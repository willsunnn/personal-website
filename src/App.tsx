import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { AboutMePage } from './page/AboutMePage'
import { LandingPage } from './page/LandingPage'
import { ProjectsPage } from './page/ProjectsPage'
import { ResumePage } from './page/Resume'
import { WorkExperiencePage } from './page/WorkExperience'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="w-full">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      }>
        <Route path="AboutMe" element={(
          <AboutMePage/>
        )}/>

        <Route path="WorkExperience" element={(
          <WorkExperiencePage/>
        )}/>

        <Route path="Projects" element={(
          <ProjectsPage/>
        )}/>

        <Route path="Resume" element={(
          <ResumePage/>
        )}/>

        <Route path="Landing" element={(
          <LandingPage/>
        )}/>

        {/* If there was no path, redirect to the landing page */}
        <Route path="" element={
          <Navigate to='/Landing'/>
        }/>
      </Route>

    </Routes>
  )
}

export default App
