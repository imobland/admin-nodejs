var _ = require("lodash");
const Base64 = require("js-base64").Base64;

module.exports = {
  getParams: function () {
    var args = process.argv.slice(2);
    var data = {};
    if (args[0] == "--json") {
      return JSON.parse(args[1]);
    } else if (args[0] == "--base64") {
      const json = Base64.decode(args[1]);
      return JSON.parse(json);
    } else {
      args.forEach(function (val, index, array) {
        var row = val.split("=");
        _.set(data, row[0], row[1]);
      });
      return data;
    }
  },
};
