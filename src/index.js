require("./lib/constants");
require("dotenv").config();

const { getParams } = use("lib/params");

const params = getParams();

const route = params.shift();

const { handle } = use(`functions/${route}`);

handle(...params);

// console.log(path);

// console.log(route);
