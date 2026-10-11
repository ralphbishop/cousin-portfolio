import { Link, useParams } from 'react-router'
import { projects } from '../data/projects.js'
import ZoomableImage from '../components/ZoomableImage.jsx'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((item) => item.id === slug)

  if (index === -1) {
    return (
      <section>
        <h1 className="page-title">Project not found</h1>
        <p>We could not find that project. It may have been renamed or removed.</p>
        <Link className="btn" to="/projects">
          Back to all projects
        </Link>
      </section>
    )
  }

  const project = projects[index]
  const previous = projects[index - 1] // undefined for the first project
  const next = projects[index + 1] // undefined for the last project

  // Only links that actually exist are shown.
  const links = [
    { label: 'Live website', href: project.projectUrl },
    { label: 'GitHub', href: project.githubUrl },
    { label: 'Documentation', href: project.docsUrl },
    { label: 'Demo', href: project.demoUrl },
  ].filter((link) => link.href)

  const meta = [project.category, project.type, project.year, project.status]
    .filter(Boolean)
    .join(' · ')

  return (
    <article>
      <Link className="back-link" to="/projects">
        ← All projects
      </Link>

      <h1 className="page-title detail-title">{project.name}</h1>
      <p className="detail-meta">{meta}</p>

      <div className={'detail-layout' + (project.image ? '' : ' no-media')}>
        {project.image && (
          <div className="detail-media">
            <ZoomableImage
              src={project.image}
              alt={project.imageAlt || project.name}
              lazy={false}
            />
          </div>
        )}

        <div className="detail-info">
          {project.description && <p className="detail-lead">{project.description}</p>}

          {project.overview && (
            <section className="detail-section">
              <h2 className="section-title">Overview</h2>
              <p>{project.overview}</p>
            </section>
          )}

          {project.problem && (
            <section className="detail-section">
              <h2 className="section-title">Problem / challenge</h2>
              <p>{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section className="detail-section">
              <h2 className="section-title">Solution / approach</h2>
              <p>{project.solution}</p>
            </section>
          )}

          {project.features?.length > 0 && (
            <section className="detail-section">
              <h2 className="section-title">Features</h2>
              <ul className="detail-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.technologies?.length > 0 && (
            <section className="detail-section">
              <h2 className="section-title">Technologies / tools used</h2>
              <ul className="tags">
                {project.technologies.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="detail-section">
            <h2 className="section-title">Creator's role</h2>
            <p>{project.role}</p>
          </section>

          {links.length > 0 && (
            <section className="detail-section">
              <h2 className="section-title">Links</h2>
              <div className="detail-links">
                {links.map((link) => (
                  <a
                    key={link.label}
                    className="btn"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {project.screenshots?.length > 0 && (
        <section className="detail-shots">
          <h2 className="section-title">Screenshots</h2>
          <ul className="shots-grid">
            {project.screenshots.map((shot) => (
              <li key={shot.src}>
                <ZoomableImage src={shot.src} alt={shot.alt || project.name} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="detail-pager" aria-label="More projects">
        {previous ? (
          <Link to={'/projects/' + previous.id}>← {previous.name}</Link>
        ) : (
          <span />
        )}
        {next ? <Link to={'/projects/' + next.id}>{next.name} →</Link> : <span />}
      </nav>
    </article>
  )
}