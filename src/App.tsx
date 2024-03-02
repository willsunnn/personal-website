import { Outlet, Route, Routes } from 'react-router-dom'
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
      <Route element={
        <div className="App">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      }/>

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

      <Route path="*" element={(
        <LandingPage/>
      )}/>
    </Routes>
  )
}

export default App
