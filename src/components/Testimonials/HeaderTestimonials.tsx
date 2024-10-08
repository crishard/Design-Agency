import { Fade } from "react-awesome-reveal"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { HeaderSections } from "../HeaderSections/HeaderSections"

interface IHeaderTestimonialsProps {
    handlePrev: () => void,
    handleNext: () => void
}
export const HeaderTestimonials = ({ handleNext, handlePrev }: IHeaderTestimonialsProps) => {
    return (
        <div className="flex justify-between items-center pb-4 max-[710px]:block">
            <HeaderSections text={'TESTIMONIALS'} title={'See what our customer say about us'} />
            <Fade direction="right" triggerOnce={true} duration={2000}>
                <div className='text-2xl  max-[710px]:pt-8 text-center'>
                    <button
                        className="p-2 bg-gray-200 rounded-full hover:bg-[#D7F5DC] border-[1px] border-black hover:border-[#D7F5DC]"
                        onClick={handlePrev}
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        className="p-2 bg-gray-200 rounded-full hover:bg-[#D7F5DC] ml-4  border-[1px] border-black hover:border-[#D7F5DC]"
                        onClick={handleNext}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </Fade>

        </div>
    )
}
