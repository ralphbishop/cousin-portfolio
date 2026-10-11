import {projects} from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
    return (
        <section>
            <h1 className="page-title">Projects</h1>

            <ul className="project-grid">
                {projects.map((project, index) => (
                    <li key={project.id} style={{'--i': Math.min(index, 8) }}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
}