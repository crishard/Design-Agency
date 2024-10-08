
import { CardTestimonials } from './CardTestimonials';
import { dataTestimonials } from './DataTestmonials';

interface IGridCardsTestimonialsProps {
    currentIndex: number
}
export const GridCardsTestimonials = ({ currentIndex }: IGridCardsTestimonialsProps) => {
    return (
        <div className="relative w-full flex justify-center items-center py-8">
            <div className="flex overflow-hidden w-full max-w-6xl">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
                >
                    {dataTestimonials.map((testimonial, index) => (
                        <CardTestimonials key={index} index={index} message={testimonial.message} image={testimonial.image} name={testimonial.name} title={testimonial.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
