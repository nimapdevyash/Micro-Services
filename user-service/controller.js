const User = require("./model");

async function createUser(req, res) {
  const { username, age } = req.body;

  if (!username || !age) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const user = await User.create({ username, age });

  if (!user) {
    return res.status(500).json({
      message: "user is not created",
    });
  }

  return res.status(200).json({
    message: "user created successfully",
    user,
  });
}

async function deleteUser(req, res) {
  const { username } = req.body;

  if (!username) {
    return res.status(404).json({
      message: "all credentials are required",
    });
  }

  const user = await User.findByPk(username);

  if (!user) {
    return res.status(404).json({
      message: "user does not exists",
    });
  }

  await user.destroy();

  return res.status(200).json({
    message: "user deleted succssfully",
  });
}

async function getUser(req, res) {
  const { username } = req.body;

  if (!username) {
    return res.status(404).json({
      message: "credentials are required",
    });
  }

  const user = await User.findByPk(username);

  if (!user) {
    return res.status(404).json({
      message: "user does not exists",
    });
  }

  return res.status(200).json({
    message: "user fetched successfully",
    data: user,
  });
}

function wrapper(fn) {
  return async function (...args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
    }
  };
}

module.exports = {
  createUser: wrapper(createUser),
  getUser: wrapper(getUser),
  deleteUser: wrapper(deleteUser),
};
