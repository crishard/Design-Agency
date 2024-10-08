import { Zoom } from "react-awesome-reveal"

interface ICardTestimonialsProps {
    index: number,
    message: string,
    image: string,
    name: string,
    title: string
}
export const CardTestimonials = ({ index, image, name, message, title }: ICardTestimonialsProps) => {
    return (
        <div
            key={index}
            className="min-w-[33.33%] p-4 flex flex-wrap justify-center items-center"
        >
            <Zoom triggerOnce={true} duration={1500}>
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs ">

                    <p className="mb-4">{message}</p>
                    <div className="flex  mt-4">
                        <img
                            src={image}
                            alt={name}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="text-left">
                            <h3 className="font-bold">{name}</h3>
                            <p className="text-sm text-gray-500">{title}</p>
                        </div>
                    </div>


                </div>
            </Zoom>
        </div>
    )
}
