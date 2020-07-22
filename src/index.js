require("./lib/constants");
require("dotenv").config();

async function app() {
  //
  const { getParams } = use("lib/params");

  const params = getParams();

  const route = params.shift();

  const { handle } = use(`functions/${route}`);

  //
  await handle(...params);

  if (global.connection) {
    connection.close();
  }
}

app();
