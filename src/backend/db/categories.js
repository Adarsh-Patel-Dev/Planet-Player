import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Ferrari",
    url:"https://youtu.be/PKZABq7Llzs",
    iframe: "" ,
    image: "https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png",
    description:
      "Ferrari’s symbol can be traced to the Italian fighter ace Francesco Baracca who painted the black prancing horse onto the fuselage of his plane. He recorded 34 kills and was killed in 1918, becoming a national hero",
  },
  {
    _id: uuid(),
    categoryName: "BMW",
    url:"https://youtu.be/kWr8SvbUGMo",
    iframe: "",
    image: "https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",
    description:
      "For only the fifth time since its introduction in 1917, BMW is redesigning its logo, the famous roundel.For BMW, the blue and white colors of the BMW logo symbolized the Bavarian flag colors and represented the company’s origin.",
  },
  {
    _id: uuid(),
    categoryName: "Lamborghini",
    url:"https://youtu.be/kBrMR2m5G0o",
    iframe: "",
    image: "https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png",
    description:
      "The Lamborghini logo is in the shape of a shield that is filled with a black background and outlined with gold. Across the top of the shield is the word Lamborghini in capital letters above an image of a golden bull.",
  },
  {
    _id: uuid(),
    categoryName: "Bugatti",
    url:"https://youtu.be/rEsMlbdC1r8",
    iframe: "",
    image: "https://www.carlogos.org/logo/Bugatti-logo-1024x768.png",
    description:
      "Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then German city of Molsheim, Alsace by Italian-born Ettore Bugatti. In the 1990s, an Italian entrepreneur revived it as a builder of limited production exclusive sports cars. Today, the name is owned by German automobile manufacturing group Volkswagen.",
  },
  {
    _id: uuid(),
    categoryName: "Audi",
    url:"https://youtu.be/rEsMlbdC1r8",
    iframe: "",
    image: "https://www.carlogos.org/car-logos/audi-logo-2016.png",
    description:
      "In 1932, the four companies Audi, DKW, Horch and Wanderer joined together to form Auto Union AG, which would later become AUDI AG. And the company needed a new logo. The four interlocking rings were born.Audi AG, also simply known as Audi, is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles.",
  },
  
  
];
