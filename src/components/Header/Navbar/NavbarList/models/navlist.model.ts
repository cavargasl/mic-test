export interface MenuList {
  title: string
  subMenu?: string[]
}

export const MenuList: MenuList[] = [
  {
    title: "Mujer",
    subMenu: [
      "Camisetas",
      "Pijamas",
      "Ropa interior",
      "Chaqueta y buzos",
      "Joggers, pantalones y shorts",
      "Calzado",
      "Accesorios"
    ]
  },
  {
    title: "Hombre",
    subMenu: [
      "Camisetas",
      "Pijamas y ropa interior",
      "Chaqueta y buzos",
      "Joggers, pantalones y bermudas",
      "Accesorios",
      "Pantalonetas de baño",
    ]
  },
  {
    title: "New arrivals"
  },
  {
    title: "Básicos"
  },
  {
    title: "Ofertas"
  }
]