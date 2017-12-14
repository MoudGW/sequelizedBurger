module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  });
  return burgers;
};
