import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Singles from './components/Singles'
import Albums from './components/Albums' 
import Tickets from './components/Tickets'
import LatestRelease from './components/LatestRelease'
import Footer from './components/Footer'

function App() {
  return (
    <main className="w-full bg-tems-cream">
      <Navbar />
      <Hero />
      <Albums /> 
      <Tickets />
      <Singles />
      <About />
      <LatestRelease />
      <Footer />
    </main>
  )
}

export default App