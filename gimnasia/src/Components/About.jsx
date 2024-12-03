import miliabout from "../assets/miliabout.png";

const About = () => {
  return (
    <div className="flex justify-between w-full h-full relative bg-gradient-to-tr from-pink-600 rounded-lg">
      <div className=" flex flex-col w-2/3 gap-y-10 items-center justify-center text-center">
        <h1 className="text-7xl text-white text-center">QUIENES SOMOS</h1>
        <p className="text-white text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id
          quasi dicta voluptatum. Hic, corrupti dolorem inventore eligendi
          quibusdam quam accusantium, ipsa expedita recusandae repellat vitae
          qui accusamus deserunt magnam!
        </p>
        <button
          className=" w-1/2 text-pink-500 bg-slate-100 py-2 px-3 rounded-md
        hover:bg-gradient-to-r from-purple-900 to-purple-400 hover:text-white hover:shadow-lg"
        >
          Contactanos
        </button>
      </div>
      <div>
        <img
          className="object-contain rounded-md shadow-xl shadow-slate-950"
          src={miliabout}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
