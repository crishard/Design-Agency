import { FiMenu, FiX } from "react-icons/fi";

interface IToggleIconMenuProps {
    navBarIsOpen: boolean,
    setNavBarIsOpen: any
}

export const ToggleIconMenu = ({ navBarIsOpen, setNavBarIsOpen }: IToggleIconMenuProps) => {
    return (
        <div className="block min-[920px]:hidden">
            <button onClick={() => setNavBarIsOpen(!navBarIsOpen)} aria-label="Toggle Menu">
                {navBarIsOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
        </div>
    )
}
