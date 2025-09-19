import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md text-[#ce9b66] "
      style={{ backgroundColor: "rgba(16, 39, 63, 0.8)" }}
    >
      <div className="flex justify-between items-center py-2 px-6 md:px-10">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Regency Business Park"
            className="h-14 md:h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex xl:space-x-24 lg:space-x-10 space-x-10 text-sm font-bold">
            <li>
              <a
                href="/"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                HOME
              </a>
            </li>

            <li className="relative group">
              <a
                href="/masterplan"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-500"
              >
                MASTER PLAN
              </a>
            </li>

            {/* <ul className="absolute left-0 top-full mt-0 hidden w-44 bg-white/50 text-gray-800 rounded-md shadow-lg group-hover:block z-50">
                <li>
                  <a
                    href="#site-location"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Site Location
                  </a>
                </li>
                <li>
                  <a
                    href="#neighbourhood"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Neighbourhood
                  </a>
                </li>
                <li>
                  <a
                    href="#road-network"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Road Network
                  </a>
                </li>
              </ul> */}


            {/* <li>
              <a
                href="/facilities"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                FACILITIES
              </a>
            </li> */}

            {/* Buildings */}
            <li className="relative group">
              <a
                href="/explorebuildings"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-500"
              >
                EXPLORE BUILDINGS
              </a>
              {/* <ul className="absolute left-0 top-full mt-0 hidden w-44 bg-white/50 text-gray-800 rounded-md shadow-lg group-hover:block z-50">
                <li>
                  <a
                    href="#tower1"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Tower 1
                  </a>
                </li>
                <li>
                  <a
                    href="#tower2"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Tower 2
                  </a>
                </li>
                <li>
                  <a
                    href="#tower3"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Tower 3
                  </a>
                </li>
                <li>
                  <a
                    href="#tower4"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Tower 4
                  </a>
                </li>
                <li>
                  <a
                    href="#tower5"
                    className="block px-4 py-2 hover:bg-[rgba(16,39,63,0.8)] hover:text-orange-500"
                  >
                    Tower 5
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="relative group">
              <a
                href="/location"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-500"
              >
                LOCATION
              </a></li>
            <li>
              <a
                href="/gallery"
                className="relative hover:text-orange-500 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                GALLERY
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="bg-[rgba(16,39,63,0.5)] lg:hidden mt-2">
          <nav className="text-[#ce9b66] px-6 py-6">
            <ul className="flex flex-col text-lg font-medium space-y-4">
              <li>
                <a
                  href="/"
                  className="hover:text-orange-400 transition border-b border-[#ce9b66]/20 pb-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>

              {/* Location submenu */}
              <li>
                <button
                  // onClick={() => toggleSubmenu("location")}
                  className="w-full flex justify-between items-center border-b border-[#ce9b66]/20 pb-2 hover:text-orange-400 transition"
                >
                  <a href="/masterplan">Master Plan</a>

                  {/* <HiChevronDown /> */}
                </button>
                {/* {openSubmenu === "location" && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <a href="#site-location" onClick={() => setIsOpen(false)}>
                        Site Location
                      </a>
                    </li>
                    <li>
                      <a href="#neighbourhood" onClick={() => setIsOpen(false)}>
                        Neighbourhood
                      </a>
                    </li>
                    <li>
                      <a href="#road-network" onClick={() => setIsOpen(false)}>
                        Road Network
                      </a>
                    </li>
                  </ul>
                )} */}
              </li>

              {/* <li>
                <a
                  href="/facilities"
                  className="hover:text-orange-400 transition border-b border-[#ce9b66]/20 pb-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Facilities
                </a>
              </li> */}

              {/* Towers submenu */}
              <li >
                <button
                  onClick={() => toggleSubmenu("towers")}
                  className="w-full flex justify-between items-center border-b border-[#ce9b66]/20 pb-2 hover:text-orange-400 transition"
                >
                  {/* Explore Buildings <HiChevronDown /> */}
                  <a
                    href="/explorebuildings"
                    className="hover:text-orange-400 transition  block"
                    onClick={() => setIsOpen(false)}
                  >
                    Explore Buildings
                  </a>
                </button></li>

              <li>
                <a
                  href="/location"
                  className="hover:text-orange-400 transition border-b border-[#ce9b66]/20 pb-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Location
                </a>
              </li>
              {/*   {openSubmenu === "towers" && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <a href="#tower1" onClick={() => setIsOpen(false)}>
                        Tower 1
                      </a>
                    </li>
                    <li>
                      <a href="#tower2" onClick={() => setIsOpen(false)}>
                        Tower 2
                      </a>
                    </li>
                    <li>
                      <a href="#tower3" onClick={() => setIsOpen(false)}>
                        Tower 3
                      </a>
                    </li>
                    <li>
                      <a href="#tower4" onClick={() => setIsOpen(false)}>
                        Tower 4
                      </a>
                    </li>
                    <li>
                      <a href="#tower5" onClick={() => setIsOpen(false)}>
                        Tower 5
                      </a>
                    </li>
                  </ul>
                )}
              </li> */}

              <li>
                <a
                  href="/gallery"
                  className="hover:text-orange-400 transition border-b border-[#ce9b66]/20 pb-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
