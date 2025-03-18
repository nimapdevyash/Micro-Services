const { default: axios, get } = require("axios");
const Product = require("./model");

function wrapper(fn) {
  return async function (...args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      return args[1].status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

async function createProduct(req, res) {
  const { name, owner } = req.body;

  if (!name || !owner) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const product = await Product.create({ owner, name });

  if (!product) {
    throw new Error("product is not created");
  }

  return res.status(200).json({
    success: true,
    message: "product is created successfully",
    data: product,
  });
}

async function getProduct(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product does not exist",
    });
  }

  return res.status(200).json({
    success: true,
    message: "product is fetched successfully",
    data: product,
  });
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("product does not exists");
  }

  await product.destroy();

  return res.status(200).json({
    success: true,
    message: "product deleted sucdessfully",
  });
}

async function getAllProductOfOwner(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const products = await Product.findAndCountAll({
    where: { owner: username },
  });

  return res.status(200).json({
    success: true,
    message: "all products fetched successfully",
    data: products,
  });
}

async function getAllProducts(req, res) {
  const products = await Product.findAndCountAll({ where: {} });

  if (!products || products.count == 0) {
    return res.status(200).json({
      success: false,
      message: "products does not exist",
    });
  }

  return res.status(200).json({
    success: true,
    message: "product is fetched successfully",
    data: products,
  });
}

module.exports = {
  getProduct: wrapper(getProduct),
  createProduct: wrapper(createProduct),
  deleteProduct: wrapper(deleteProduct),
  getAllProductOfOwner: wrapper(getAllProductOfOwner),
  getAllProducts: wrapper(getAllProducts),
};
