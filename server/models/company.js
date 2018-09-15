'use strict';
const UUIDV5 = require('uuid/v5');

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV5,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
  }, {});

  Company.associate = function(models) {
    Company.hasMany(models.Address, {
      foreignKey: 'id',
      as: 'address',
    });
    Company.hasMany(models.Attachment, {
      foreignKey: 'id',
      as: 'attachments',
    });
    Company.hasOne(models.Person, {
      foreignKey: 'id',
      as: 'legal_contact_person',
    });
    Company.hasOne(models.Person, {
      foreignKey: 'id',
      as: 'technical_contact_person',
    });
  };

  return Company;
};