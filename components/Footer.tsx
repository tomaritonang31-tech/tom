
import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-white">Thomas <span className="text-teal-400">Swando</span></h3>
                    <p className="text-slate-400 mt-2 max-w-md">
                        Desainer Interior & Animator yang berdedikasi untuk menciptakan pengalaman yang tak terlupakan melalui desain.
                    </p>
                    <div className="flex space-x-6 mt-6">
                        <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <TwitterIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <LinkedinIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Thomas Swando. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
