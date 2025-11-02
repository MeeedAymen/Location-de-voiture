import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import type { Car } from '../types';
import { SeatIcon, TransmissionIcon, FuelIcon } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';

interface CarDetailsPageProps {
  car: Car;
  onBookNow: (car: Car) => void;
}

const CarDetailsPage: React.FC<CarDetailsPageProps> = ({ car, onBookNow }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in-up">
      <style>{`
        .main-carousel .swiper-button-next,
        .main-carousel .swiper-button-prev {
          color: var(--primary, #f59e0b);
          background: rgba(255, 255, 255, 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .main-carousel .swiper-button-next:hover,
        .main-carousel .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
        }
        .dark .main-carousel .swiper-button-next,
        .dark .main-carousel .swiper-button-prev {
          background: rgba(31, 41, 55, 0.9);
          color: var(--primary, #f59e0b);
        }
        .dark .main-carousel .swiper-button-next:hover,
        .dark .main-carousel .swiper-button-prev:hover {
          background: rgba(31, 41, 55, 1);
        }
        .main-carousel .swiper-button-next::after,
        .main-carousel .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }
        .thumbnail-carousel .swiper-slide-thumb-active img {
          opacity: 1 !important;
          border: 2px solid var(--primary, #f59e0b);
        }
      `}</style>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-4">
            {/* Main Image Swiper */}
            <Swiper
              modules={[Navigation, Thumbs, FreeMode]}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              className="main-carousel mb-4 rounded-lg"
            >
              {car.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt={`${car.name[language]} view ${index + 1}`} 
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
              modules={[FreeMode, Navigation, Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="thumbnail-carousel"
            >
              {car.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt={`${car.name[language]} thumbnail ${index + 1}`} 
                    className="w-full h-24 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="p-8 flex flex-col">
            <span className="text-sm font-semibold bg-secondary/10 dark:bg-secondary/20 text-secondary px-2 py-1 rounded self-start">{car.type[language]}</span>
            <h1 className="text-4xl font-bold font-serif text-text-dark dark:text-white mt-2">{car.name[language]}</h1>
            <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-bold text-primary">{car.pricePerDay}</span>
                <span className="text-2xl font-semibold text-primary ml-2">MAD</span>
                <span className="text-text-light dark:text-gray-400 ml-2">{t('perDay')}</span>
            </div>

            <p className="text-text-light dark:text-gray-400 mt-6 flex-grow">{car.description[language]}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-text-light dark:text-gray-400 border-t border-b border-gray-100 dark:border-gray-700 py-6">
                <div className="flex flex-col items-center">
                    <SeatIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-semibold">{car.seats} {t('seats')}</span>
                </div>
                <div className="flex flex-col items-center">
                    <TransmissionIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-semibold">{car.transmission[language]}</span>
                </div>
                <div className="flex flex-col items-center">
                    <FuelIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-semibold">{car.fuel[language]}</span>
                </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-text-dark dark:text-white">{t('features')}</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {car.features.map(feature => (
                  <li key={feature.en} className="flex items-center text-text-light dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {feature[language]}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onBookNow(car)}
              className="mt-10 w-full bg-primary text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              {t('bookThisCar')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;