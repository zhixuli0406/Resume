import React, { useState } from 'react';
import { FiDownload, FiFileText, FiLoader } from 'react-icons/fi';
import { generateSimplePDF } from '../utils/simplePDFGenerator';
import { useLanguage } from '../i18n';

const PDFDownloadButton: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { language } = useLanguage();

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      
      const filename = language === 'zh-TW' 
        ? 'Zhi-Xu_Li_Resume_繁體中文.pdf'
        : 'Zhi-Xu_Li_Resume_English.pdf';
      
      await generateSimplePDF('pdf-resume', {
        filename,
        quality: 0.8
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF 生成失敗，請稍後再試');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleDownloadPDF}
        disabled={isGenerating}
        className={`
          flex items-center space-x-2 px-6 py-3 rounded-full shadow-lg
          transition-all duration-300 transform hover:scale-105
          ${isGenerating 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          }
          text-white font-semibold
        `}
      >
        {isGenerating ? (
          <>
            <FiLoader className="animate-spin" size={20} />
            <span>生成中...</span>
          </>
        ) : (
          <>
            <FiDownload size={20} />
            <span>下載 PDF</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PDFDownloadButton;
