'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    github_id: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
   // User.hasMany(models.Remixes);
  };
  return Users;
};