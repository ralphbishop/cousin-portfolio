import { Routes, Route, useParams } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'

// temporary pages; we'll replace each one with a real page
function Placeholder({ title }) {
  return <h1>{title}</h1>
}

function ProjectPlaceholder() {
  const { slug } = useParams()
  return <h1>Project: {slug}</h1>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Placeholder title="Projects" />} />
        <Route path="projects/:slug" element={<ProjectPlaceholder />} />
        <Route path="education" element={<Placeholder title="Education" />} />
        <Route path="cv" element={<Placeholder title="CV" />} />
        <Route path="contact" element={<Placeholder title="Contact" />} />
        <Route path="*" element={<Placeholder title="Page not found" />} />
      </Route>
    </Routes>
  )
}
