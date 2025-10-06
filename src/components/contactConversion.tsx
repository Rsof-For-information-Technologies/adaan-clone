'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactConversion() {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectNeeds: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', projectNeeds: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                {t('ContactConversion.hero.title')}
                            </h2>
                            <p className="text-md text-gray-600 leading-relaxed">
                                {t('ContactConversion.hero.description')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div>
                                    <p className="text-sm text-gray-500">{t('ContactConversion.contact.email.label')}</p>
                                    <a href="mailto:contact@adaan.com" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                        {t('ContactConversion.contact.email.address')}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div>
                                    <p className="text-sm text-gray-500">{t('ContactConversion.contact.response.label')}</p>
                                    <p className="text-lg font-semibold text-gray-900">{t('ContactConversion.contact.response.time')}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-4">{t('ContactConversion.trust.label')}</p>
                            <div className="flex flex-wrap gap-6 opacity-60">
                                <div className="text-sm font-medium text-gray-700">{t('ContactConversion.trust.companies.0')}</div>
                                <div className="text-sm font-medium text-gray-700">{t('ContactConversion.trust.companies.1')}</div>
                                <div className="text-sm font-medium text-gray-700">{t('ContactConversion.trust.companies.2')}</div>
                                <div className="text-sm font-medium text-gray-700">{t('ContactConversion.trust.companies.3')}</div>
                                <div className="text-sm font-medium text-gray-700">{t('ContactConversion.trust.companies.4')}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute top-4 left-4 right-4 bg-green-50 border border-green-200 rounded-xl p-4 z-10"
                                >
                                    <div className="flex items-center space-x-2 text-green-800">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">{t('ContactConversion.form.successMessage')}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>

                            <div className="relative">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {t('ContactConversion.form.title')}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t('ContactConversion.form.subtitle')}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            {t('ContactConversion.form.fields.name.label')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                            placeholder={t('ContactConversion.form.fields.name.placeholder')}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            {t('ContactConversion.form.fields.email.label')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                            placeholder={t('ContactConversion.form.fields.email.placeholder')}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="projectNeeds" className="block text-sm font-medium text-gray-700">
                                            {t('ContactConversion.form.fields.project.label')}
                                        </label>
                                        <textarea
                                            id="projectNeeds"
                                            name="projectNeeds"
                                            value={formData.projectNeeds}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                                            placeholder={t('ContactConversion.form.fields.project.placeholder')}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className="w-full bg-[#222222] text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                    >
                                        <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                            {t('ContactConversion.form.submitButton')}
                                        </span>
                                        {isSubmitting && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </motion.div>
                                        )}
                                        <div className="absolute inset-0 bg-[#222222] opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                                    </motion.button>
                                </form>

                                <p className="text-center text-sm text-gray-500 mt-6">
                                    {t('ContactConversion.form.privacyNotice')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
