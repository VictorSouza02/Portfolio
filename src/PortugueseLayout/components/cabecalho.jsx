import { Link, useLocation } from "react-router-dom";
import 'tw-elements';

const Cabecalho = () => {
    const { pathname } = useLocation()

    const homeRoute = `/pt/`
    const aboutRoute = `/pt/sobre`
    const projectsRoute = `/pt/projetos`
    const contactRoute = `/pt/contato`

    return (
        <header className="w-full">
            <nav className="relative w-full flex py-4 navbar navbar-expand-md">
                <div className="container-fluid w-full flex flex-wrap items-center justify-end">
                    <div
                        className="
                            navbar-toggler justify-self-start text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 
                            px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                        "
                        data-bs-toggle="collapse"
                        data-bs-target="#headerNavBar"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Abrir cabeçalho"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#111827" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>

                    <div
                        className="collapse navbar-collapse flex-grow items-center bg-gray-100 max-md:absolute max-md:top-12 max-md:left-[50%] 
                    max-md:translate-x-[-50%] w-[60%] p-2 md:bg-inherit shadow-lg md:shadow-inherit rounded-xl"
                        id="headerNavBar">
                        <ul
                            className="navbar-nav flex flex-col list-style-none w-full justify-center items-center gap-2 
                        lg:gap-10 text-[#111827b3] text-lg font-bold">
                            <li className="nav-item p-2">
                                <Link
                                    className={`${homeRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/pt/">
                                    Inicio
                                </Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link
                                    className={`${aboutRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/pt/sobre">
                                    Sobre
                                </Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link
                                    className={`${projectsRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/pt/projetos">
                                    Projetos
                                </Link>
                            </li>

                            <li className="nav-item p-2">
                                <Link
                                    className={`${contactRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/pt/contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho;