import faker from "faker";
import _ from "lodash";

const brandAndImage = _.flatten(
  _.times(20, (i) => {
    return ["box", "carpet", "imbacombo", "shaker", "ziplock"].map(
      (brand, j) => {
        return { brand, image: `${brand}${i + 1}.png` };
      }
    );
  })
);

const imageColorMap = [
  { brand: "box1", color: "red" },
  { brand: "box2", color: "yellow" },
  { brand: "carpet1", color: "black" },
  { brand: "imbacombo1", color: "black" },
  { brand: "imbacombo2", color: "black" },
  { brand: "imbacombo4", color: "green" },
  { brand: "imbacombo5", color: "green" },
  { brand: "imbacombo6", color: "red" },
  { brand: "imbacombo7", color: "black" },
  { brand: "imbacombo8", color: "white" },
  { brand: "imbacombo9", color: "green" },
  { brand: "imbacombo10", color: "blue" },
  { brand: "shaker1", color: "black" },
  { brand: "shaker2", color: "green" },
  { brand: "shaker3", color: "blue" },
  { brand: "shaker4", color: "white" },
  { brand: "shaker5", color: "white" },
  { brand: "ziplock1", color: "green" },
  { brand: "ziplock2", color: "red" },
  { brand: "ziplock3", color: "black" },
  { brand: "ziplock4", color: "blue" },
  { brand: "ziplock5", color: "black" },
  { brand: "ziplock6", color: "red" },
  { brand: "ziplock7", color: "yellow" },
  { brand: "ziplock8", color: "black" },
  { brand: "ziplock9", color: "black" },
  { brand: "ziplock10", color: "green" },
  { brand: "ziplock11", color: "red" },
  { brand: "ziplock12", color: "red" },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getProducts = () => {
  const products = _.times(100, (index) => {
    const color = imageColorMap.find(
      (i) => i.brand === brandAndImage[index].image.replace(".jpg", "")
    ).color;
    // console.log(color);
    return {
      id: index,
      isAdvert: false,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      brand: brandAndImage[index].brand,
      image: brandAndImage[index].image,
      color: color,
      size: getRandomInt(3, 20),
      weight: getRandomInt(4, 40),
      shortDescription: faker.lorem.words(),
      modelNum: faker.random.number(),
      delivery: [
        faker.address.country(),
        faker.address.country(),
        faker.address.country(),
      ].join(", "),
      description: faker.lorem.paragraph().split(".", 2).join(".") + ".",
    };
  }).sort((a, b) => 0.5 - Math.random());
  return products;
};

export const getProductsData = (params) => {
  //params = { page: { index: 0, size: 15 }, filter: 'mepps', sort: {key:'price', direction:'asc'} };
  let products = getProducts();

  if (params && "filter" in params && params.filter.brand !== "none")
    products = products.filter(
      (product) => product.brand === params.filter.brand
    );

  if (params && "filter" in params && params.filter.color !== "none")
    products = products.filter(
      (product) => product.color === params.filter.color
    );

  if (params && "sort" in params && params.sort.key !== "none") {
    function compare(a, b) {
      if (a[params.sort.key] < b[params.sort.key]) return -1;
      if (a[params.sort.key] > b[params.sort.key]) return 1;
      return 0;
    }
    products = products.sort(compare);
    if (params.sort.direction === "desc") products = products.reverse();
  }

  if (params && "page" in params) {
    products = products.slice(
      parseInt(params.page.index),
      parseInt(params.page.index) + parseInt(params.page.size)
    );
  }

  return products;
};
export const getProductData = (id) => {
  let products = getProducts();
  let product = {};
  id = parseInt(id);

  if (!Number.isNaN(id) && products.length > id)
    product = products.find((product) => product.id === id);

  return product;
};
