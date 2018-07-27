'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gallery = sequelize.define('Gallery', {
    filepath: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Gallery.associate = function(models) {
    // associations can be defined here
    Gallery.hasMany(models.Remixes);
  };
  return Gallery;
};