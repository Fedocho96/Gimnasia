import React, { useState } from "react";
import { gallery } from "../Constants";
import ImageSlider from "../Components/ImageSlider";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setActiveIndex((prevIndex) => (prevIndex + 1) % galery.length);

  const prevImage = () =>
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + galery.length) % galery.length
    );

  return (
    <section id="Galery " className="min-h-screen my-5">
      <h2 className="my-4 py-3 text-center text-4xl tracking-tighter lg:text-5xl">
        Galería
      </h2>

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8 "
      >
        {gallery.map((album) => (
          <div className="flex flex-col items-center" key={album.id}>
            <h2 className="text-4xl font-semibold text-center">
              {album.title}
            </h2>
            <div className=" mb-5 mt-1 h-1 w-60 -rotate-1 bg-rose-400" />
            <ImageSlider images={album.images} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
