
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from './icons';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        console.log('Form submitted:', formState);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    };

    return (
        <section id="contact" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Kontak</h2>
                    <p className="text-teal-400 mt-2">Let's Create Something Amazing Together</p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <MailIcon className="w-8 h-8 text-teal-400"/>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:thomas.swando@example.com" className="text-slate-300 hover:text-teal-400 transition-colors">thomas.swando@example.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <PhoneIcon className="w-8 h-8 text-teal-400"/>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <a href="tel:+6281234567890" className="text-slate-300 hover:text-teal-400 transition-colors">+62 812 3456 7890</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <LocationIcon className="w-8 h-8 text-teal-400"/>
                                <div>
                                    <h4 className="font-semibold text-white">Lokasi</h4>
                                    <p className="text-slate-300">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-slate-900 p-8 rounded-lg shadow-lg">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <h3 className="text-2xl font-semibold text-teal-400">Terima Kasih!</h3>
                                    <p className="text-slate-300 mt-2">Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-slate-300 mb-2">Nama</label>
                                        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-slate-300 mb-2">Pesan</label>
                                        <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-colors duration-300">
                                        Kirim Pesan
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
