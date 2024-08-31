import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
    const location = useLocation();
    const isChatbotRoute = location.pathname === '/chatbot';
    const isArticleRoute = location.pathname === '/article';
    const isAboutRoute = location.pathname === '/about';

    return (
        <>
            {!isChatbotRoute && !isArticleRoute && !isAboutRoute && <Nav />}
            <Outlet />
            {!isChatbotRoute && !isArticleRoute && !isAboutRoute && <Footer />}
            
        </>
    )
}

export default Layout