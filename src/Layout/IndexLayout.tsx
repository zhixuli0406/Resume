import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LanguageProvider } from "../i18n";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Teaching from "../components/Teaching";
import Navigation from "../components/Navigation";
import SimplePDFResume from "../components/SimplePDFResume";
import PDFDownloadButton from "../components/PDFDownloadButton";

const IndexLayout = () => {
    const [isLoading, setLoading] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <LanguageProvider>
            <div className="min-h-screen bg-gray-50">
                {/* Mobile Navigation Bar */}
                <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                    <div className="flex items-center justify-between px-4 py-3">
                        <h1 className="text-xl font-bold text-gray-800">Zhi-Xu Li</h1>
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="bg-white border-t border-gray-200 px-4 py-2">
                            <Navigation onNavigate={scrollToSection} isMobile={true} />
                        </div>
                    )}
                </nav>

                {/* Desktop Sidebar */}
                <aside className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40">
                    <div className="p-6">
                        <Navigation onNavigate={scrollToSection} isMobile={false} />
                    </div>
                </aside>

                {/* Main Content */}
                <main 
                    className={`
                        transition-all duration-300 ease-in-out
                        ${isLoading ? 'animate-fade-in' : 'opacity-0'}
                        pt-16 lg:pt-0 lg:ml-80
                    `}
                >
                    <div className="section-container py-8 lg:py-12">
                        <Header />
                        <Experience />
                        <Skills />
                        <Teaching />
                    </div>
                </main>

                {/* PDF Component - Initially hidden */}
                <div 
                    id="pdf-container" 
                    style={{ 
                        position: 'absolute', 
                        left: '-9999px', 
                        top: '0',
                        visibility: 'hidden',
                        width: '210mm',
                        backgroundColor: '#ffffff'
                    }}
                >
                    <SimplePDFResume />
                </div>

                {/* PDF Download Button */}
                <PDFDownloadButton />
            </div>
        </LanguageProvider>
    );
};

export default IndexLayout;