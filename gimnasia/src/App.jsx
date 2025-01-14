import About from "./Sections/About";
import Content from "./Sections/Content";
import Footer from "./Sections/Footer";
import Gallery from "./Sections/Gallery";
import Navbar from "./Sections/Navbar";
import Schedule from "./Sections/Schedule";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="py-3 max-w-7xl mx-auto pt-10 px-6 bg-gradient-to-r from-transparent via-pink-200 to-transparent">
        <About />
        <Content />
        <Schedule />
        <Gallery />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto py-5 px-6 bg-[#8E4F6E]"
      >
        <Footer />
      </motion.div>
    </>
  );
}
