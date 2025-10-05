import React, { useState, useRef, useEffect } from 'react';
import type { Page, Locale } from '../types';
import { NAV_LINKS } from '../constants';
import { SunIcon, MoonIcon, GlobeIcon, ChevronDownIcon } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  theme: string;
  toggleTheme: () => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: { code: Locale; name: string }[] = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' },
        { code: 'ar', name: 'العربية' },
    ];

    const handleLanguageChange = (langCode: Locale) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-text-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-full">
                <GlobeIcon className="h-5 w-5" />
                <span className="mx-1 font-medium uppercase text-sm">{language}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border dark:border-gray-700">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-start px-4 py-2 text-sm ${language === lang.code ? 'font-bold text-primary' : 'text-text-dark dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleMobileNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 animate-fade-in-down">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-secondary cursor-pointer dark:text-white" onClick={() => onNavigate('Home' as Page)}>
          Maroc<span className="text-primary">Wheels</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map(link => (
            <button
              key={link.nameKey}
              onClick={() => onNavigate(link.page)}
              className="text-text-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium"
            >
              {t(link.nameKey as any)}
            </button>
          ))}
          <LanguageSwitcher />
          <button onClick={toggleTheme} className="text-text-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-full">
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
           <button onClick={() => onNavigate('Cars' as Page)} className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105">
            {t('bookNow')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
           <LanguageSwitcher />
           <button onClick={toggleTheme} className="text-text-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-full">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-dark dark:text-gray-300 focus:outline-none z-50 relative">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.nameKey}
                onClick={() => handleMobileNavClick(link.page)}
                className="text-text-dark dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
              >
                {t(link.nameKey as any)}
              </button>
            ))}
            <button onClick={() => handleMobileNavClick('Cars' as Page)} className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 w-4/5 mt-2">
              {t('bookNow')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;