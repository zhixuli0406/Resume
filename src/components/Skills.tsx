import React from 'react';
import { FiCode, FiShield, FiServer, FiSmartphone, FiSettings, FiTarget } from 'react-icons/fi';
import { useLanguage } from '../i18n';

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    color: string;
    skills: string[];
}

const Skills: React.FC = () => {
    const { t } = useLanguage();
    
    const skillCategories: SkillCategory[] = [
        {
            title: t.skills.categories.networkSecurity.title,
            icon: FiShield,
            color: "from-red-500 to-pink-600",
            skills: t.skills.categories.networkSecurity.skills
        },
        {
            title: t.skills.categories.frontend.title,
            icon: FiCode,
            color: "from-blue-500 to-cyan-600",
            skills: t.skills.categories.frontend.skills
        },
        {
            title: t.skills.categories.backend.title,
            icon: FiServer,
            color: "from-green-500 to-emerald-600",
            skills: t.skills.categories.backend.skills
        },
        {
            title: t.skills.categories.mobile.title,
            icon: FiSmartphone,
            color: "from-purple-500 to-indigo-600",
            skills: t.skills.categories.mobile.skills
        },
        {
            title: t.skills.categories.devops.title,
            icon: FiSettings,
            color: "from-orange-500 to-red-600",
            skills: t.skills.categories.devops.skills
        },
        {
            title: t.skills.categories.systemAnalysis.title,
            icon: FiTarget,
            color: "from-teal-500 to-blue-600",
            skills: t.skills.categories.systemAnalysis.skills
        }
    ];

    return (
        <section id="skills" className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                        <FiCode className="mr-3 text-blue-600" size={32} />
                        {t.skills.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div 
                                key={index} 
                                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Category Header */}
                                <div className="mb-4">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className={`
                                            w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} 
                                            flex items-center justify-center shadow-lg
                                        `}>
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex}
                                            className="flex items-center space-x-3 group"
                                        >
                                            <div className={`
                                                w-2 h-2 rounded-full bg-gradient-to-r ${category.color}
                                                group-hover:scale-125 transition-transform duration-200
                                            `}></div>
                                            <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-200">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Learning Section */}
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {t.skills.continuousLearning}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                        <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">
                                {t.skills.learningDescription1}
                            </span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">
                                {t.skills.learningDescription2}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
