'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      logo_url: {
        type: Sequelize.STRING
      },
      picture_url: {
        type: Sequelize.STRING
      },
      coordinate: {
        type: Sequelize.STRING
      },
      instagram_link: {
        type: Sequelize.STRING
      },
      wa_link: {
        type: Sequelize.STRING
      },
      map_link: {
        type: Sequelize.STRING
      },
      facebook_link: {
        type: Sequelize.STRING
      },
      twitter_link: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};