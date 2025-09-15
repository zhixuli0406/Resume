import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../i18n';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    duration: string;
    location?: string;
    responsibilities: string[];
    current?: boolean;
}

const Experience: React.FC = () => {
    const { t } = useLanguage();
    
    const experiences: ExperienceItem[] = [
        {
            title: t.experience.jobs.backendFlutter.title,
            company: t.experience.jobs.backendFlutter.company,
            period: t.experience.jobs.backendFlutter.period,
            duration: t.experience.jobs.backendFlutter.duration,
            current: true,
            responsibilities: t.experience.jobs.backendFlutter.responsibilities
        },
        {
            title: t.experience.jobs.frontend.title,
            company: t.experience.jobs.frontend.company,
            period: t.experience.jobs.frontend.period,
            duration: t.experience.jobs.frontend.duration,
            responsibilities: t.experience.jobs.frontend.responsibilities
        },
        {
            title: t.experience.jobs.fullstack.title,
            company: t.experience.jobs.fullstack.company,
            period: t.experience.jobs.fullstack.period,
            duration: t.experience.jobs.fullstack.duration,
            responsibilities: t.experience.jobs.fullstack.responsibilities
        },
        {
            title: t.experience.jobs.mis.title,
            company: t.experience.jobs.mis.company,
            period: t.experience.jobs.mis.period,
            duration: t.experience.jobs.mis.duration,
            responsibilities: t.experience.jobs.mis.responsibilities
        }
    ];

    return (
        <section id="experience" className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                        <FiBriefcase className="mr-3 text-blue-600" size={32} />
                        {t.experience.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                            )}
                            
                            <div className="flex space-x-4">
                                {/* Timeline Dot */}
                                <div className={`
                                    flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                                    ${exp.current 
                                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg' 
                                        : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg'
                                    }
                                `}>
                                    <FiBriefcase className="text-white" size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-2">
                                                {exp.company}
                                            </h4>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center space-x-1">
                                                    <FiCalendar size={14} />
                                                    <span>{exp.period}</span>
                                                </div>
                                                <div className={`
                                                    px-3 py-1 rounded-full text-xs font-medium
                                                    ${exp.current 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-blue-100 text-blue-800'
                                                    }
                                                `}>
                                                    {exp.duration}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-3">{t.experience.responsibilities}</h5>
                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((responsibility, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 text-sm leading-relaxed">
                                                            {responsibility}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

