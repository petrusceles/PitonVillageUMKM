"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert("Companies", [
      {
        category_id: 1,
        name: "Sale Pisang Mekar Sari",
        owner: "Sutomo",
        picture_url: "/images/company_1.jpg",
        coordinate: "-8.158180, 110.999750",
        instagram_link: "https://www.instagram.com/unitedtalks_official",
        map_link: "https://goo.gl/maps/3Hv9vWMxvB3cFPRv6",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus. Nullam porta non augue eu posuere. Pellentesque consectetur sit amet felis eget malesuada. Etiam hendrerit arcu quis nisi egestas, et pulvinar quam commodo.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        name: "Get Help",
        owner: "Bambang Priyanto",
        picture_url: "/images/company_2.jpg",
        coordinate: "-8.160371, 110.990705",
        instagram_link: "https://www.instagram.com/bittersweet_by_najla",
        map_link: "https://goo.gl/maps/Y5XaVhYU3vgDcG8j8",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus. Nullam porta non augue eu posuere. Pellentesque consectetur sit amet felis eget malesuada. Etiam hendrerit arcu quis nisi egestas, et pulvinar quam commodo.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        name: "Hustle and Run",
        owner: "Nicholas Cage",
        picture_url: "/images/company_3.jpg",
        coordinate: "-8.153155, 110.991609",
        instagram_link: "https://www.instagram.com/infobarkas_jogja/",
        map_link: "https://goo.gl/maps/CMRPyvLqQBJQiSUP6",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus. Nullam porta non augue eu posuere. Pellentesque consectetur sit amet felis eget malesuada. Etiam hendrerit arcu quis nisi egestas, et pulvinar quam commodo.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        name: "Great Things Go Away",
        owner: "Number Nine",
        picture_url: "/images/company_4.jpg",
        coordinate: "-8.148992, 110.9862029",
        instagram_link: "https://www.instagram.com/arjunaargapura/",
        map_link: "https://goo.gl/maps/qzgfnKGmpttjQsHa8",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        name: "Living Being",
        owner: "Hari Suyoto",
        picture_url: "/images/company_5.jpg",
        coordinate: "-8.161651, 111.001651",
        instagram_link: "https://www.instagram.com/senandung.punung/",
        map_link: "https://goo.gl/maps/jtNTj4N34qtnAg5w5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        name: "Blondho Mbah Jumini",
        owner: "Jumini Santos",
        picture_url: "/images/company_6.jpg",
        coordinate: "-8.154854, 110.986545",
        instagram_link: "https://www.instagram.com/clowordistro/",
        map_link: "https://goo.gl/maps/NJYpgTnPSriikNe56",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        name: "Blondho Keiwhs",
        owner: "Keith Hantoro",
        picture_url: "/images/company_7.jpg",
        coordinate: "-8.153149, 110.986062",
        instagram_link: "https://www.instagram.com/uniqloindonesia/",
        map_link: "https://goo.gl/maps/TnCzmTFyjtTrSRix7",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nulla at urna egestas, dapibus convallis erat vulputate. Sed gravida sit amet quam vitae suscipit. Integer congue leo in erat malesuada, in maximus orci blandit. Nunc massa nisi, condimentum quis porttitor quis, hendrerit eget augue. Mauris scelerisque lorem nulla, vitae rutrum nisi convallis in. Quisque fermentum gravida dui, id ullamcorper tortor venenatis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu vehicula est, vitae ultricies lacus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
