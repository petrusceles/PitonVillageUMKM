// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Category, Company } = require("../../../db/models");
const readAllCategories = async (req, res) => {
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
    message: "success retrieved all companies",
    data: {
      categories,
    },
  });
};

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      await readAllCategories(req, res);
    }
  } catch (err) {
    res.statusCode = 500;
    res.json({
      status:false,
      message:err,
      data:null
    })
  }
};

export default handler;
