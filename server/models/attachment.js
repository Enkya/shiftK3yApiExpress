'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define('Attachment', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Attachment.associate = function(models) {
    // associations can be defined here
  };
  return Attachment;
};