
import React, { useState, useCallback, useEffect } from 'react';
import { Page, Car } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CarsPage from './components/CarsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CarDetailsPage from './components/CarDetailsPage';
import BookingPage from './components/BookingPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { translations } from './i18n/translations';
import { CARS_DATA } from './constants';

const getInitialPageState = (): { page: Page; car: Car | null } => {
  const params = new URLSearchParams(window.location.search);
  const carId = params.get('carId');
  if (carId) {
    const car = CARS_DATA.find(c => c.id === parseInt(carId, 10));
    if (car) {
      // For simplicity, deep links always go to the details page.
      // Booking page is accessed via an action on the details page.
      return { page: Page.CarDetails, car };
    }
  }
  return { page: Page.Home, car: null };
};

const AppContent: React.FC = () => {
  const [initialState] = useState(getInitialPageState);
  const [currentPage, setCurrentPage] = useState<Page>(initialState.page);
  const [selectedCar, setSelectedCar] = useState<Car | null>(initialState.car);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Effect for SEO meta tags
  useEffect(() => {
    const t = (key: keyof typeof translations) => translations[key][language];

    let title = "Maroc Wheels - " + t('seo_main_title');
    let description = t('seo_main_description');

    switch (currentPage) {
        case Page.Home:
            // Default title and description are already set for home.
            break;
        case Page.Cars:
            title = t('ourFleet') + " - MarocWheels";
            description = t('seo_cars_description');
            break;
        case Page.About:
            title = t('aboutUs') + " - MarocWheels";
            description = t('seo_about_description');
            break;
        case Page.Contact:
            title = t('contact') + " - MarocWheels";
            description = t('seo_contact_description');
            break;
        case Page.CarDetails:
            if (selectedCar) {
                title = `${selectedCar.name[language]} - ${t('rent_a')} ${selectedCar.type[language]} | MarocWheels`;
                description = `${t('rent_the')} ${selectedCar.name[language]}. ${selectedCar.description[language].substring(0, 160)}`;
            }
            break;
        case Page.Booking:
            if (selectedCar) {
                title = `${t('bookYour')} ${selectedCar.name[language]} - MarocWheels`;
                description = `${t('seo_booking_description')} ${selectedCar.name[language]}.`;
            }
            break;
    }
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    }

  }, [currentPage, selectedCar, language]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleSelectCar = useCallback((car: Car) => {
    setSelectedCar(car);
    navigateTo(Page.CarDetails);
  }, [navigateTo]);

  const handleBookNow = useCallback((car: Car) => {
    setSelectedCar(car);
    navigateTo(Page.Booking);
  }, [navigateTo]);
  
  // The useEffect for handling deep linking on initial load has been replaced
  // by the getInitialPageState function, which runs before the first render.

  // Sync URL with app state for sharing and deep linking
  useEffect(() => {
    const url = new URL(window.location.href);
    if ((currentPage === Page.CarDetails || currentPage === Page.Booking) && selectedCar) {
      url.searchParams.set('carId', selectedCar.id.toString());
    } else {
      url.searchParams.delete('carId');
    }
    // Use replaceState to not create new browser history entries for internal navigation
    window.history.replaceState({}, '', url);
  }, [currentPage, selectedCar]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onSelectCar={handleSelectCar} onNavigateToCars={() => navigateTo(Page.Cars)} />;
      case Page.Cars:
        return <CarsPage onSelectCar={handleSelectCar} />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.CarDetails:
        return selectedCar ? <CarDetailsPage car={selectedCar} onBookNow={handleBookNow} /> : <HomePage onSelectCar={handleSelectCar} onNavigateToCars={() => navigateTo(Page.Cars)} />;
      case Page.Booking:
        return selectedCar ? <BookingPage car={selectedCar} /> : <HomePage onSelectCar={handleSelectCar} onNavigateToCars={() => navigateTo(Page.Cars)} />;
      default:
        return <HomePage onSelectCar={handleSelectCar} onNavigateToCars={() => navigateTo(Page.Cars)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-text-dark text-text-dark dark:text-gray-200">
      <Header onNavigate={navigateTo} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
