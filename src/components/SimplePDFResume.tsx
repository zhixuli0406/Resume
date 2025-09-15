import React from 'react';
import { useLanguage } from '../i18n';

const SimplePDFResume: React.FC = () => {
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
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#000', borderLeft: '4px solid #2563eb', paddingLeft: '10px' }}>
          {t.header.professionalProfile}
        </h2>
        <p style={{ color: '#333', lineHeight: '1.6' }}>
          {t.header.profileDescription}
        </p>
      </div>

      {/* Professional Experience */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#000', borderLeft: '4px solid #2563eb', paddingLeft: '10px' }}>
          {t.experience.title}
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <div style={{ borderLeft: '4px solid #16a34a', paddingLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>
                {t.experience.jobs.backendFlutter.title}
              </h3>
              <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: '600', backgroundColor: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
                {t.experience.jobs.backendFlutter.duration}
              </span>
            </div>
            <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '5px' }}>
              {t.experience.jobs.backendFlutter.company}
            </p>
            <p style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>
              {t.experience.jobs.backendFlutter.period}
            </p>
            <ul style={{ fontSize: '11px', color: '#333', paddingLeft: '15px' }}>
              {t.experience.jobs.backendFlutter.responsibilities.map((responsibility, index) => (
                <li key={index} style={{ marginBottom: '3px' }}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>
                {t.experience.jobs.frontend.title}
              </h3>
              <span style={{ fontSize: '10px', color: '#2563eb', fontWeight: '600', backgroundColor: '#dbeafe', padding: '2px 6px', borderRadius: '4px' }}>
                {t.experience.jobs.frontend.duration}
              </span>
            </div>
            <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '5px' }}>
              {t.experience.jobs.frontend.company}
            </p>
            <p style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>
              {t.experience.jobs.frontend.period}
            </p>
            <ul style={{ fontSize: '11px', color: '#333', paddingLeft: '15px' }}>
              {t.experience.jobs.frontend.responsibilities.map((responsibility, index) => (
                <li key={index} style={{ marginBottom: '3px' }}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ borderLeft: '4px solid #9333ea', paddingLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>
                {t.experience.jobs.fullstack.title}
              </h3>
              <span style={{ fontSize: '10px', color: '#9333ea', fontWeight: '600', backgroundColor: '#f3e8ff', padding: '2px 6px', borderRadius: '4px' }}>
                {t.experience.jobs.fullstack.duration}
              </span>
            </div>
            <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '5px' }}>
              {t.experience.jobs.fullstack.company}
            </p>
            <p style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>
              {t.experience.jobs.fullstack.period}
            </p>
            <ul style={{ fontSize: '11px', color: '#333', paddingLeft: '15px' }}>
              {t.experience.jobs.fullstack.responsibilities.map((responsibility, index) => (
                <li key={index} style={{ marginBottom: '3px' }}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ borderLeft: '4px solid #ea580c', paddingLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>
                {t.experience.jobs.mis.title}
              </h3>
              <span style={{ fontSize: '10px', color: '#ea580c', fontWeight: '600', backgroundColor: '#fed7aa', padding: '2px 6px', borderRadius: '4px' }}>
                {t.experience.jobs.mis.duration}
              </span>
            </div>
            <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '5px' }}>
              {t.experience.jobs.mis.company}
            </p>
            <p style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>
              {t.experience.jobs.mis.period}
            </p>
            <ul style={{ fontSize: '11px', color: '#333', paddingLeft: '15px' }}>
              {t.experience.jobs.mis.responsibilities.map((responsibility, index) => (
                <li key={index} style={{ marginBottom: '3px' }}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#000', borderLeft: '4px solid #2563eb', paddingLeft: '10px' }}>
          {t.skills.title}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Network & Information Security */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#dc2626' }}>
              {t.skills.categories.networkSecurity.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.networkSecurity.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Development */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#2563eb' }}>
              {t.skills.categories.frontend.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.frontend.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Development */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#16a34a' }}>
              {t.skills.categories.backend.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.backend.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Development */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#9333ea' }}>
              {t.skills.categories.mobile.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.mobile.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps Tools */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#ea580c' }}>
              {t.skills.categories.devops.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.devops.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* System Analysis */}
          <div style={{ backgroundColor: '#f9fafb', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#0d9488' }}>
              {t.skills.categories.systemAnalysis.title}
            </h3>
            <ul style={{ fontSize: '10px', color: '#333', paddingLeft: '10px' }}>
              {t.skills.categories.systemAnalysis.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Teaching Experience */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#000', borderLeft: '4px solid #2563eb', paddingLeft: '10px' }}>
          {t.teaching.title}
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#000' }}>
              {t.teaching.guestLecturer.title}
            </h3>
            <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '5px' }}>
              {t.teaching.guestLecturer.institution}
            </p>
            <p style={{ fontSize: '11px', color: '#333', marginBottom: '8px' }}>
              {t.teaching.guestLecturer.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {t.teaching.guestLecturer.tags.map((tag, index) => (
                <span key={index} style={{ fontSize: '9px', backgroundColor: '#dbeafe', color: '#1e40af', padding: '2px 6px', borderRadius: '3px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#000' }}>
              {t.teaching.corporateTraining.title}
            </h3>
            <p style={{ color: '#16a34a', fontWeight: '600', marginBottom: '5px' }}>
              {t.teaching.corporateTraining.company}
            </p>
            <ul style={{ fontSize: '11px', color: '#333', paddingLeft: '15px', marginBottom: '8px' }}>
              {t.teaching.corporateTraining.achievements.map((achievement, index) => (
                <li key={index} style={{ marginBottom: '2px' }}>
                  {achievement}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {t.teaching.corporateTraining.tags.map((tag, index) => (
                <span key={index} style={{ fontSize: '9px', backgroundColor: '#dcfce7', color: '#166534', padding: '2px 6px', borderRadius: '3px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personal Philosophy */}
      <div style={{ textAlign: 'center', borderTop: '2px solid #ccc', paddingTop: '15px' }}>
        <blockquote style={{ fontSize: '14px', fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
          "{t.header.philosophyQuote}"
        </blockquote>
        <footer style={{ fontSize: '10px', color: '#999' }}>
          {t.header.philosophyAuthor}
        </footer>
      </div>
    </div>
  );
};

export default SimplePDFResume;
