const { Userurl } = require("../../urls");
const axios = require("axios");
const wrapper = require("../../wrapper");

async function createUser(req, res) {
  const { username, age } = req.body;

  if (!username || !age) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  const response = await axios.post(Userurl, {
    username,
    age,
  });

  return res.status(200).json(response.data);
}

async function deleteUser(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "all credentials are required",
    });
  }

  await axios.delete(`${Userurl}/${username}`);

  return res.status(200).json({
    success: true,
    message: "user deleted succssfully",
  });
}

async function getUser(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "credentials are required",
    });
  }

  const response = await axios.get(`${Userurl}/${username}`);

  return res.status(200).json(response.data);
}

async function getAllUsers(req, res) {
  const response = await axios.get(Userurl);

  return res.status(200).json(response.data);
}

module.exports = {
  createUser: wrapper(createUser),
  getUser: wrapper(getUser),
  deleteUser: wrapper(deleteUser),
  getAllUsers: wrapper(getAllUsers),
};
