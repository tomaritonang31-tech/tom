
import React, { useState } from 'react';
import { CloseIcon } from './icons';

interface LoginModalProps {
    onClose: () => void;
    onLogin: () => void;
}

type AuthMode = 'login' | 'signup';

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
    const [mode, setMode] = useState<AuthMode>('login');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-md relative animate-fade-in-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                    <CloseIcon className="w-6 h-6" />
                </button>

                <div className="p-8">
                    <div className="flex border-b border-slate-700 mb-6">
                        <button 
                            onClick={() => setMode('login')}
                            className={`w-1/2 py-3 text-lg font-semibold transition-colors duration-300 ${mode === 'login' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400'}`}
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => setMode('signup')}
                            className={`w-1/2 py-3 text-lg font-semibold transition-colors duration-300 ${mode === 'signup' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                        {mode === 'login' ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
                    </h2>
                    <p className="text-slate-400 text-center mb-6">
                        {mode === 'login' ? 'Login untuk melihat karya eksklusif.' : 'Daftar untuk mendapatkan akses penuh.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Alamat Email</label>
                            <input type="email" id="email" required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <input type="password" id="password" required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="••••••••" />
                        </div>
                         {mode === 'signup' && (
                             <div>
                                <label htmlFor="confirm-password"className="block text-sm font-medium text-slate-300 mb-2">Konfirmasi Password</label>
                                <input type="password" id="confirm-password" required className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="••••••••" />
                            </div>
                         )}

                        <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-3 mt-4 rounded-md hover:bg-teal-600 transition-colors duration-300">
                            {mode === 'login' ? 'Login' : 'Buat Akun'}
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default LoginModal;
