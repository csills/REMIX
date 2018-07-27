'use strict';
module.exports = (sequelize, DataTypes) => {
  var Remixes = sequelize.define('Remixes', {
    filepath: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Remixes.associate = function(models) {
    // associations can be defined here
    Remixes.belongsTo(models.Users);
    Remixes.belongsTo(models.Gallery);
  };
  return Remixes;
};