import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import Schedule from './pages/Schedule.jsx'
import Travel from './pages/Travel.jsx'
import FAQ from './pages/FAQ.jsx'
import RSVP from './pages/RSVP.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/our-story" element={<ProtectedRoute><OurStory /></ProtectedRoute>} />
          <Route path="/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
          <Route path="/travel" element={<ProtectedRoute><Travel /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
          <Route path="/rsvp" element={<ProtectedRoute><RSVP /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
