
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Tentang Saya</h2>
                    <p className="text-teal-400 mt-2">A Glimpse Into My World of Design</p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                        <div className="relative w-full max-w-sm mx-auto">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg blur opacity-75"></div>
                            <img
                                src="https://picsum.photos/seed/thomas/400/500"
                                alt="Thomas Swando"
                                className="relative w-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 text-lg text-slate-300 leading-relaxed">
                        <p className="mb-4">
                            Selamat datang di portofolio digital saya. Saya Thomas Swando, seorang desainer interior dan animator yang bersemangat dengan hasrat untuk menciptakan ruang yang fungsional dan indah serta animasi yang memukau secara visual. Dengan pengalaman bertahun-tahun di industri ini, saya telah mengasah keterampilan saya dalam memadukan kreativitas dengan presisi teknis.
                        </p>
                        <p className="mb-4">
                            Filosofi desain saya berpusat pada penceritaan. Baik itu merancang interior rumah yang mencerminkan kepribadian penghuninya, atau membuat animasi yang menghidupkan narasi, saya percaya setiap proyek adalah kesempatan untuk menceritakan kisah yang unik.
                        </p>
                        <p>
                            Saya mahir menggunakan berbagai perangkat lunak standar industri untuk mewujudkan visi saya. Mari berkolaborasi dan menciptakan sesuatu yang luar biasa bersama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
