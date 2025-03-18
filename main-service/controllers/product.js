const { Producturl } = require("../../urls");
const wrapper = require("./../../wrapper");
const axios = require("axios");

async function createProduct(req, res) {
  const { name, owner } = req.body;

  if (!name || !owner) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const response = await axios.post(Producturl, {
    name,
    owner,
  });

  return res.status(200).json(response.data);
}

async function getProduct(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const response = await axios.get(`${Producturl}/${id}`);

  return res.status(200).json(response.data);
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  await axios.delete(`${Producturl}/${id}`);

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

  const response = await axios.get(`${Producturl}/user/${username}`);

  return res.status(200).json(response.data);
}

async function getAllProducts(req, res) {
  const products = await axios.get(Producturl);

  return res.status(200).json(products.data);
}

module.exports = {
  getProduct: wrapper(getProduct),
  createProduct: wrapper(createProduct),
  deleteProduct: wrapper(deleteProduct),
  getAllProductOfOwner: wrapper(getAllProductOfOwner),
  getAllProducts: wrapper(getAllProducts),
};
