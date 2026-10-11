import { Link } from 'react-router'
import './ProjectCard.css'

const MAX_TAGS = 4

export default function ProjectCard({ project }) {
  const detailPath = '/projects/' + project.id
  const shownTech = project.technologies.slice(0, MAX_TAGS)
  const hiddenCount = project.technologies.length - shownTech.length

  return (
    <article className="card project-card">
      {/* Clicking the artwork opens the detail page. Keyboard users use the
          "View Project" button, so this link is skipped when pressing Tab. */}
      <Link className="project-media" to={detailPath} tabIndex={-1}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt || project.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="project-placeholder">{project.category}</span>
        )}
      </Link>

      <div className="project-body">
        <p className="project-meta">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </p>

        <h2 className="project-title">{project.name}</h2>
        <p className="project-desc">{project.description}</p>

        <ul className="tags" aria-label="Technologies used">
          {shownTech.map((tech) => (
            <li className="tag" key={tech}>
              {tech}
            </li>
          ))}
          {hiddenCount > 0 && <li className="tag">+{hiddenCount}</li>}
        </ul>

        <dl className="project-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>

        <div className="project-actions">
          <Link
            className="btn btn-primary"
            to={detailPath}
            aria-label={'View project: ' + project.name}
          >
            View Project
          </Link>
          {project.githubUrl && (
            <a
              className="btn"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.name + ' source code on GitHub'}
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              className="btn"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.name + ' demo'}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}