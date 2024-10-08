interface IOpenNavBArProps {
    navBarIsOpen: boolean
}
export const OpenNavBar = ({ navBarIsOpen }: IOpenNavBArProps) => {
    return (
        <>
            {navBarIsOpen && (
                <div className="absolute top-16 left-0 w-full bg-bg-secondary shadow-lg min-[920px]:hidden h-screen py-16 text-center">
                    <ul className="space-y-4">
                        <a href="#services" className=" gap-12">
                            Level 1 item 1
                        </a>

                        <a href="#services" className=" gap-12 block">
                            Level 1 item 2
                        </a>
                        <li>
                            <a href="" className="hover:text-primary min-[800px]:py-0 py-2">About Us</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-primary min-[800px]:py-0 py-2">Contact Us</a>
                        </li>

                    </ul>
                    <div className="flex justify-center pt-4 pb-2">
                        <a href="#login" className="border-[#20B15A] border px-3 py-2 rounded-xl">Login</a>
                    </div>
                    <div className="flex justify-center">
                        <a href="#register" className="bg-[#20B15A] text-white px-3 py-2 rounded-xl">Register</a>
                    </div>
                </div>
            )}
        </>
    )
}
