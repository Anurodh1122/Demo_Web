import { useState, useEffect } from "react";
import Arrow from "./Arrow";
import SearchIcon from "./SearchIcon";


export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate progress (0 = top, 1 = scroll threshold)
  const scrollThreshold = 20; // adjust based on Hero height
  const progress = Math.min(scrollY / scrollThreshold, 1);

  // Animations
  const navOpacity = 1 - progress; // fade nav items
  const actionsOpacity = 1 - progress; // fade language/signin
  const searchTranslate = progress * 150; // move search to right-most


  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 flex items-center transition-all"
        style={{
          backgroundColor: `rgb(30,41,59,${0.9 * (1 - progress)})`,
          paddingTop: `${14 - progress * 4}px`,
          paddingBottom: `${14 - progress * 4}px`,
        }}
      >
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <div className="flex items-center text-xl font-bold">
          Talent Squad
        </div>

        {/* Navigation */}
        <nav
          className="hidden md:flex gap-5 ml-10 relative transition-opacity duration-300"
          style={{ opacity: navOpacity }}
        >

          {/* SERVICES */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="group flex flex-col items-center font-medium hover:text-indigo-500"
            >
              Services
              <Arrow
                open={openMenu === "services"}
                className={`ml-1 transition-opacity ${
                    openMenu === "services" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>

            {openMenu === "services" && (
              <div className="absolute left-0 mt-3 w-72 bg-white text-slate-800 rounded shadow-lg animate-dropdown">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-slate-100">HR & Payroll Outsourcing</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Staffing / Employer of Record</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Company Formation & Accounting</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Immigration Support</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Education & Internship Programs</li>
                </ul>
              </div>
            )}
          </div>

          {/* PROGRAMS */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("programs")}
              className="group flex flex-col items-center font-medium hover:text-indigo-500"
            >
              Programs
              <Arrow
                open={openMenu === "programs"}
                className={`ml-1 transition-opacity ${
                    openMenu === "programs" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>

            {openMenu === "programs" && (
              <div className="absolute left-0 mt-3 w-64 bg-white text-slate-800 rounded shadow-lg animate-dropdown">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-slate-100">Internships & Mobility</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Erasmus+ / Exchange</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Language Programs</li>
                  <li className="px-4 py-2 hover:bg-slate-100 font-medium text-slate-600">
                    Apply as a Student
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* PARTNERS */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("partners")}
              className="group flex flex-col items-center font-medium hover:text-indigo-500"
            >
              Partners
              <Arrow
                open={openMenu === "partners"}
                className={`ml-1 transition-opacity ${
                    openMenu === "partners" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>

            {openMenu === "partners" && (
              <div className="absolute left-0 mt-3 w-64 bg-white text-slate-800 rounded shadow-lg animate-dropdown">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-slate-100">Universities</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Employers</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Agents & Channel Partners</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Affiliate Program</li>
                </ul>
              </div>
            )}
          </div>

          {/* ABOUT */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("about")}
              className="group flex flex-col items-center font-medium hover:text-indigo-500"
            >
              About
              <Arrow
                open={openMenu === "about"}
                className={`ml-1 transition-opacity ${
                    openMenu === "about" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>

            {openMenu === "about" && (
              <div className="absolute left-0 mt-3 w-56 bg-white text-slate-800 rounded shadow-lg animate-dropdown">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-slate-100">About Talent Squad</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Careers</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Insights / Blog</li>
                  <li className="px-4 py-2 hover:bg-slate-100">Contact</li>
                </ul>
              </div>
            )}
          </div>

        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            className="hover:text-blue-400"
            style={{ transform: `translateX(${searchTranslate}px)` }}
          >
            <SearchIcon className="w-6 h-6 text-white" />
          </button>
          <select
            className="bg-slate-700 text-white appearance-none rounded px-4 py-2 transition-opacity duration-300"
            style={{ opacity: actionsOpacity }}
          >
            <option>EN</option>
            <option>PL</option>
            <option>DE</option>
          </select>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition-opacity duration-300"
            style={{ opacity: actionsOpacity }}
          >
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
}