// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
const models = require("../../../db/models/index");
const handler = nextConnect().get(async (req, res) => {
  console.log(models);
  const categories = await models.Category.findAll({
    include: [
      {
        model: models.Company,
        as: "companies",
      },
    ],
  });
  res.statusCode(200).json({
    status: true,
    message: "success retrieved all datas",
    data: {
      categories,
    },
  });
});

export default handler;
