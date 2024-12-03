import miliabout from "../assets/miliabout.png";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h1 className=" mb-8 text-center text-5xl tracking-tighter lg:text-7xl">
        Nuestra Escuela
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img src={miliabout} className="rounded-3xl lg:-rotate-3" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <h2 className="text-4xl tracking-tighter lg:text-6xl">
            Que es la gimnasia artistica?
          </h2>
          <div className="mb-8 mt-1 h-2 w-56 bg-rose-400 lg:-rotate-3" />
          <p className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ullam fugit sit, minus aut voluptas cumque numquam. Fugiat
            aspernatur temporibus eveniet eius enim! Esse saepe, impedit quas
            officia qui delectus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque
            numquam. Fugiat aspernatur temporibus eveniet eius enim! Esse saepe,
            impedit quas officia qui delectus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
