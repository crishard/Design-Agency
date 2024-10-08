import { Fade } from "react-awesome-reveal"
import { Address } from "./Address"
import { GridIconsFooter } from "./GridIconsFooter"
import { QuickLinks } from "./QuickLinks"
import { TopFooter } from "./TopFooter"

const Footer = () => {
    return (
        <footer className="px-24 max-[600px]:px-10  bg-[#00CA72] py-16">
            <div className="flex flex-wrap justify-between gap-10">
                <Fade triggerOnce={true} cascade duration={1500} direction="up">
                    <div className="max-w-[350px]">
                        <TopFooter />
                        <GridIconsFooter />
                    </div>
                    <QuickLinks />
                    <Address />
                </Fade>

            </div>
            <Fade triggerOnce={true} duration={2000} direction="down">
                <p className="text-lg pt-16">Copyright design Agency 2022</p>
            </Fade>

        </footer>
    )
}

export default Footer