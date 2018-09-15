'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    district: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    country: DataTypes.STRING,
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.Company, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    });
  };
  return Address;
};