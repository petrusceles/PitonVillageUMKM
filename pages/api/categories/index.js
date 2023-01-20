// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
const { Category, Company } = require("../../../db/models");
const handler = nextConnect().get(async (req, res) => {
  console.log("Masuk");
  // console.log(models);
  const categories = await Category.findAll({
    include: [
      {
        model: Company,
        as: "companies",
      },
    ],
  });
  res.statusCode = 200;
  res.json({
    status: true,
    message: "success retrieved all datas",
    data: {
      categories,
    },
  });
});

export default handler;
