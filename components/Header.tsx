
import React, { useState } from 'react';

interface HeaderProps {
    isAuthenticated: boolean;
    onLoginClick: () => void;
    onLogoutClick: () => void;
    activeSection: string;
}

const navLinks = [
    { id: 'home', name: 'Beranda' },
    { id: 'about', name: 'Tentang' },
    { id: 'portfolio', name: 'Portofolio' },
    { id: 'contact', name: 'Kontak' },
];

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLoginClick, onLogoutClick, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const baseLinkClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300";
    const activeLinkClasses = "bg-teal-500 text-white";
    const inactiveLinkClasses = "text-slate-300 hover:bg-slate-700 hover:text-white";

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-bold text-white">
                            Thomas <span className="text-teal-400">Swando</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.id} 
                                    href={`#${link.id}`} 
                                    className={`${baseLinkClasses} ${activeSection === link.id ? activeLinkClasses : inactiveLinkClasses}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {isAuthenticated ? (
                            <button onClick={onLogoutClick} className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-300">
                                Logout
                            </button>
                        ) : (
                            <button onClick={onLoginClick} className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors duration-300">
                                Login / Sign Up
                            </button>
                        )}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <a 
                                key={link.id} 
                                href={`#${link.id}`} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block ${baseLinkClasses} ${activeSection === link.id ? activeLinkClasses : inactiveLinkClasses}`}
                            >
                                {link.name}
                            </a>
                        ))}
                         <div className="pt-4 pb-3 border-t border-slate-700">
                             {isAuthenticated ? (
                                <button onClick={() => { onLogoutClick(); setIsMenuOpen(false); }} className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors duration-300">
                                    Logout
                                </button>
                            ) : (
                                <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="w-full text-left bg-teal-500 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition-colors duration-300">
                                    Login / Sign Up
                                </button>
                            )}
                         </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
