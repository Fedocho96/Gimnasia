//imagenes para la seccion contenido
import contenido1 from "/contenido/contenido1.webp";
import contenido2 from "/contenido/contenido2.webp";
import contenido3 from "/contenido/contenido3.webp";
import contenido4 from "/contenido/contenido4.webp";

export const navItems = [
  { label: "Nosotros", href: "#About" },
  { label: "Contenido", href: "#Content" },
  { label: "Horarios", href: "#Schedule" },
  { label: "Galeria", href: "#Gallery" },
];

export const content = [
  {
    number: 1,
    image: contenido1,
    title: "Salto",
    label:
      "El salto en gimnasia artística es un aparato donde los gimnastas impulsan su cuerpo sobre una mesa de salto, realizando acrobacias en el aire antes de aterrizar.",
  },
  {
    number: 2,
    image: contenido2,
    title: "Paralelas asimetricas",
    label:
      " Las paralelas asimétricas son un aparato de gimnasia artística femenina con dos barras a diferente altura, donde la gimnasta realiza giros, saltos y transiciones con fuerza y coordinación.",
  },
  {
    number: 3,
    image: contenido3,
    title: "Viga de equilibrio",
    label:
      "Desafío a la precisión y control, perfeccionando posturas, giros y saltos sobre una superficie estrecha",
  },
  {
    number: 4,
    image: contenido4,
    title: "Suelo",
    label:
      "El suelo en gimnasia artística es un área donde los gimnastas realizan rutinas con acrobacias, saltos, giros y movimientos coreografiados, combinando fuerza, flexibilidad y expresión artística.",
  },
];

export const scheduleData = [
  {
    day: "Lunes",
    classes: [
      {
        time: "18:30 - 19:30",
        type: "Inicial 1",
        instructor: "Mili, Nadi y Cele",
      },
      { time: "19:30-20:30", type: "Competencia", instructor: "Mili" },
    ],
  },
  {
    day: "Marțes",
    classes: [
      {
        time: "10:30 - 11:30",
        type: "KINDER T.M",
        instructor: "Mili y Juli",
      },
      {
        time: "16:30 - 17:30",
        type: "KINDER T.T",
        instructor: "Mili y Juli",
      },
      {
        time: "17:30 - 18:30",
        type: "Intermedio 1",
        instructor: "Mili y Juli",
      },
      {
        time: "18:30 - 19:30",
        type: "Intermedio 2",
        instructor: "Mili, Nadi y Cele",
      },
      {
        time: "19:30 - 21:00",
        type: "Avanzados",
        instructor: "Mili",
      },
    ],
  },
  {
    day: "Miercoles",
    classes: [
      {
        time: "18:30 - 19:30",
        type: "Incial 1",
        instructor: "Mili, Nadi y Cele",
      },
      {
        time: "19:30 - 20:30",
        type: "Competencia",
        instructor: "Mili",
      },
    ],
  },
  {
    day: "Jueves",
    classes: [
      {
        time: "10:30 - 11:30",
        type: "Kinder T.M",
        instructor: "Mili y Juli",
      },
      {
        time: "16:30 - 17:30",
        type: "Kinder T.T",
        instructor: "Mili y Juli",
      },
      {
        time: "17:30 - 18:30",
        type: "Intermedio 1",
        instructor: "Mili y Juli",
      },
      {
        time: "18:30 - 19:30",
        type: "Intermedio 2",
        instructor: "Mili, Nadi y Cele",
      },
      {
        time: "19:30 - 21:00",
        type: "Avanzados",
        instructor: "Mili",
      },
    ],
  },
];
