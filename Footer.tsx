
import React from 'react';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { NAV_LINKS } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-text-dark dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif text-primary mb-4">MarocWheels</h3>
            <p className="text-gray-300">{t('footerSlogan')}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                 <li key={link.nameKey}><button onClick={() => onNavigate(link.page)} className="hover:text-primary">{t(link.nameKey as any)}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">{t('contactUs')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Rue de la Liberté, Casablanca</li>
              <li>contact@marocwheels.com</li>
              <li>+212 522 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">{t('followUs')}</h4>
             <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
              <a href="#" className="hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MarocWheels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;