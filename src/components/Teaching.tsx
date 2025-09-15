import React from 'react';
import { FiBookOpen, FiUsers, FiAward, FiHeart } from 'react-icons/fi';
import { useLanguage } from '../i18n';

const Teaching: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section id="teaching" className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                        <FiBookOpen className="mr-3 text-blue-600" size={32} />
                        {t.teaching.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                {/* Guest Lecturer */}
                <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                                <FiUsers className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {t.teaching.guestLecturer.title}
                                </h3>
                                <h4 className="text-lg font-semibold text-blue-600 mb-3">
                                    {t.teaching.guestLecturer.institution}
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {t.teaching.guestLecturer.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {t.teaching.guestLecturer.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Corporate Training */}
                <div className="mb-8">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                                <FiAward className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {t.teaching.corporateTraining.title}
                                </h3>
                                <h4 className="text-lg font-semibold text-green-600 mb-3">
                                    {t.teaching.corporateTraining.company}
                                </h4>
                                <div className="space-y-3 text-gray-700 mb-4">
                                    {t.teaching.corporateTraining.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm leading-relaxed">
                                                {achievement}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {t.teaching.corporateTraining.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teaching Philosophy */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                            <FiHeart className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {t.teaching.philosophy.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {t.teaching.philosophy.description}
                            </p>
                            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
                                "{t.teaching.philosophy.quote}"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teaching;
