'use strict';

module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};
