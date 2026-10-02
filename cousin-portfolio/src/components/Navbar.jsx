import {NavLink} from 'react-router'

const navItems = [
    {label: 'Home', to: '/'},
    {label: 'About', to: '/about'},
    {label: 'Skills', to: '/skills'},
    {label: 'Experience', to: '/experience'},
    {label: 'Projects', to: '/projects'},
    {label: 'Education', to: '/education'},
    {label: 'CV', to: '/cv'},
    {label: 'Contact', to: '/contact'},
]

export default function Navbar() {
    return (
        <header>
            <nav aria-label="Main Navigation">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} end={item.to === '/'}></NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}