const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("12345", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Станислав",
          login: "cnfc29",
          image:
            "https://avatars.mds.yandex.net/i?id=365f187d952acea407546993e2607064_l-4090774-images-thumbs&n=13",
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          image:
            "https://avatars.mds.yandex.net/i?id=1b3d16f08f38943ce81ae4104d829fb6_l-9657345-images-thumbs&n=13",
          description: "Это я в горах, сейчас дома уже",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image:
            "https://avatars.mds.yandex.net/i?id=c12c10344ca9665e17cfe15f471107c5_l-9231626-images-thumbs&n=13",
          description: "Это я на море, сейчас дома уже",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
