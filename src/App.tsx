import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-white font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        <Hero />
        <div className="px-6 md:px-8 space-y-16 py-8 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)]">
           <About />
           <Skills />
           <Projects />
           <Experience />
           <Contact />
           <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
