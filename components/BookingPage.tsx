
import React, { useState, useMemo } from 'react';
import type { Car } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingPageProps {
  car: Car;
}

const BookingPage: React.FC<BookingPageProps> = ({ car }) => {
  const { language, t } = useLanguage();
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [error, setError] = useState('');

  const { numberOfDays, totalPrice } = useMemo(() => {
    if (pickupDate && dropoffDate) {
      const pickup = new Date(pickupDate);
      const dropoff = new Date(dropoffDate);
      if (dropoff > pickup) {
        const diffTime = Math.abs(dropoff.getTime() - pickup.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return { numberOfDays: diffDays, totalPrice: diffDays * car.pricePerDay };
      }
    }
    return { numberOfDays: 0, totalPrice: 0 };
  }, [pickupDate, dropoffDate, car.pricePerDay]);

  const handleWhatsAppRedirect = () => {
    setError(''); // Clear previous errors

    if (pickupDate && dropoffDate) {
      const pickup = new Date(pickupDate);
      const dropoff = new Date(dropoffDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (pickup < today) {
        setError(t('errorPastDate'));
        return;
      }
      if (dropoff <= pickup) {
        setError(t('errorDropoffDate'));
        return;
      }
    }

    const phoneNumber = '212691268607';
    let message: string;
    const carUrl = window.location.href;

    if (numberOfDays > 0) {
      message = t('whatsAppMessage')
        .replace('{carName}', car.name[language])
        .replace('{pickupDate}', new Date(pickupDate).toLocaleDateString(language))
        .replace('{dropoffDate}', new Date(dropoffDate).toLocaleDateString(language))
        .replace('{carLink}', carUrl);
    } else {
      message = t('whatsAppMessageNoDate')
        .replace('{carName}', car.name[language])
        .replace('{carLink}', carUrl);
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const todayString = new Date().toISOString().split('T')[0];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold font-serif text-text-dark dark:text-white">{t('bookYourCar')}</h1>
        <p className="text-text-light dark:text-gray-400 mt-2">{t('bookingSubtitle')}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card space-y-6">
            <h2 className="text-2xl font-bold font-serif border-b dark:border-gray-700 pb-4 text-text-dark dark:text-white">{t('bookingDates')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('pickupDate')}</label>
                <input type="date" name="pickupDate" min={todayString} value={pickupDate} onChange={(e) => { setPickupDate(e.target.value); setError(''); }} className="p-3 border border-gray-300 rounded-lg w-full bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('dropoffDate')}</label>
                <input type="date" name="dropoffDate" min={pickupDate || todayString} value={dropoffDate} onChange={(e) => { setDropoffDate(e.target.value); setError(''); }} className="p-3 border border-gray-300 rounded-lg w-full bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 dark:text-red-400 p-3 rounded-lg">{error}</p>}
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-green-500 text-white font-bold py-4 rounded-lg text-lg hover:bg-green-600 transition-colors flex justify-center items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.502 1.908 6.384l-.338 1.223 1.272.338z"/></svg>
              {t('bookViaWhatsApp')}
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card self-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold font-serif border-b dark:border-gray-700 pb-4 mb-4 text-text-dark dark:text-white">{t('yourSelection')}</h3>
            <img src={car.images[0]} alt={car.name[language]} className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-text-dark dark:text-white">{car.name[language]}</h4>
            <p className="text-text-light dark:text-gray-400">{car.type[language]}</p>
            <div className="mt-4 text-2xl font-bold text-primary">{car.pricePerDay} MAD<span className="text-base text-text-light dark:text-gray-400">{t('perDay')}</span></div>
            {numberOfDays > 0 && (
                <div className="mt-6 pt-6 border-t dark:border-gray-700 space-y-2">
                    <div className="flex justify-between text-text-light dark:text-gray-400">
                        <span>{t('rentalDuration')}</span>
                        <span className="font-semibold">{numberOfDays} {numberOfDays > 1 ? t('days') : t('day')}</span>
                    </div>
                     <div className="flex justify-between text-text-dark dark:text-white text-xl font-bold">
                        <span>{t('totalPrice')}</span>
                        <span>{totalPrice} MAD</span>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
