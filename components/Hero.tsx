
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
            <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
                    Thomas Swando
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-teal-400 font-light mb-8">
                    Transforming Spaces & Crafting Digital Worlds
                </p>
                <div className="space-x-4">
                    <a href="#portfolio" className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        View My Work
                    </a>
                    <a href="#contact" className="bg-transparent border-2 border-slate-300 text-slate-300 font-semibold px-8 py-3 rounded-full hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 shadow-lg">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
