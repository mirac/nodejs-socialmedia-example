module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    full_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    profile_picture: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
