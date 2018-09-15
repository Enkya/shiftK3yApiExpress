'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define('Attachment', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Attachment.associate = function(models) {
    Attachment.belongsTo(models.Company, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    });
  };
  return Attachment;
};