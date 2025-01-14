//imagenes para la seccion contenido
import contenido1 from "../assets/contenidoImg/contenido1.png";
import contenido3 from "../assets/contenidoImg/contenido3.png";
import contenido4 from "../assets/contenidoImg/contenido4.png";

//imagenes para la galeria
import galeria1 from "../assets/galeria/galeria1.png";
import galeria2 from "../assets/galeria/galeria2.png";
import galeria3 from "../assets/galeria/galeria3.png";
import galeria4 from "../assets/galeria/galeria4.png";
import galeria5 from "../assets/galeria/galeria5.png";
import galeria6 from "../assets/galeria/galeria6.png";
import galeria7 from "../assets/galeria/galeria7.png";
import galeria8 from "../assets/galeria/galeria8.png";
import galeria9 from "../assets/galeria/galeria9.png";
import galeria10 from "../assets/galeria/galeria10.png";
import galeria11 from "../assets/galeria/galeria11.png";
import galeria12 from "../assets/galeria/galeria12.png";
import galeria13 from "../assets/galeria/galeria13.png";
import galeria14 from "../assets/galeria/galeria14.png";
import galeria15 from "../assets/galeria/galeria15.png";
import galeria16 from "../assets/galeria/galeria16.png";
import galeria17 from "../assets/galeria/galeria17.png";
import galeria18 from "../assets/galeria/galeria18.png";

export const navItems = [
  { label: "Nosotros", href: "#About" },
  { label: "Contenido", href: "#Content" },
  { label: "Horarios", href: "#Schedule" },
  { label: "Galeria", href: "#Galery" },
];

export const content = [
  {
    number: 1,
    image: contenido1,
    title: "Barra fija",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque numquam",
  },
  {
    number: 2,
    image: contenido1,
    title: "barra asimetrica",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque numquam",
  },
  {
    number: 3,
    image: contenido3,
    title: "Viga de equilibrio",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque numquam",
  },
  {
    number: 4,
    image: contenido4,
    title: "Coreografia",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ullam fugit sit, minus aut voluptas cumque numquam",
  },
];

export const scheduleData = [
  {
    day: "lunes",
    classes: [
      {
        time: "19:00-20:00",
        type: "Pole Exotic",
        instructor: "Milagros Rosales",
        spots: 6,
      },
      { time: "20:15-21:15", type: "Pole Free", spots: 7 },
    ],
  },
  {
    day: "marțes",
    classes: [
      {
        time: "18:30-19:30",
        type: "Pole 1+",
        instructor: "Milagros Rosales",
        spots: 7,
      },
      { time: "19:30-20:30", type: "Pole 2", spots: 7 },
    ],
  },
  {
    day: "miercoles",
    classes: [
      {
        time: "19:00-20:00",
        type: "Stretching",
        instructor: "Milagros Rosales",
        spots: 7,
      },
    ],
  },
  {
    day: "jueves",
    classes: [
      {
        time: "17:30-18:30",
        type: "Pole 1",
        instructor: "Milagros Rosales",
        spots: 7,
      },
      { time: "18:30-19:30", type: "Stretching", spots: 10 },
      { time: "19:30-20:45", type: "Pole 2", spots: 7 },
    ],
  },
  {
    day: "viernes",
    classes: [
      {
        time: "19:00-20:00",
        type: "Stretching",
        instructor: "Milagros Rosales",
        spots: 7,
      },
    ],
  },
  {
    day: "sabado",
    classes: [
      {
        time: "11:00-12:15",
        type: "Exotic Tricks",
        instructor: "Milagros Rosales",
        spots: 7,
      },
      { time: "12:15-13:15", type: "Stretching", spots: 10 },
      { time: "13:15-14:15", type: "Pole Free", spots: 7 },
    ],
  },
  {
    day: "domingo",
    classes: [
      {
        time: "11:30-12:30",
        type: "Pole 3",
        instructor: "Milagros Rosales",
        spots: 10,
      },
      { time: "12:30-13:30", type: "Pole Free", spots: 7 },
    ],
  },
];

export const gallery = [
  {
    id: 1,
    title: "Cierre de fin de año",
    images: [
      galeria1,
      galeria2,
      galeria3,
      galeria4,
      galeria5,
      galeria6,
      galeria7,
      galeria8,
      galeria9,
      galeria10,
      galeria11,
      galeria12,
      galeria13,
      galeria14,
      galeria15,
      galeria16,
      galeria17,
      galeria18,
    ],
  },
  {
    id: 2,
    title: "Clases",
    images: [galeria4, galeria5, galeria6],
  },
];
