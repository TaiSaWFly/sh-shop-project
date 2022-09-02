import * as clothing from "./typesOfClothing";

const category = {
  women: [
    clothing.typesOfClothingWomen.jackets,
    clothing.typesOfClothingWomen.hoodiesAndSweatshirts,
    clothing.typesOfClothingWomen.poloShirts,
    clothing.typesOfClothingWomen.trousersAndChinos,
    clothing.typesOfClothingWomen.tShirts,
  ],

  men: [
    clothing.typesOfClothingMen.jackets,
    clothing.typesOfClothingMen.hoodiesAndSweatshirts,
    clothing.typesOfClothingMen.poloShirts,
    clothing.typesOfClothingMen.trousersAndChinos,
    clothing.typesOfClothingMen.tShirts,
  ],

  kids: [
    clothing.typesOfClothingKids.jackets,
    clothing.typesOfClothingKids.hoodiesAndSweatshirts,
  ],
};

export const categoryFor = [
  {
    url: "women",
    name: "Women",
    typesOfClothing: category.women,
  },
  {
    url: "men",
    name: "Men",
    typesOfClothing: category.men,
  },
  {
    url: "kids",
    name: "Kids",
    typesOfClothing: category.kids,
  },
];
