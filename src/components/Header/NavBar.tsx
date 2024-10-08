import { useRef, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Links } from "./Links";
import { OpenNavBar } from "./OpenNavBar";
import { ToggleIconMenu } from "./ToggleIconMenu";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);
    const servicesMenuRef = useRef<HTMLDivElement>(null);
    const servicesButtonRef = useRef<HTMLAnchorElement>(null);

    useClickOutside(servicesMenuRef, servicesButtonRef, () => setIsOpen(false));

    return (
        <div className="flex justify-between items-center px-24 max-[600px]:px-10">
            <Zoom triggerOnce={true} cascade duration={1500} >
                <h2 className="font-bold text-2xl">
                    Design<span className="text-orange">AGENCY</span>
                </h2>
            </Zoom>
            <nav>
                <OpenNavBar navBarIsOpen={navBarIsOpen} />

                <Fade triggerOnce={true} duration={2000} direction="down">
                    <Links isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} servicesButtonRef={servicesButtonRef} servicesMenuRef={servicesMenuRef} />
                </Fade>

                <ToggleIconMenu navBarIsOpen={navBarIsOpen} setNavBarIsOpen={() => setNavBarIsOpen(!navBarIsOpen)} />
            </nav>
        </div>
    );
};
