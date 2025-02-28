import miliabout from "../assets/miliabout.png";
import { motion } from "framer-motion";
import { CiCircleCheck } from "react-icons/ci";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="About">
      <h1 className="mb-8 text-center text-5xl tracking-tighter lg:text-7xl">
        Nuestra Escuela
      </h1>
      <div className="flex flex-wrap">
        {/* Imagen */}
        <div className="flex items-center justify-center w-full p-4 lg:w-1/2">
          <img src={miliabout} className="rounded-3xl lg:-rotate-3" />
        </div>

        {/* Contenido */}
        <div className="w-full px-2 lg:w-1/2 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl text-center"
          >
            Descubre la Magia de la Gimnasia Artística
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-56 bg-rose-400"
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            La gimnasia artística es una disciplina que combina fuerza,
            flexibilidad y expresión corporal. En nuestra escuela, no solo
            entrenamos habilidades físicas, sino que también fomentamos valores
            esenciales que acompañan a nuestros gimnastas en su desarrollo
            personal.
          </motion.p>

          {/* Beneficios */}
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 text-xl tracking-tight lg:max-w-md"
          >
            {[
              "Mejora la coordinación, el equilibrio y la resistencia.",
              "Aumenta la confianza y la disciplina.",
              "Desarrolla la creatividad y la expresión corporal.",
              "Fomenta el trabajo en equipo y la perseverancia.",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                <CiCircleCheck className="w-7 h-7 bg-pink-700 rounded-full text-white flex-shrink-0 p-1" />
                <p>{text}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
