import { Post } from "src/models";

export const fetchPostSlider = async (url?: string): Promise<Post[]> => await ([
  {
    id: "CH1",
    title: "start war",
    description: "Camiseta de hombre, verde militar de Mandalorian",
    offer: 10,
    price: 80991,
    likes: 3,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173083/236733_2_Varsity_MVS.jpg?v=638091326715200000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173084/236733-camiseta-hombre-mandalorian-manga-corta-1.jpg?v=638091326918630000"
    ]
  },
  {
    id: "CH2",
    title: "start war",
    description: "Camiseta de Mandalorian manga corta gris grafito para hombre",
    offer: 10,
    price: 76491,
    likes: 2,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173103/236793_Varsity_MVS.jpg?v=638092231626700000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173104/236793-camiseta-hombre-mandalorian-manga-corta-1.jpg?v=638092231921930000"
    ]
  },
  {
    id: "CH3",
    title: "start war",
    description: "Camiseta de hombre, manga corta blanca de Star Wars",
    offer: 10,
    price: 80991,
    likes: 30,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173187/236847-camiseta-hombre-star-wars-manga-corta-1.jpg?v=638098286660570000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173188/236847-camiseta-hombre-star-wars-manga-corta-4.jpg?v=638098287101230000"
    ]
  },
  {
    id: "CH4",
    title: "gragon ball",
    description: "Pantaloneta de baño de Dragon Ball Z negra y verde",
    offer: 10,
    price: 107991,
    likes: 35,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/172949/SummerChill_MVS_236706.jpg?v=638058525383870000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/172772/236706_1_LookBook_MVS_1.jpg?v=638042258807800000"
    ],
    isNew: true
  },
  {
    id: "CH5",
    title: "warner bros",
    description: "Gorra de hombre, negra/ verde de Rick and Morty",
    price: 59990,
    likes: 15,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/170168/JGL-RM023-1.jpg?v=637740725308000000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/170169/JGL-RM023-2.jpg?v=637740725932630000"
    ]
  },
  {
    id: "CH6",
    title: "start war",
    description: "Camiseta de hombre, verde militar de Mandalorian",
    offer: 10,
    price: 80991,
    likes: 3,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173083/236733_2_Varsity_MVS.jpg?v=638091326715200000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173084/236733-camiseta-hombre-mandalorian-manga-corta-1.jpg?v=638091326918630000"
    ]
  },
  {
    id: "CH7",
    title: "start war",
    description: "Camiseta de Mandalorian manga corta gris grafito para hombre",
    offer: 10,
    price: 76491,
    likes: 2,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173103/236793_Varsity_MVS.jpg?v=638092231626700000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173104/236793-camiseta-hombre-mandalorian-manga-corta-1.jpg?v=638092231921930000"
    ]
  },
  {
    id: "CH8",
    title: "start war",
    description: "Camiseta de hombre, manga corta blanca de Star Wars",
    offer: 10,
    price: 80991,
    likes: 30,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173187/236847-camiseta-hombre-star-wars-manga-corta-1.jpg?v=638098286660570000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/173188/236847-camiseta-hombre-star-wars-manga-corta-4.jpg?v=638098287101230000"
    ]
  },
  {
    id: "CH9",
    title: "gragon ball",
    description: "Pantaloneta de baño de Dragon Ball Z negra y verde",
    offer: 10,
    price: 107991,
    likes: 35,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/172949/SummerChill_MVS_236706.jpg?v=638058525383870000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/172772/236706_1_LookBook_MVS_1.jpg?v=638042258807800000"
    ],
    isNew: true
  },
  {
    id: "CH10",
    title: "warner bros",
    description: "Gorra de hombre, negra/ verde de Rick and Morty",
    price: 59990,
    likes: 15,
    img: [
      "https://moviesshopco.vteximg.com.br/arquivos/ids/170168/JGL-RM023-1.jpg?v=637740725308000000",
      "https://moviesshopco.vteximg.com.br/arquivos/ids/170169/JGL-RM023-2.jpg?v=637740725932630000"
    ]
  },
])