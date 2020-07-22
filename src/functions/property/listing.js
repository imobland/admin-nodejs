// const database = use("core/database");
const { Models, DB } = require("admin-core");

global.connection = DB.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
});

module.exports = {
  //
  async handle(params) {
    //
    const { Property } = Models;

    const property = await Property.findOne();
    
    console.log(property.toJSON());

    console.log(JSON.stringify({ params }));

    return true;
  },
};
