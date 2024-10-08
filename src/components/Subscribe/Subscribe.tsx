import { Fade } from "react-awesome-reveal"
import { HeaderSubscribe } from "./HeaderSubscribe"
import { Input } from "./Input"

export const Subscribe = () => {
    return (
        <div className="px-24 max-[600px]:px-10  text-center flex items-center justify-center pt-20 pb-40" id="contact">
            <div>
                <Fade triggerOnce={true} cascade direction="down" duration={1500}>
                    <HeaderSubscribe />
                    <Input />
                </Fade>
            </div>
        </div>
    )
}

