const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.555,
    reviews: [],
  },
];

const reviews = [];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const product = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(product);
  return product;
}

function addNewProductReview(id, rating, comment, productId) {
  const product = getProductById(productId);
  if (!product) throw Error();

  const review = {
    id,
    rating,
    comment,
    product,
  };

  reviews.push(review);
  product.reviews.push(review);

  return review;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
