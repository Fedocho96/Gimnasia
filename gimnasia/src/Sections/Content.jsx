import { content } from "../Constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const Content = () => {
  return (
    <section id="Content">
      <h2 className=" mb-8 text-center text-4xl tracking-tighter lg:text-5xl">
        Contenido
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {content.map((contenido, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >

            <div className="w-1/3 flex-shrink-0">
              <img
                src={contenido.image}
                alt={contenido.title}
                className="w-full max-h-[520px] object-cover rounded-3xl shadow-md"
              />
            </div>

            <div className="pl-8 ">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-950">
                {contenido.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">{contenido.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Content;
