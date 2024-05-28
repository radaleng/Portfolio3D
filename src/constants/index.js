import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  smartpark,
  messenger,
  threejs,
  itticket,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Gestion de restauration",
    company_name: "Le Bambou Vert",
    iconBg: "#383E56",
    date: "March 2011 - April 2021",
    points: [
      "Suivre les niveaux de stocks, passer des commandes et optimiser les inventaires.",
      "Établir des relations avec les fournisseurs, négocier des contrats et assurer la qualité des produits.",
      "Service à la clientèle",
      "Gérer les réservations et gérer les commandes de livraisons.",
    ],
  },
  {
    title: "Serveur",
    company_name: "Pho Nguyen",
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Feb 2017",
    points: [
      "Acceuil et service aux clients",
      "Maintien de la propreté de l'espace de restauration et respect des normes d'hygiène",
      "Gérer des transactions de paiments",
      "Travail en équipe avec d'autres membres pour assurer un service de qualité",
    ],
  },
  {
    title: "Commis en Pharmacie",
    company_name: "Brunet",
    iconBg: "#383E56",
    date: "Sept 2015 - Jan 2017",
    points: [
      "Accueil et assistance aux clients dans la pharmacie en répondant à leurs questions et en les guidant vers les produits appropriés.",
      "Réception, vérification et rangement des livraisons de produits pharmaceutiques et en vente libre.",
      "Gestion des stocks en veillant à ce que les produits soient correctement étiquetés, rangés et vérifiés pour leur date de péremption.",
      "Entretien et nettoyage de l'espace de vente et de travail conformément aux normes d'hygiène et de sécurité."
    ],
  }
];

const projects = [
  {
    name: "Smart Park",
    description:
      "Une application mobile qui permet aux utilisateurs de visualiser les places de stationnement disponibles dans la ville de Montréal, telles que celles enregistrées par la ville  de Montréal, et de savoir si du temps de stationnement est encore disponible sur chaque espace. Une solution pratique pour trouver un stationnement plus facilement et éviter de surpayer la ville.",
    tags: [
      {
        name: "Android-Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: smartpark,
    source_code_link: "https://gitfront.io/r/radaleng/6q8F2jEBxWKY/SmartPark-gitfront/",
  },
  {
    name: "Application de messagerie",
    description:
      "Conception et développement d'une application de messagerie en utilisant les technologies Angular et Sprinboot. Application permet aux utilisateurs d'échanger des messages de manière rapide et sécurisée.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://gitfront.io/r/radaleng/trCQJRJFYLu8/messenger-app-gitfront/",
  },
  {
    name: "IT Ticket",
    description:
      "Une application de gestion de système de IT Ticket avec le framework MERN. Il permet à une compagnie d'utiliser une système de ticket, pour recevoir les complaintes et problèmes des utilisateurs sous forme de tickets. Permettant une communication plus simple avec les utilisateurs",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },{
        name: "NextJS",
        color: "green-text-gradient",
      },
    ],
    image: itticket,
    source_code_link: "https://gitfront.io/r/radaleng/8ccHJ8bikJ51/IT-ticket-gitfront/",
  },
];

export { services, technologies, experiences, projects };