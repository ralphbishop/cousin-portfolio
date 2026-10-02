import {Routes, Route, useParams} from 'react-router'
import Layout from './components/Layout.jsx'


function Placeholder({title}) {
  return <h1>{title}</h1>
}

function ProjectPlaceholder() {
  const {slug} = useParams()
  return <h1>Project: {slug}</h1>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Placeholder title="Home" />} />
        <Route path="about" element={<Placeholder title="About" />} />
        <Route path="skills" element={<Placeholder title="Skills" />} />
        <Route path="experience" element={<Placeholder title="Experience" />} />
        <Route path="projects" element={<Placeholder title="Projects" />} />
        <Route path="projects/:slug" element={<ProjectPlaceholder />} />
        <Route path="education" element={<Placeholder title="Education" />} />
        <Route path="cv" element={<Placeholder title="CV" />} />
        <Route path="contact" element={<Placeholder title="Contact" />} />
      </Route>
    </Routes>
  )
}