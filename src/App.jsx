import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import Schedule from './pages/Schedule.jsx'
import Travel from './pages/Travel.jsx'
import FAQ from './pages/FAQ.jsx'
import RSVP from './pages/RSVP.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-cream)' }}>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

