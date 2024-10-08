import { FaChevronDown } from "react-icons/fa"
import { DropDown } from "./DropDown"

interface ILinksProps {
    isOpen: boolean,
    setIsOpen: any,
    servicesButtonRef: any,
    servicesMenuRef: any
}
export const Links = ({ isOpen, setIsOpen, servicesButtonRef, servicesMenuRef }: ILinksProps) => {
    return (
        <ul className="hidden min-[920px]:flex justify-between gap-6 items-center font-medium">
             <DropDown isOpen={isOpen} servicesMenuRef={servicesMenuRef} />
            <li>
                <a href="#services" onClick={() => setIsOpen(!isOpen)} ref={servicesButtonRef} className="flex items-center gap-2">
                    Services <FaChevronDown />
                </a>
            </li>

            <li>
                <a href="">About Us</a>
            </li>
            <li>
                <a href="">Contact Us</a>
            </li>
            <li>
                <a href="#login" className="border-[#20B15A] border px-3 py-2 rounded-xl">Login</a>
            </li>
            <li>
                <a href="#register" className="bg-[#20B15A] text-white px-3 py-2 rounded-xl">Register</a>
            </li>

           
        </ul>
    )
}
