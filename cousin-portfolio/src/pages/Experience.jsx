import { experience } from '../data/experience.js'
import './Experience.css'

export default function Experience() {
  return (
    <section>
      <h1 className="page-title">Experience</h1>

      <ol className="timeline">
        {experience.map((item) => (
          <li className="timeline-item" key={item.id}>
            <p className="timeline-dates">
              {item.start} – {item.end ?? 'Present'}
            </p>

            <article className="card timeline-card">
              <h2 className="timeline-position">{item.position}</h2>
              <p className="timeline-org">
                {item.organization}
                {item.location ? ' · ' + item.location : ''}
              </p>
              {item.type && <span className="tag">{item.type}</span>}

              {item.responsibilities?.length > 0 && (
                <>
                  <h3>Responsibilities</h3>
                  <ul>
                    {item.responsibilities.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.accomplishments?.length > 0 && (
                <>
                  <h3>Major accomplishments</h3>
                  <ul>
                    {item.accomplishments.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}