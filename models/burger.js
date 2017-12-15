module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  return burgers;
};
