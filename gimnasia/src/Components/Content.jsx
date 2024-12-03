import { content } from "../Constants";

const Content = () => {
  return (
    <section id="Content">
      <h2 className=" mb-8 text-center text-4xl tracking-tighter lg:text-5xl">
        Contenido
      </h2>
      <div className="container mx-auto px-4">
        {content.map((contenido, index) => (
          <div
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >
            <div className="flex-shrink-0 pr-8 text-2xl">
              {contenido.number}
            </div>

            <div className="w-1/3 flex-shrink-0">
              <img
                src={contenido.image}
                alt={contenido.title}
                className="h-auto rounded-3xl"
              />
            </div>

            <div className="pl-8 ">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-950">
                {contenido.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">{contenido.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
