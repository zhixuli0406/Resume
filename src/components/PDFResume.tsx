import React from 'react';
import { useLanguage } from '../i18n';

const PDFResume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div 
      id="pdf-resume" 
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20px',
        backgroundColor: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px',
        lineHeight: '1.4',
        color: '#000000'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #ccc', paddingBottom: '15px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#000' }}>
          {t.header.name}
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '8px', color: '#666' }}>
          {t.header.chineseName}
        </p>
        <p style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#2563eb' }}>
          {t.header.title}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', color: '#666' }}>
          <span>📞 {t.contact.phone}</span>
          <span>✉️ {t.contact.email}</span>
          <span>🔗 LinkedIn: zhixuli0406</span>
        </div>
      </div>

      {/* Professional Profile */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          {t.header.professionalProfile}
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          {t.header.profileDescription}
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
          {t.experience.title}
        </h2>
        
        <div className="space-y-6">
          {/* Backend/Flutter Engineer */}
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                {t.experience.jobs.backendFlutter.title}
              </h3>
              <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                {t.experience.jobs.backendFlutter.duration}
              </span>
            </div>
            <p className="text-blue-600 font-semibold mb-2">
              {t.experience.jobs.backendFlutter.company}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {t.experience.jobs.backendFlutter.period}
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.experience.jobs.backendFlutter.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Engineer */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                {t.experience.jobs.frontend.title}
              </h3>
              <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded">
                {t.experience.jobs.frontend.duration}
              </span>
            </div>
            <p className="text-blue-600 font-semibold mb-2">
              {t.experience.jobs.frontend.company}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {t.experience.jobs.frontend.period}
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.experience.jobs.frontend.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Full-Stack Engineer */}
          <div className="border-l-4 border-purple-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                {t.experience.jobs.fullstack.title}
              </h3>
              <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-2 py-1 rounded">
                {t.experience.jobs.fullstack.duration}
              </span>
            </div>
            <p className="text-blue-600 font-semibold mb-2">
              {t.experience.jobs.fullstack.company}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {t.experience.jobs.fullstack.period}
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.experience.jobs.fullstack.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* MIS Engineer */}
          <div className="border-l-4 border-orange-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                {t.experience.jobs.mis.title}
              </h3>
              <span className="text-sm text-orange-600 font-semibold bg-orange-100 px-2 py-1 rounded">
                {t.experience.jobs.mis.duration}
              </span>
            </div>
            <p className="text-blue-600 font-semibold mb-2">
              {t.experience.jobs.mis.company}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {t.experience.jobs.mis.period}
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.experience.jobs.mis.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
          {t.skills.title}
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Network & Information Security */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-red-600">
              {t.skills.categories.networkSecurity.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.networkSecurity.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Development */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-blue-600">
              {t.skills.categories.frontend.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.frontend.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Development */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-green-600">
              {t.skills.categories.backend.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.backend.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-purple-600">
              {t.skills.categories.mobile.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.mobile.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps Tools */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-orange-600">
              {t.skills.categories.devops.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.devops.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* System Analysis */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-teal-600">
              {t.skills.categories.systemAnalysis.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {t.skills.categories.systemAnalysis.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Teaching Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
          {t.teaching.title}
        </h2>
        
        <div className="space-y-6">
          {/* Guest Lecturer */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t.teaching.guestLecturer.title}
            </h3>
            <p className="text-blue-600 font-semibold mb-2">
              {t.teaching.guestLecturer.institution}
            </p>
            <p className="text-sm text-gray-700 mb-3">
              {t.teaching.guestLecturer.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.teaching.guestLecturer.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Corporate Training */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t.teaching.corporateTraining.title}
            </h3>
            <p className="text-green-600 font-semibold mb-2">
              {t.teaching.corporateTraining.company}
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              {t.teaching.corporateTraining.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {t.teaching.corporateTraining.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personal Philosophy */}
      <div className="text-center border-t-2 border-gray-200 pt-6">
        <blockquote className="text-lg italic text-gray-600">
          "{t.header.philosophyQuote}"
        </blockquote>
        <footer className="text-sm text-gray-500 mt-2">
          {t.header.philosophyAuthor}
        </footer>
      </div>
    </div>
  );
};

export default PDFResume;
