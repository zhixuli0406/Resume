import React from 'react';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '../i18n';

const Header: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section id="header" className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Hero Background */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative h-full flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                {t.header.name}
                            </h1>
                            <p className="text-xl md:text-2xl font-light opacity-90">
                                {t.header.chineseName}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="relative px-6 md:px-8 pb-8">
                    {/* Avatar */}
                    <div className="flex justify-center -mt-16 mb-6">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                            <img 
                                src="/image/Avatar.webp" 
                                alt="Zhi-Xu Li" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Title and Contact Info */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {t.header.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            {t.header.subtitle}
                        </p>
                        
                        {/* Contact Information */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
                            <a 
                                href={`tel:${t.contact.phone}`} 
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <FiPhone size={16} />
                                <span>{t.contact.phone}</span>
                            </a>
                            <a 
                                href={`mailto:${t.contact.email}`} 
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <FiMail size={16} />
                                <span>{t.contact.email}</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/zhixuli0406/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <FiLinkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Professional Profile */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <div className="w-1 h-6 bg-blue-600 rounded-full mr-3"></div>
                            {t.header.professionalProfile}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {t.header.profileDescription}
                        </p>
                    </div>

                    {/* Philosophy */}
                    <div className="mt-6 text-center">
                        <blockquote className="text-lg italic text-gray-600 border-l-4 border-blue-500 pl-4">
                            "{t.header.philosophyQuote}"
                            <footer className="text-sm text-gray-500 mt-2">
                                {t.header.philosophyAuthor}
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
