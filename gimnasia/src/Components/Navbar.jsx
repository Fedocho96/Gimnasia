import { Menu, X } from "lucide-react";
import { useState } from "react";
import mililogo from "../assets/mililogo.png";
import { navItems } from "../Constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-12 w-12 mr-2 rounded-md"
              src={mililogo}
              alt="logo"
            />
            <span className="text-xl tracking-tight">MR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={item.index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button className=" text-white bg-gradient-to-r from-pink-700 to-pink-400 py-2 px-3 rounded-md">
              Contactanos
            </button>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-pink-200 w-full p-12 flex flex-col jusify-center
             items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 bg-slate-50 border rounded-full text-center border-pink-800 p-3 m-3 w-auto"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className=" pt-3 mt-2 text-white bg-gradient-to-r from-pink-700 to-pink-400 py-2 px-3 rounded-md">
              Contactanos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
