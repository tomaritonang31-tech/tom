
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    
    const handleLogin = useCallback(() => {
        setIsAuthenticated(true);
        closeModal();
    }, [closeModal]);

    const handleLogout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-slate-900 min-h-screen">
            <Header
                isAuthenticated={isAuthenticated}
                onLoginClick={openModal}
                onLogoutClick={handleLogout}
                activeSection={activeSection}
            />
            <main>
                <Hero />
                <About />
                <Portfolio 
                    isAuthenticated={isAuthenticated} 
                    onLoginRequest={openModal} 
                />
                <Contact />
            </main>
            <Footer />
            {isModalOpen && <LoginModal onClose={closeModal} onLogin={handleLogin} />}
        </div>
    );
};

export default App;
