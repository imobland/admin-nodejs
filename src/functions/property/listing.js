const { Models, DB } = require("admin-core");

global.connection = DB.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
});

const { DynamoDB } = use("core/aws");

module.exports = {
  //
  async handle(params) {
    //
    const { Property } = Models;

    const property = await Property.findOne({
      where: { property_id: 52201 },
    });
    
    console.log(
      JSON.stringify({
        raw,
        // property: property.toJSON(),
      })
    );

    return true;
  },
};
