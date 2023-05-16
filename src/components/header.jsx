import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const { pathname } = useLocation()
    const [openHeader, setOpenHeader] = useState(false)

    const homeRoute = `/`
    const aboutRoute = `/about`
    const projectsRoute = `/projects`
    const contactRoute = `/contact`

    return (
        <header className="w-[90%] md:w-[70%] max-w-[1000px] mx-auto relative z-[1000]">
            <nav
                className="absolute flex w-full items-center justify-center py-2 mt-2">
                <div className="flex w-full flex-wrap items-center justify-between md:justify-center">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => setOpenHeader(!openHeader)}
                            className="md:hidden"
                            type="button"
                            aria-label="Trocar navegação"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#003459"
                                className="w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <Link
                        to='/'
                        className="justify-self-start md:order-[-1] md:hidden"
                        aria-label="Home"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                    </Link>

                    <div
                        className={`${openHeader
                            ? '!visible flex grow basis-[100%] items-center md:grow-0 md:basis-0 md:!flex md:bg-transparent mt-2 rounded-md shadow-md md:shadow-none text-[#111827b3] md:text-dark-blue font-bold bg-gray-100 z-[2000]'
                            : '!visible hidden grow basis-[100%] items-center md:grow-0 md:basis-0 md:!flex md:bg-transparent mt-2 rounded-md shadow-md md:shadow-none text-[#111827b3] md:text-dark-blue font-bold bg-gray-100 z-[2000]'
                            }`}
                    >
                        <ol
                            className="flex flex-col md:flex-row w-full ml-8 py-4 md:ml-0 md:py-0 gap-6 md:gap-14 list-disc md:list-none"
                        >
                            <li>
                                <Link
                                    onClick={() => setOpenHeader(false)}
                                    className={`${homeRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={() => setOpenHeader(false)}
                                    className={`${aboutRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={() => setOpenHeader(false)}
                                    className={`${projectsRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/projects">
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={() => setOpenHeader(false)}
                                    className={`${contactRoute === pathname
                                        ? 'text-[#111827]'
                                        : 'hover-underline-animation hover:drop-shadow-lg hover:text-[#111827]'}`}
                                    to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>
        </header>
    )
}