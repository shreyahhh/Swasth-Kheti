import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
    const location = useLocation();
    const isChatbotRoute = location.pathname === '/chatbot';

    return (
        <>
            {!isChatbotRoute && <Nav />}
            <Outlet />
            {!isChatbotRoute && <Footer />}
        </>
    )
}

export default Layout