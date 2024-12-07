import miliabout from "../assets/miliabout.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="About">
      <h1 className=" mb-8 text-center text-5xl tracking-tighter lg:text-7xl">
        Nuestra Escuela
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img src={miliabout} className="rounded-3xl lg:-rotate-3" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            Que es la gimnasia artistica?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" mb-8 mt-1 h-2 w-56 bg-rose-400 "
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ullam fugit sit, minus aut voluptas cumque numquam. Fugiat
            aspernatur temporibus eveniet eius enim! Esse saepe, impedit quas
            officia qui delectus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque
            numquam. Fugiat aspernatur temporibus eveniet eius enim! Esse saepe,
            impedit quas officia qui delectus.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
