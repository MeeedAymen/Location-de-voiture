import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService';
import { SpinnerIcon, LoadingSpinner } from './IconComponents';
import { useLanguage } from '../contexts/LanguageContext';

const AITripPlanner: React.FC = () => {
    const { language, t } = useLanguage();
    const [destination, setDestination] = useState('Marrakech');
    const [itinerary, setItinerary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!destination) {
            setError('Please enter a destination.');
            return;
        }
        setIsLoading(true);
        setError('');
        setItinerary('');
        try {
            const result = await generateItinerary(destination, language);
            setItinerary(result);
        } catch (err) {
            setError('Failed to generate itinerary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Renders simple markdown to valid HTML, correctly handling lists.
    const renderMarkdown = (text: string) => {
        const lines = text.split('\n');
        const elements: React.ReactNode[] = [];
        let listItems: React.ReactNode[] = [];
    
        const flushList = () => {
            if (listItems.length > 0) {
                elements.push(
                    <ul key={`ul-${elements.length}`} className="ms-5 list-disc space-y-1 mb-2">
                        {listItems}
                    </ul>
                );
                listItems = [];
            }
        };
    
        lines.forEach((line, index) => {
            if (line.startsWith('* ')) {
                listItems.push(<li key={`li-${index}`}>{line.substring(2)}</li>);
            } else {
                flushList();
                const key = `line-${index}`;
                if (line.startsWith('###')) {
                    elements.push(<h3 key={key} className="text-lg font-semibold mt-4 mb-2 text-secondary">{line.replace('###', '').trim()}</h3>);
                } else if (line.startsWith('##')) {
                    elements.push(<h2 key={key} className="text-xl font-bold mt-4 mb-2 text-secondary">{line.replace('##', '').trim()}</h2>);
                } else if (line.startsWith('#')) {
                    elements.push(<h1 key={key} className="text-2xl font-bold mt-4 mb-2 text-secondary">{line.replace('#', '').trim()}</h1>);
                } else if (line.trim() !== '') {
                    // Support for bold text: **text**
                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    const paragraphContent = parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    });
                    elements.push(<p key={key} className="mb-2">{paragraphContent}</p>);
                }
            }
        });
    
        flushList(); // Ensure any trailing list gets rendered
    
        return elements;
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card">
            <h2 className="text-3xl font-bold font-serif text-center text-text-dark dark:text-white mb-2">{t('aiPlannerTitle')}</h2>
            <p className="text-center text-text-light dark:text-gray-400 mb-6">{t('aiPlannerSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                    type="text" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={t('aiPlannerPlaceholder')}
                    disabled={isLoading}
                    className="flex-grow p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition disabled:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-400"
                />
                <button 
                    onClick={handleGenerate} 
                    disabled={isLoading}
                    className="bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-all duration-300 flex items-center justify-center disabled:bg-gray-400"
                >
                    {isLoading ? <SpinnerIcon className="animate-spin -ms-1 me-3 h-5 w-5 text-white" /> : t('generateItinerary')}
                </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
             <div className="mt-6">
                {isLoading ? (
                    <div className="p-6 bg-background dark:bg-text-dark rounded-lg border border-gray-200 dark:border-gray-700">
                        <LoadingSpinner message={t('aiCrafting')} />
                    </div>
                ) : itinerary && (
                    <div className="p-6 bg-background dark:bg-text-dark dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
                        {renderMarkdown(itinerary)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AITripPlanner;
