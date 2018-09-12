'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {});
  Employee.associate = function(models) {
    Employee.hasOne(models.contact, {
      foreignKey: 'id',
      as: 'contact',
    })
  };
  return Employee;
};