import { education, credentials } from '../data/education.js'
import './Education.css'

function formatYears(start, end) {
  if (start && end) return start + ' – ' + end
  return end || start || ''
}

export default function Education() {
  return (
    <section>
      <h1 className="page-title">Education &amp; Credentials</h1>

      <h2 className="section-title">Education</h2>
      <ul className="edu-list">
        {education.map((item) => (
          <li key={item.id}>
            <article className="card">
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-school">
                {item.school}
                {item.location ? ' · ' + item.location : ''}
              </p>
              <p className="edu-years">{formatYears(item.start, item.end)}</p>
              {item.major && (
                <p className="edu-major">
                  <strong>Major:</strong> {item.major}
                </p>
              )}
              {item.details?.length > 0 && (
                <ul className="edu-details">
                  {item.details.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ul>

      {credentials.length > 0 && (
        <section className="credentials" aria-labelledby="credentials-title">
          <h2 id="credentials-title" className="section-title">
            Certifications
          </h2>
          <ul className="cred-grid">
            {credentials.map((item) => (
              <li key={item.id}>
                <article className="card cred-card">
                  <h3 className="cred-name">{item.name}</h3>
                  <p className="cred-meta">
                    {item.issuer}
                    {item.year ? ' · ' + item.year : ''}
                  </p>
                  {item.credentialId && (
                    <p className="cred-id">
                      Credential ID: <span>{item.credentialId}</span>
                    </p>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={'View credential: ' + item.name}
                    >
                      View credential
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}