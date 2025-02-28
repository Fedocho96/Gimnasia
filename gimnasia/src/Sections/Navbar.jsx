import { Menu, X } from "lucide-react";
import { useState } from "react";
import mililogo from "../assets/mililogo.png";
import { navItems } from "../Constants";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Evita el comportamiento por defecto
    setMobileDrawerOpen(false); // Cierra el menú móvil si está abierto

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para navbar sticky
        behavior: "smooth",
      });
    }
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
              <motion.li
                key={index}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
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
              onClick={(e) => handleNavClick(e, "Footer")}
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

        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              className="fixed right-0 z-20 h-screen mt-3 bg-gradient-to-t from-black/70 to-white/70 w-full p-5 flex flex-col jusify-center
             items-center lg:hidden border border-t-1  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.ul
                className=" top-20 p-12 bg-white w-[90%] md:w-[60%] mx-auto rounded-md h-max text-center items-center grid gap-4 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                    transition={{
                      duration: 0.125,
                      ease: "easeInOut",
                    }}
                    key={index}
                    className="py-4 bg-slate-50 border rounded-full text-center border-pink-800 p-3 m-3 w-auto"
                  >
                    <a href={item.href} className="block w-full h-full">
                      {item.label}
                    </a>
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
                  onClick={(e) => handleNavClick(e, "Footer")}
                  className=" pt-3 mt-2 text-white bg-gradient-to-r from-pink-700 to-pink-400 py-2 px-3 rounded-md"
                >
                  Contactanos
                </motion.a>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
