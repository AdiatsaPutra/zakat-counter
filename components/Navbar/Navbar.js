import React from "react";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 border-b-2 fixed top-0 w-full bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-500">
              Zakaat
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              A
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-500 hover:text-gray-900 transition-all duration-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/penghitung-zakat">
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-500 hover:text-gray-900 transition-all duration-500">
                    Penghitung zakat
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-500 hover:text-gray-900 transition-all duration-500">
                    Info
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
