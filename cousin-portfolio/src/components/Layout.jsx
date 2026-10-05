import {Outlet} from 'react-router'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
    return (
        <div className="app-shell">
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
        
    )
}