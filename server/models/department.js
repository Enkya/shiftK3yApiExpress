'use strict';

module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    title: DataTypes.STRING,
    allowNull: false,
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};
