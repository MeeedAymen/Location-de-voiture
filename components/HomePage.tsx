
import React from 'react';
import { CARS_DATA, TESTIMONIALS } from '../constants';
import type { Car } from '../types';
import CarCard from './CarCard';
import { PriceIcon, SupportIcon, CarRangeIcon, StarIcon, SearchIcon, CalendarIcon, KeyIcon } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';
import AITripPlanner from './AITripPlanner';

interface HomePageProps {
  onSelectCar: (car: Car) => void;
  onNavigateToCars: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCar, onNavigateToCars }) => {
  const { t, language } = useLanguage();
  const featuredCars = CARS_DATA.slice(0, 3);
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3889868/pexels-photo-3889868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-8 animate-fade-in-up">{t('heroTitle')}</h1>
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={(e) => { e.preventDefault(); onNavigateToCars(); }} className="grid grid-cols-1 md:grid-cols-4 items-end gap-4">
              <div className="text-start">
                  <label className="block text-sm font-semibold mb-2" htmlFor="pickup-location">{t('pickupLocation')}</label>
                  <input type="text" id="pickup-location" placeholder={t('pickupLocationPlaceholder')} className="w-full p-3 rounded-lg text-text-dark bg-gray-50 border border-gray-300 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
              </div>
              <div className="text-start">
                  <label className="block text-sm font-semibold mb-2" htmlFor="pickup-date">{t('pickupDate')}</label>
                  <input type="date" id="pickup-date" min={todayString} className="w-full p-3 rounded-lg text-text-dark bg-gray-50 border border-gray-300 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
              </div>
              <div className="text-start">
                  <label className="block text-sm font-semibold mb-2" htmlFor="dropoff-date">{t('dropoffDate')}</label>
                  <input type="date" id="dropoff-date" min={todayString} className="w-full p-3 rounded-lg text-text-dark bg-gray-50 border border-gray-300 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
              </div>
              <button type="submit" className="bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary-dark transition-transform transform hover:scale-105 w-full h-[52px]">
                {t('searchCars')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-text-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 animate-fade-in-up text-text-dark dark:text-white">{t('howItWorksTitle')}</h2>
          <p className="text-center text-text-light dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('howItWorksSubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-secondary/10 text-secondary rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-dark dark:text-white">{t('step1Title')}</h3>
              <p className="text-text-light dark:text-gray-400">{t('step1Desc')}</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-secondary/10 text-secondary rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-dark dark:text-white">{t('step2Title')}</h3>
              <p className="text-text-light dark:text-gray-400">{t('step2Desc')}</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="bg-secondary/10 text-secondary rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <KeyIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-dark dark:text-white">{t('step3Title')}</h3>
              <p className="text-text-light dark:text-gray-400">{t('step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-background dark:bg-text-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif text-center text-text-dark dark:text-white mb-4 animate-fade-in-up">{t('featuredVehicles')}</h2>
          <p className="text-center text-text-light dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('featuredVehiclesSubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 2)}s` }}>
                <CarCard car={car} onSelect={onSelectCar} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-text-dark">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif mb-12 animate-fade-in-up text-text-dark dark:text-white">{t('whyRentWithUs')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-primary/10 text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <PriceIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text-dark dark:text-white">{t('transparentPricing')}</h3>
                    <p className="text-text-light dark:text-gray-400">{t('transparentPricingDesc')}</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-primary/10 text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <SupportIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text-dark dark:text-white">{t('roadsideAssistance')}</h3>
                    <p className="text-text-light dark:text-gray-400">{t('roadsideAssistanceDesc')}</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-primary/10 text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <CarRangeIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text-dark dark:text-white">{t('wideRangeOfCars')}</h3>
                    <p className="text-text-light dark:text-gray-400">{t('wideRangeOfCarsDesc')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 dark:bg-text-dark">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif mb-12 animate-fade-in-up text-text-dark dark:text-white">{t('testimonialsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white dark:border-gray-800 shadow-lg" />
                  <p className="text-text-light dark:text-gray-400 italic mt-6">"{testimonial.quote[language]}"</p>
                  <div className="mt-4">
                    <h4 className="font-bold text-text-dark dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-text-light dark:text-gray-400">{testimonial.location}</p>
                    <div className="flex justify-center mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* AI Trip Planner Section */}
      <section className="py-20 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="animate-fade-in-up">
                <AITripPlanner />
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
