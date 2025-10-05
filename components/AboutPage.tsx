import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="dark:bg-text-dark">
      <div className="bg-secondary text-white py-20 text-center animate-fade-in-up">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold font-serif">{t('aboutTitle')}</h1>
          <p className="text-lg mt-2">{t('aboutSubtitle')}</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.pexels.com/photos/14849991/pexels-photo-14849991.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MarocWheels Service" className="rounded-lg shadow-card" />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold font-serif text-text-dark dark:text-white mb-4">{t('ourStory')}</h2>
            <p className="text-text-light dark:text-gray-400 mb-4">
              {t('ourStoryP1')}
            </p>
            <p className="text-text-light dark:text-gray-400">
              {t('ourStoryP2')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div className="md:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.pexels.com/photos/18944374/pexels-photo-18944374.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Moroccan Road" className="rounded-lg shadow-card" />
          </div>
          <div className="md:order-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold font-serif text-text-dark dark:text-white mb-4">{t('ourMission')}</h2>
            <p className="text-text-light dark:text-gray-400 mb-4">
              {t('ourMissionP1')}
            </p>
            <ul className="space-y-3 text-text-light dark:text-gray-400">
                <li className="flex items-start">
                    <svg className="w-6 h-6 me-2 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{t('missionPoint1')}</span>
                </li>
                 <li className="flex items-start">
                    <svg className="w-6 h-6 me-2 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{t('missionPoint2')}</span>
                </li>
                 <li className="flex items-start">
                    <svg className="w-6 h-6 me-2 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{t('missionPoint3')}</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;