import { useEffect } from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'; 
import Article from './components/Article';
import HindiArticle from './components/HindiArticle.jsx'
import GoogleTranslate from './components/GoogleTranslate'

function Layout() {
    const location = useLocation();
    const isChatbotRoute = location.pathname === '/chatbot';

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>

            {!isChatbotRoute && <Nav />}
            {!isChatbotRoute && (
                <>
                    <section id="home"><Home /></section>
                    <section id="article"><Article /></section>
                    <section id="hindi"><HindiArticle /></section>
                    <section id="about"><About /></section>
                </>
            )}
            <Outlet />
            {!isChatbotRoute && <Footer />}
            <GoogleTranslate />
        </>
    )
}

export default Layout