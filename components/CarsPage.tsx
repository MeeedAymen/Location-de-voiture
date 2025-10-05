import React, { useState, useMemo } from 'react';
import { CARS_DATA } from '../constants';
import type { Car } from '../types';
import CarCard from './CarCard';
import { useLanguage } from '../contexts/LanguageContext';

interface CarsPageProps {
  onSelectCar: (car: Car) => void;
}

type SortOption = 'default' | 'price-asc' | 'price-desc';
type CarTypeFilter = 'All' | 'SUV' | 'Sedan' | 'Hatchback' | '4x4';

const CarsPage: React.FC<CarsPageProps> = ({ onSelectCar }) => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<CarTypeFilter>('All');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const carTypes: CarTypeFilter[] = ['All', 'SUV', 'Sedan', 'Hatchback', '4x4'];
  const carTypeTranslations: { [key in CarTypeFilter]: string } = {
    All: t('all'),
    SUV: CARS_DATA.find(c => c.type.en === 'SUV')?.type[language] || 'SUV',
    Sedan: CARS_DATA.find(c => c.type.en === 'Sedan')?.type[language] || 'Sedan',
    Hatchback: CARS_DATA.find(c => c.type.en === 'Hatchback')?.type[language] || 'Hatchback',
    '4x4': CARS_DATA.find(c => c.type.en === '4x4')?.type[language] || '4x4',
  }

  const processedCars = useMemo(() => {
    let filtered = filter === 'All'
      ? CARS_DATA
      : CARS_DATA.filter(car => car.type.en === filter);
    
    switch (sortOption) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.pricePerDay - b.pricePerDay);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.pricePerDay - a.pricePerDay);
      default:
        return filtered;
    }
  }, [filter, sortOption]);


  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold font-serif text-text-dark dark:text-white">{t('ourFleet')}</h1>
        <p className="text-text-light dark:text-gray-400 mt-2">{t('ourFleetSubtitle')}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex justify-center flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {carTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === type
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-text-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border dark:border-gray-600'
              }`}
            >
              {carTypeTranslations[type]}
            </button>
          ))}
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="p-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            <option value="default">{t('sortBy')}</option>
            <option value="price-asc">{t('priceAsc')}</option>
            <option value="price-desc">{t('priceDesc')}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processedCars.map((car, index) => (
          <div key={car.id} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
            <CarCard car={car} onSelect={onSelectCar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;