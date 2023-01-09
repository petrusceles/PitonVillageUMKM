"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "companies",
      });
    }
  }
  Company.init(
    {
      category_id: DataTypes.BIGINT,
      name: DataTypes.STRING,
      owner: DataTypes.STRING,
      logo_url: DataTypes.STRING,
      picture_url: DataTypes.STRING,
      coordinate: DataTypes.STRING,
      instagram_link: DataTypes.STRING,
      wa_link: DataTypes.STRING,
      map_link: DataTypes.STRING,
      facebook_link: DataTypes.STRING,
      twitter_link: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
