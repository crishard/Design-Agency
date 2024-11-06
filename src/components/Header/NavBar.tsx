import { useRef, useState } from "react";
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
            <h2 className="font-bold text-2xl">
                Design<span className="text-orange">AGENCY</span>
            </h2>
            <nav>
                <OpenNavBar navBarIsOpen={navBarIsOpen} />
                <Links isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} servicesButtonRef={servicesButtonRef} servicesMenuRef={servicesMenuRef} />
                <ToggleIconMenu navBarIsOpen={navBarIsOpen} setNavBarIsOpen={() => setNavBarIsOpen(!navBarIsOpen)} />
            </nav>
        </div>
    );
};
