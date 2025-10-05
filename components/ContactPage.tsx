
import React, { useState } from 'react';
import { SpinnerIcon } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl font-bold font-serif text-text-dark dark:text-white">{t('getInTouch')}</h1>
                <p className="text-text-light dark:text-gray-400 mt-2">{t('getInTouchSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {isSubmitted ? (
                        <div className="text-center flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-bold font-serif text-text-dark dark:text-white">{t('bookingThankYou')}</h2>
                            <p className="text-text-light dark:text-gray-400 mt-2">{t('messageSent')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif border-b dark:border-gray-700 pb-4 text-text-dark dark:text-white">{t('sendMessage')}</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('fullName')}</label>
                                <input type="text" placeholder={t('yourName')} required className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('emailAddress')}</label>
                                <input type="email" placeholder="you@example.com" required className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('sendMessage')}</label>
                                <textarea placeholder={t('yourQuestion')} rows={5} required className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="w-full bg-primary text-white font-bold py-3 rounded-lg text-lg hover:bg-primary-dark transition-colors flex justify-center items-center disabled:bg-primary-dark/70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <SpinnerIcon className="animate-spin -ms-1 me-3 h-5 w-5 text-white" />
                                        {t('sending')}
                                    </>
                                ) : t('send')}
                            </button>
                        </form>
                    )}
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card h-full">
                        <h2 className="text-2xl font-bold font-serif border-b dark:border-gray-700 pb-4 mb-6 text-text-dark dark:text-white">{t('contactInformation')}</h2>
                        <div className="space-y-6 text-text-light dark:text-gray-400">
                             <div className="flex items-start">
                                <svg className="w-6 h-6 me-3 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div><strong className="text-text-dark dark:text-gray-200">{t('address')}</strong><br />123 Rue de la Liberté, Casablanca</div>
                             </div>
                             <div className="flex items-start">
                                <svg className="w-6 h-6 me-3 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div><strong className="text-text-dark dark:text-gray-200">{t('email')}</strong><br /><a href="mailto:contact@marocwheels.com" className="text-primary hover:underline">contact@marocwheels.com</a></div>
                             </div>
                             <div className="flex items-start">
                                <svg className="w-6 h-6 me-3 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div><strong className="text-text-dark dark:text-gray-200">{t('phone')}</strong><br />+212 522 000 000</div>
                             </div>
                             <div className="flex items-start">
                                <svg className="w-6 h-6 me-3 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div><strong className="text-text-dark dark:text-gray-200">{t('hours')}</strong><br />{t('hoursValue')}</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
