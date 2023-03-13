import { PostDetail } from "src/models";

export const fetchPostDetail = async (url?: string): Promise<PostDetail> => await (
  {
    id: "236732-130908-M",
    title: "start war",
    description: "CHAQUETA GÉNERO NEUTRO, CAQUI CON CIERRE DE MANDALORIAN",
    offer: 10,
    aditionalInfo: "El modelo mide 1,88CM y tiene una talla L",
    price: 259990,
    likes: 3,
    img: [
      "https://moviesshopco.vtexassets.com/arquivos/ids/173068-800-800?v=638091310430670000&width=800&height=800&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173069-1200-1200?v=638091311513030000&width=1200&height=1200&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173070-1200-1200?v=638091311685100000&width=1200&height=1200&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173071-1200-1200?v=638091311783300000&width=1200&height=1200&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173072-1200-1200?v=638091312048800000&width=1200&height=1200&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173073-1200-1200?v=638091312233030000&width=1200&height=1200&aspect=true",
      "https://moviesshopco.vtexassets.com/arquivos/ids/173077-1200-1200?v=638091313610530000&width=1200&height=1200&aspect=true"
    ],
    sizes: ["S", "M", "L", "XL"],
    info: [
      {
        title: "Descripción de producto",
        description: [{
          text: "¡El estilo que cautivará su clóset! Una chaqueta ideal para acompañar sus ocasiones más especiales y lucir muy cool. Cuenta con cierre en frente para más practicidad y comodidad. Bolsillos laterales y cuello redondo que lo harán sentir cómodo y lleno de confort. Estampado posterior, mangas y en el frente. Cuello, puños y ruedo en contraste. Perfecta para combinar con jean y tenis."
        }]
      },
      {
        title: "Especificaciones",
        description: [
          {
            title: "País de fabricación",
            text: "Colombia - FABRICANTE/IMPORTADOR: Maquila Internacional de confección"
          },
          {
            title: "Registro Sic",
            text: "Colombia - FABRICANTE/IMPORTADOR: Maquila Internacional de confección"
          },
          {
            title: "Especificaciones",
            text: "Diseño: Chaqueta impermeable con cierre frontal, estampado en mangas y espalda. Cuello redondo y bolsillos laterales. Estampado frontal"
          },
          {
            title: "Color",
            text: "Caqui/Negro"
          },
        ]
      },
      {
        title: "Composición",
        description: [
          {
            text: "74% Poliéster 24% Algodón 2% Elastano"
          }
        ]
      },
      {
        title: "Cuidados",
        description: [
          {
            text: "- Lavar a mano o en máquina - No lavar en seco - No dejar en remojo - No retorcer ni exprimir - Usar agua fría - Usar jabón suave - No usar blanqueador - No blanquear - No usar secadora - No planchar - Secado en tendedero a la sombra"
          }
        ]
      },
      {
        title: "Descubre más",
        description: [
          {
            text: "¡Una chaqueta muy cool! Ahora los looks serán más auténticos y llenos de estilo. Lucirá increíble en cualquier ocasión. Sigue en Movies y conoce más prendas como esta."
          }
        ]
      },
    ]
  }
)