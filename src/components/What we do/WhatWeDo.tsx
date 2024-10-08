import { Fade } from "react-awesome-reveal"
import imgActivity from "../../assets/Activity.png"
import imgHeart from "../../assets/Heart.png"
import imgProjects from "../../assets/project-plan.png"
import imgRaised from "../../assets/raise.png"
import imgSatisfaction from "../../assets/rating (1).png"
import imgBusiness from "../../assets/timeline 2.png"
import imgWork from "../../assets/Work.png"
import { HeaderSections } from "../HeaderSections/HeaderSections"
import { CardWhatWeDo } from "./CardWhatWeDo"
import { WhatWeDoNumbers } from "./WhatWeDoNumbers"

export const WhatWeDo = () => {
    return (
        <div className="pt-16 px-24 max-[600px]:px-10" id="about">
            <HeaderSections text={"WHAT WE DO"} title={"We provide the Perfect Solution to your business growth"} />

            <div className="grid grid-cols-3 lg:gap-5 pt-16 max-[920px]:grid-cols-2 max-[775px]:grid-cols-1">
                <Fade triggerOnce={true} cascade duration={1000} direction="left">
                    <CardWhatWeDo title={"Grow Your Business"} img={imgActivity} />
                    <CardWhatWeDo title={"Improve brand loyalty"} img={imgHeart} />
                    <CardWhatWeDo title={"Improve Business model"} img={imgWork} />
                </Fade>

            </div>

            <div className="flex justify-center  flex-wrap gap-20 pt-32 pb-16 ">
                <WhatWeDoNumbers
                    imgNumber={imgProjects}
                    numberDescription="Completed Projects"
                    number={1400}
                    suffix=" +" start={100} />
                <WhatWeDoNumbers
                    imgNumber={imgSatisfaction}
                    numberDescription="Customer Satisfaction"
                    number={100}
                    suffix=" %" start={20} />
                <WhatWeDoNumbers
                    imgNumber={imgRaised}
                    numberDescription="Raised by Clients"
                    number={500}
                    suffix=" M" start={10} />
                <WhatWeDoNumbers
                    imgNumber={imgBusiness}
                    numberDescription="Years in Business"
                    number={10}
                    suffix=" yrs" start={2} />
            </div>
        </div>
    )
}
