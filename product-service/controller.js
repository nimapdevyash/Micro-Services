const { default: axios, get } = require("axios");
const Product = require("./model");

function wrapper(fn) {
  return async function (...args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      console.log(error);
      args[1].send(error.message);
    }
  };
}

async function createProduct(req, res) {
  const { name, owner } = req.body;

  if (!name || !owner) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const product = await Product.create({ owner, name });

  if (!product) {
    throw new Error("product is not created");
  }

  return res.status(200).json({
    message: "product is created successfully",
    data: product,
  });
}

async function getProduct(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "product does not exist",
    });
  }

  return res.status(200).json({
    message: "product is fetched successfully",
    data: product,
  });
}

async function deleteProduct(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("product does not exists");
  }

  await product.destroy();

  return res.status(200).json({
    message: "product deleted sucdessfully",
  });
}

async function getAllProductOfOwner(req, res) {
  const { username } = req.body;

  if (!username) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const user = await axios("http://localhost:3002", {
    method: "Get",
    data: {
      username,
    },
  });

  console.log("user : ", user);

  if (!user) {
    return res.status(404).json({
      message: "user does not exist",
    });
  }

  const products = await Product.findAll({ where: { owner: username } });

  if (!products || products.length == 0) {
    return res.status(500).json({
      message: "no products found",
    });
  }

  return res.status(200).json({
    message: "all products fetched successfully",
    data: products,
  });
}

module.exports = {
  getProduct: wrapper(getProduct),
  createProduct: wrapper(createProduct),
  deleteProduct: wrapper(deleteProduct),
  getAllProductOfOwner: wrapper(getAllProductOfOwner),
};
