import screen4 from "../../assets/Screenshot 2022-05-06 at 10.33.40 PM 6.26.png"
import screen1 from "../../assets/Screenshot 2022-05-06 at 10.35.png"
import screen2 from "../../assets/Screenshot 2022-05-14 at 11.15.png"
import screen3 from "../../assets/Screenshot 2022-05-14 at 11.17.png"
import { HeaderSections } from "../HeaderSections/HeaderSections"
import { CardPortfolio } from "./CardPortfolio"

const Portfolio = () => {
    return (
        <section className="px-24 py-20 max-[600px]:px-10 " id="portfolio">
            <HeaderSections text={"Our Portfolio"} title={"We provide the Perfect Solution to your business growth"} />

            <div className="grid grid-cols-2 gap-20 pt-24 max-[800px]:block">
                <div className="grid gap-16">
                    <CardPortfolio img={screen1} title={"Digital Marketing Agency Website"} text={"This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"} />
                    <CardPortfolio img={screen3} title={"Digital Marketing Agency Website"} text={"This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"} />
                </div>

                <div className="grid gap-16">
                    <CardPortfolio img={screen2} title={"Digital Marketing Agency Website"} text={"This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"} />
                    <CardPortfolio img={screen4} title={"Digital Marketing Agency Website"} text={"This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand"} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio