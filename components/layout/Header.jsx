import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-12"
                                    src="/assets/imgs/logos/logo_easypallet.png"
                                    alt="EasyPallet"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="pt-4 pb-4">
                                <Link href="/">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="#flux">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Fluxo
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="#work">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Como Funciona
                                    </a>
                                </Link>
                            </li>
                            {/* <li className="pt-4 pb-4">
                                <Link href="#company">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Empresa
                                    </a>
                                </Link>
                            </li> */}
                            <li className="pt-4 pb-4">
                                <Link href="#testimonials">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Depoimentos
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="#contact">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Entre em Contato
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="hidden lg:block">
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-red-500 hover:text-red-500 rounded border border-red-200 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
