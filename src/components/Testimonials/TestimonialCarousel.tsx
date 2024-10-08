import { useState } from 'react';
import { dataTestimonials } from './DataTestmonials';
import { GridCardsTestimonials } from './GridCardsTestimonials';
import { HeaderTestimonials } from './HeaderTestimonials';

export const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? dataTestimonials.length - 3 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === dataTestimonials.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="relative">
            <HeaderTestimonials handlePrev={handlePrev} handleNext={handleNext} />
            <GridCardsTestimonials currentIndex={currentIndex} />
        </section>
    );
};
