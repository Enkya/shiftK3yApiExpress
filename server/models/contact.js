'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    tel_one: {
      type: DataTypes.INTEGER,
      validate: {
        not: ["[a-z", 'i'],
      }
    },
    tel_two: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },

  }, {});
  Contact.associate = function(models) {
    Contact.belongsTo(models.Person, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    });
    Contact.belongsTo(models.Employee, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    });
  };
  return Contact;
};