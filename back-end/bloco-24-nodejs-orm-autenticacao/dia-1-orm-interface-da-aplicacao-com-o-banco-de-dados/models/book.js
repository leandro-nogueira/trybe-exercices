const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return User;
};

module.exports = User;