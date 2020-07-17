const path = require("path");

const rootpath = __dirname + "/../";

global.app = (src = "") => path.resolve(rootpath, src);

global.use = (src = "") => require(app(src));
