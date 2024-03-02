import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import { AboutMePage } from './page/AboutMePage'
import { ProjectsPage } from './page/ProjectsPage'
import { ResumePage } from './page/Resume'
import { WorkExperiencePage } from './page/WorkExperience'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="w-screen h-screen bg-">
          <div className="w-screen h-20 p-2 fixed top-0 left-0">
            <Header/>
          </div>

          {/* Temporary while there is no content */}
          <div className="w-screen h-[2000px] px-2 mt-20 overflow-scroll">
            <Outlet/>
            <Footer/>
          </div>
        </div>
      }>
        <Route path="about" element={(
          <AboutMePage/>
        )}/>

        <Route path="experience" element={(
          <WorkExperiencePage/>
        )}/>

        <Route path="projects" element={(
          <ProjectsPage/>
        )}/>

        <Route path="resume" element={(
          <ResumePage/>
        )}/>

        {/* If there was no path, redirect to the landing page */}
        <Route path="" element={
          <Navigate to='/about'/>
        }/>
      </Route>

    </Routes>
  )
}

export default App
