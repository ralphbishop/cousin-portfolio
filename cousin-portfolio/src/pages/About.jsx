import { profile } from '../data/profile.js'
import './About.css'

export default function About() {
  const specializations = profile.specializations ?? []
  const bio = profile.bio ?? []
  const phoneLink = (profile.phone ?? '').replace(/[^\d+]/g, '')

  // Only facts that have a value are shown.
  const facts = [
    { label: 'Full name', value: profile.name },
    { label: 'Professional title', value: profile.title },
    { label: 'Location', value: profile.location },
    { label: 'Email', value: profile.email, href: 'mailto:'+ profile.email },
    { label: 'Phone', value: profile.phone, href: 'tel:' + phoneLink },
    { label: 'Education', value: profile.education },
    { label: 'Occupation', value: profile.occupation },
    { label: 'Experience', value: profile.yearsExperience },
  ].filter((fact) => fact.value)

  return (
    <section>
      <h1 className="page-title">About me</h1>

      <div className="about-layout">
        {bio.length > 0 && (
          <div className="about-bio">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <section className="card about-facts" aria-labelledby="facts-title">
          <h2 id="facts-title">Basic information</h2>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {specializations.length > 0 && (
        <section className="about-specializations" aria-labelledby="spec-title">
          <h2 id="spec-title" className="section-title">
            Areas of specialization
          </h2>
          <ul className="tags">
            {specializations.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}