import { Zoom } from "react-awesome-reveal"
import img from "../../../assets/Group 38.png"
export const HeroSection = () => {
    return (
        <div className="pt-12 grid grid-cols-2 items-center px-24 max-[600px]:px-10 pb-14 max-[850px]:block">
            <div>
                <h1 className="font-bold text-6xl leading-tight pb-3 max-[1100px]:text-5xl max-[940px]:text-4xl">Increase Your Customers Loyalty and Satisfaction</h1>
                <p className="text-lg pb-6">We help businesses like yours earn more customers, standout from competitors, make more money</p>
                <button className=" text-white bg-bg-green px-5 py-4 rounded-xl font-medium">Get Started</button>
            </div>
            <Zoom triggerOnce={true} duration={1000}>
            <img src={img} alt="" className="max-[850px]:pt-12" />
            </Zoom>
            
        </div>
    )
}
