import { Link, useLocation } from "react-router-dom";
import 'tw-elements';

const Header = () => {
    const { pathname } = useLocation()

    const homeRoute = `/`
    const aboutRoute = `/about`
    const projectsRoute = `/projects`
    const contactRoute = `/contact`

    return (
        <header className="w-full">
            <nav className="relative w-full flex py-4 navbar navbar-expand-md">
                <div className="container-fluid w-full flex flex-wrap items-center justify-end">
                    <button className="navbar-toggler justify-self-start text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#headerNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img className="w-6" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/three-horizontal-lines-outline-icon.svg" alt="Menu button" />
                    </button>

                    <div className="collapse navbar-collapse flex-grow items-center bg-gray-100 md:bg-inherit shadow-lg md:shadow-inherit rounded-xl" id="headerNavBar">
                        <ul className="navbar-nav flex flex-col list-style-none w-full justify-center items-center gap-2 lg:gap-10 text-[#111827b3] text-lg font-bold">
                            <li className="nav-item p-2">
                                <Link className={`${homeRoute === pathname ? 'text-[#111827] focus:text-[#111827]' : 'hover:text-[#111827b3] focus:text-[#111827b3]'}`} to="/">Home</Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link className={`${aboutRoute === pathname ? 'text-[#111827] focus:text-[#111827]' : 'hover:text-[#111827b3] focus:text-[#111827b3]'}`} to="/about">About</Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link className={`${projectsRoute === pathname ? 'text-[#111827] focus:text-[#111827]' : 'hover:text-[#111827b3] focus:text-[#111827b3]'}`} to="/projects">Projects</Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link className={`${contactRoute === pathname ? 'text-[#111827] focus:text-[#111827]' : 'hover:text-[#111827b3] focus:text-[#111827b3]'}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;