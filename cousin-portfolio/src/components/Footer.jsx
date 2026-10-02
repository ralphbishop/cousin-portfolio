import {Link} from 'react-router'
import  {navItems} from '../data/navItems.js'
import {profile} from '../data/profile.js'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-inner">
            <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-title">{profile.title}</p>

            <ul className="footer-contact">
                {profile.email && (
                    <li>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </li>
                )}
                {profile.linkedIn && (
                    <li>
                        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                )}
                {profile.github && (
                    <li>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                )}
            </ul>
            </div>

            <nav aria-label="Footer Navigation">
                <ul className="footer-links">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            </div>

            <div className="container">
                <p className="footer-copy">
                    &copy; {year} {profile.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}