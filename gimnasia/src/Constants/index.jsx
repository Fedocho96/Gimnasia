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

export const galery = [
  { image: galeria1, id: 1 },
  { image: galeria2, id: 2 },
  { image: galeria3, id: 3 },
  { image: galeria4, id: 4 },
  { image: galeria5, id: 5 },
  { image: galeria6, id: 6 },
  { image: galeria7, id: 7 },
  { image: galeria8, id: 8 },
  { image: galeria9, id: 9 },
  { image: galeria10, id: 10 },
];
