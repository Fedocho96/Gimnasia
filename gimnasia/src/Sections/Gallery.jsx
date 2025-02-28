import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const constrainRef = useRef(null); // Referencia para restringir el drag
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((err) => console.error("Error cargando la galería:", err));
  }, []);

  return (
    <section id="Gallery" className="my-5 container">
      <h1 className="my-4 py-3 text-center text-4xl tracking-tighter lg:text-5xl">
        Galería
      </h1>

      {gallery.length > 0 ? (
        gallery.map((album, index) => (
          <div className="" key={album.id}>
            <h2 className="flex flex-col items-center justify-center text-center text-2xl font-semibold text-gray-700">
              {album.title}
              <div className="h-1 w-6/12 border-t-4 border-dotted border-pink-400" />
            </h2>

            {/* Galería con Drag */}
            <motion.div ref={constrainRef} className="overflow-hidden py-5">
              <motion.div
                className="flex gap-3 min-w-max cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={constrainRef}
              >
                {album.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Imagen ${idx + 1} de ${album.title}`}
                    loading="lazy"
                    className="h-80 w-96 object-cover rounded-lg pointer-events-none"
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Cargando galería...</p>
      )}
    </section>
  );
};

export default Gallery;
