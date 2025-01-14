import { Menu, X } from "lucide-react";
import { useState } from "react";
import mililogo from "../assets/mililogo.png";
import { navItems } from "../Constants";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center mx-5">
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{
                duration: 0.125,
                ease: "easeInOut",
              }}
              href="#Footer"
              className=" text-white bg-gradient-to-r from-pink-700 to-pink-400 py-2 px-3 rounded-md"
            >
              Contactanos
            </motion.a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 h-screen mt-3 bg-gradient-to-t from-black/70 to-white/70 w-full p-5 flex flex-col jusify-center
             items-center lg:hidden border border-t-1  "
          >
            <ul className=" top-20 p-12 bg-white w-[90%] md:w-[60%] mx-auto rounded-md h-max text-center items-center grid gap-4 shadow-2xl">
              {navItems.map((item, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                  transition={{
                    duration: 0.125,
                    ease: "easeInOut",
                  }}
                  key={index}
                  className="py-4 bg-slate-50 border rounded-full text-center border-pink-800 p-3 m-3 w-auto"
                >
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{
                duration: 0.125,
                ease: "easeInOut",
              }}
              href="#Footer"
              className=" pt-3 mt-2 text-white bg-gradient-to-r from-pink-700 to-pink-400 py-2 px-3 rounded-md"
            >
              Contactanos
            </motion.a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
