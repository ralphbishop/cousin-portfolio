import {Outlet} from 'react-router'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout() {
    return (
        <div className="app-shell">
            <ScrollToTop />
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
        
    )
}