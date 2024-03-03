import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import { ResumePage } from './pages/Resume'
import { Header } from './components/header/Header'
import { HomePage } from './pages/home/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="relative flex min-h-screen flex-col bg-background">
          <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Header />
          </header>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      }>
        <Route path="home" element={(
          <HomePage />
        )} />

        <Route path="resume" element={(
          <ResumePage />
        )} />

        {/* If there was no path, redirect to the landing page */}
        <Route path="" element={
          <Navigate to='/home' />
        } />
      </Route>

    </Routes>
  )
}

export default App
