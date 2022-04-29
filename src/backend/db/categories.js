import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
/*
   <iframe width="697" height="392" src="https://www.youtube.com/embed/PKZABq7Llzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

export const categories = [
  {
    _id: uuid(),
    categoryName: "flower",
    url:"https://youtu.be/PKZABq7Llzs",
    iframe: "" ,
    image: "https://i.ytimg.com/an_webp/PKZABq7Llzs/mqdefault_6s.webp?du=3000&sqp=CMukipMG&rs=AOn4CLDU_4QTTt2cDXvPY1uuqP6sy3-H-g",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "indoor",
    url:"https://youtu.be/kWr8SvbUGMo",
    iframe: "",
    image: "https://i.ytimg.com/an_webp/kWr8SvbUGMo/mqdefault_6s.webp?du=3000&sqp=CL6MipMG&rs=AOn4CLDtDPM-YRi6NrNFpNMWrLnpfMjohQ",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "shrubs",
    url:"https://youtu.be/kBrMR2m5G0o",
    iframe: "",
    image: "https://i.ytimg.com/an_webp/kBrMR2m5G0o/mqdefault_6s.webp?du=3000&sqp=CNikipMG&rs=AOn4CLAVD1UIL7Wjah8M_w_UA607y7ldNA",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "climber",
    url:"https://youtu.be/rEsMlbdC1r8",
    iframe: "",
    image: "https://i.ytimg.com/an_webp/rEsMlbdC1r8/mqdefault_6s.webp?du=3000&sqp=CM6iipMG&rs=AOn4CLA5FET-79jp_-cg4iURryb76K0wJA",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  
];
