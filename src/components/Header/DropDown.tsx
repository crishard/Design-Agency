import { FaChevronRight } from "react-icons/fa";

interface IDropDownProps {
    isOpen: boolean,
    servicesMenuRef: React.RefObject<HTMLDivElement>
}

export const DropDown = ({ isOpen, servicesMenuRef }: IDropDownProps) => {
    return (
        <div>
            {isOpen && (
                <div className="absolute top-20" ref={servicesMenuRef}>
                    <li className="border-b-[2px] border-gray-200 bg-white py-2 px-4">
                        <a href="#services" className="flex items-center gap-12">
                            Level 1 item 1 <FaChevronRight className="text-bg-green" />
                        </a>
                    </li>
                    <li className="bg-white py-2 px-4">
                        <a href="#services" className="flex items-center gap-12">
                            Level 1 item 2 <FaChevronRight className="text-bg-green" />
                        </a>
                    </li>
                </div>
            )}
        </div>
    )
}
