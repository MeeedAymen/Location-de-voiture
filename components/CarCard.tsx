
import React from 'react';
import type { Car } from '../types';
import { SeatIcon, TransmissionIcon, FuelIcon } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col">
      <img src={car.images[0]} alt={car.name[language]} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold font-serif text-text-dark dark:text-white">{car.name[language]}</h3>
            <span className="text-sm font-semibold bg-secondary/10 dark:bg-secondary/20 text-secondary px-2 py-1 rounded">{car.type[language]}</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center text-text-light dark:text-gray-400 border-t border-b border-gray-100 dark:border-gray-700 py-4">
          <div className="flex flex-col items-center">
            <SeatIcon className="w-6 h-6 mb-1 text-primary" />
            <span>{car.seats} {t('seats')}</span>
          </div>
          <div className="flex flex-col items-center">
            <TransmissionIcon className="w-6 h-6 mb-1 text-primary" />
            <span>{car.transmission[language]}</span>
          </div>
          <div className="flex flex-col items-center">
            <FuelIcon className="w-6 h-6 mb-1 text-primary" />
            <span>{car.fuel[language]}</span>
          </div>
        </div>
        <div className="mt-auto pt-6 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">{car.pricePerDay}</span>
            <span className="text-text-light dark:text-gray-400"> MAD{t('perDay')}</span>
          </div>
          <button
            onClick={() => onSelect(car)}
            className="bg-primary text-white font-bold py-2 px-5 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            {t('details')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;