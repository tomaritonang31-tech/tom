
import React, { useState, useMemo } from 'react';
import type { PortfolioItem } from '../types';
import { PlayIcon } from './icons';

const portfolioData: PortfolioItem[] = [
    { id: 1, type: 'image', src: 'https://picsum.photos/seed/interior1/500/700', title: 'Modern Living Room', category: 'Interior Design', description: 'A cozy and modern living space.' },
    { id: 2, type: 'image', src: 'https://picsum.photos/seed/interior2/500/700', title: 'Minimalist Kitchen', category: 'Interior Design', description: 'Clean lines and functional design.' },
    { id: 3, type: 'video', src: 'https://picsum.photos/seed/anim1/500/700', title: 'Character Walk Cycle', category: 'Animation', description: 'A fluid 3D character animation.' },
    { id: 4, type: 'image', src: 'https://picsum.photos/seed/interior3/500/700', title: 'Serene Bedroom', category: 'Interior Design', description: 'A peaceful retreat for relaxation.' },
    { id: 5, type: 'image', src: 'https://picsum.photos/seed/interior4/500/700', title: 'Corporate Office Space', category: 'Interior Design', description: 'Inspiring productivity and collaboration.' },
    { id: 6, type: 'image', src: 'https://picsum.photos/seed/interior5/500/700', title: 'Luxury Bathroom', category: 'Interior Design', description: 'Elegance meets functionality.' },
    { id: 7, type: 'image', src: 'https://picsum.photos/seed/interior6/500/700', title: 'Bohemian Chic Cafe', category: 'Interior Design', description: 'A warm and inviting atmosphere.' },
    { id: 8, type: 'video', src: 'https://picsum.photos/seed/anim2/500/700', title: 'Logo Motion Graphics', category: 'Animation', description: 'Dynamic and engaging brand animation.' },
    { id: 9, type: 'image', src: 'https://picsum.photos/seed/interior7/500/700', title: 'Kids Playroom', category: 'Interior Design', description: 'A fun and vibrant space for creativity.' },
    { id: 10, type: 'image', src: 'https://picsum.photos/seed/interior8/500/700', title: 'Rustic Dining Area', category: 'Interior Design', description: 'Combining natural elements for a cozy feel.' },
    { id: 11, type: 'image', src: 'https://picsum.photos/seed/interior9/500/700', title: 'Home Theater', category: 'Interior Design', description: 'An immersive entertainment experience.' },
    { id: 12, type: 'image', src: 'https://picsum.photos/seed/interior10/500/700', title: 'Modern Staircase', category: 'Interior Design', description: 'A statement piece of architectural design.' },
    { id: 13, type: 'image', src: 'https://picsum.photos/seed/interior11/500/700', title: 'Elegant Foyer', category: 'Interior Design', description: 'Creating a grand first impression.' },
    { id: 14, type: 'image', src: 'https://picsum.photos/seed/interior12/500/700', title: 'Outdoor Patio', category: 'Interior Design', description: 'Seamlessly blending indoor and outdoor living.' },
];

const categories = ['All', 'Interior Design', 'Animation'];

interface PortfolioProps {
    isAuthenticated: boolean;
    onLoginRequest: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ isAuthenticated, onLoginRequest }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredPortfolio = useMemo(() => {
        if (activeFilter === 'All') {
            return portfolioData;
        }
        return portfolioData.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    if (!isAuthenticated) {
        return (
            <section id="portfolio" className="py-20 bg-slate-900 relative">
                 <div className="absolute inset-0 bg-cover bg-center filter blur-md" style={{backgroundImage: "url('https://picsum.photos/seed/bg-portfolio/1920/1080')"}}></div>
                 <div className="absolute inset-0 bg-slate-900 bg-opacity-80"></div>
                 <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white">Portofolio</h2>
                    <p className="text-teal-400 mt-2">Karya-karya Eksklusif Saya</p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 mb-8"></div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-white mb-4">Akses Terbatas</h3>
                        <p className="text-slate-300 mb-6">Untuk melihat karya-karya saya, silakan buat akun atau login. Ini membantu menjaga eksklusivitas dan keamanan konten saya.</p>
                        <button onClick={onLoginRequest} className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                            Login untuk Melihat
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="portfolio" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Portofolio</h2>
                    <p className="text-teal-400 mt-2">My Curated Collection of Works</p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                </div>

                <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm md:px-6 md:py-2 md:text-base font-medium rounded-full transition-colors duration-300 ${
                                activeFilter === category
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredPortfolio.map(item => (
                        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img src={item.src} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
                                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-teal-300 text-sm">{item.category}</p>
                                </div>
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <PlayIcon className="w-16 h-16 text-white opacity-80" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
