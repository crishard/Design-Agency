import { FaArrowRightLong } from "react-icons/fa6";


interface ICardWhatWeDoProps {
    title: string
    img: string
}

export const CardWhatWeDo = ({ title, img }: ICardWhatWeDoProps) => {
    return (
        <div className="hover:shadow-md px-6 py-8 rounded-xl max-w-[350px]">
            <img src={img} alt="What We Do" className="w-20 pb-5" />
            <h3 className="text-xl font-semibold pb-4">{title}</h3>
            <p>We help identify the best ways to improve tour business</p>

            <button className="flex items-center gap-3 hover:text-white px-4 py-4 mt-6 rounded-xl cursor-pointer hover:bg-orange">Learn More<FaArrowRightLong /></button>
        </div>
    )
}
