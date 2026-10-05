import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navItems } from '../data/navItems.js'
import { profile } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          {profile.name}
        </Link>

        <nav
          id="main-menu"
          className={`main-nav${open ? ' open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}