import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <section id="Footer">
      <div className="md:flex items-center justify-center lg:justify-evenly">
        <div className="flex flex-col gap-3 items-center md:items-baseline">
          <div>
            <h2 className="text-[#ff9bca] text-2xl">Nuestra direccion</h2>
            <p className="text-white">Calle ldksjdkfld, piso 2</p>
            <p className="text-white">Dolores, Buenos Aires</p>
          </div>

          <div>
            <h2 className="text-[#ff9bca] text-2xl"> Ponte en contacto</h2>
            <p className=" flex items-center text-white gap-2">
              {" "}
              <MdOutlineLocalPhone />
              02245xxxxx
            </p>
            <p className="flex items-center text-white gap-2">
              {" "}
              <CiMail />
              mili.rosales@hotmail.com
            </p>
            <p className="flex items-center text-white gap-2">
              {" "}
              <CiInstagram />
              Instagram
            </p>
            <p className="flex items-center text-white gap-2">
              {" "}
              <BsTwitterX />
              Twitter-X
            </p>
          </div>
        </div>

        <h2 className="w-auto m-8 leading-relaxed text-3xl items text-center tracking-tight flex-col text-[#ff9bca]">
          <p>Consulta precios y cupos</p>
          <p>Con nuestra instructora</p>
          <p>Milagros Rosales</p>
        </h2>
      </div>
    </section>
  );
};

export default Footer;
