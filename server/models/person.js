'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV5,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('first_name') + ' ' + this.getDataValue('last_name');
      },
      set(val) {
        this.setDataValue('first_name', val.shift());
        this.setDataValue('last_name', val.pop());
      }
    },
  }, {});
  Person.associate = function(models) {
    Person.hasMany(models.Contact, {
      foreignKey: 'id',
      as: 'contact',
    });
    Person.belongsTo(models.Company, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    })
  };
  return Person;
};