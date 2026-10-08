import { Link } from 'react-router'
import { profile } from '../data/profile.js'
import './Home.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-photo">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="400"
              height="400"
            />
          ) : (
            <div className="hero-initials" aria-hidden="true">
              {getInitials(profile.name)}
            </div>
          )}
        </div>

        <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View My Projects
            </Link>
            {profile.cvUrl && (
              <a className="btn" href={profile.cvUrl} download>
                Download CV
              </a>
            )}
            <Link className="btn" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}