import React from 'react';
import { FiUser, FiBriefcase, FiCode, FiBookOpen, FiMail, FiGlobe } from 'react-icons/fi';
import { useLanguage, Language } from '../i18n';

interface NavigationProps {
    onNavigate: (sectionId: string) => void;
    isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, isMobile }) => {
    const { language, setLanguage, t } = useLanguage();
    
    const menuItems = [
        { id: 'header', label: t.nav.personalInfo, icon: FiUser },
        { id: 'experience', label: t.nav.experience, icon: FiBriefcase },
        { id: 'skills', label: t.nav.skills, icon: FiCode },
        { id: 'teaching', label: t.nav.teaching, icon: FiBookOpen },
        { id: 'contact', label: t.nav.contact, icon: FiMail },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW');
    };

    const baseClasses = isMobile
        ? "flex items-center space-x-3 w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
        : "flex items-center space-x-3 w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200";

    return (
        <div className={isMobile ? "space-y-1" : "space-y-2"}>
            {!isMobile && (
                <div className="mb-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                        <img 
                            src="/image/Avatar.webp" 
                            alt="Zhi-Xu Li" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.header.name}</h2>
                    <p className="text-gray-600">{t.header.chineseName}</p>
                    <p className="text-sm text-gray-500 mt-2">{t.header.title}</p>
                </div>
            )}
            
            <nav>
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => onNavigate(item.id)}
                                    className={baseClasses}
                                >
                                    <Icon size={isMobile ? 18 : 20} />
                                    <span className={isMobile ? "text-sm font-medium" : "font-medium"}>
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            
            {!isMobile && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center space-y-2">
                        <p className="text-sm text-gray-600">{t.contact.title}</p>
                        <div className="space-y-1 text-xs text-gray-500">
                            <p>📞 {t.contact.phone}</p>
                            <p>✉️ {t.contact.email}</p>
                        </div>
                        <a 
                            href="https://www.linkedin.com/in/zhixuli0406/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 hover:text-blue-800 text-xs underline"
                        >
                            {t.contact.linkedin}
                        </a>
                    </div>
                </div>
            )}
            
            {/* Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                    onClick={toggleLanguage}
                    className={`
                        w-full flex items-center justify-center space-x-2 px-4 py-2 
                        rounded-lg transition-colors duration-200
                        ${isMobile 
                            ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }
                    `}
                >
                    <FiGlobe size={16} />
                    <span className="text-sm font-medium">
                        {language === 'zh-TW' ? 'English' : '繁體中文'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navigation;

