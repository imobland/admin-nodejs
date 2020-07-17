const AWS = require("aws-sdk");
const { region, userID, apiVersion } = use("config/aws");

AWS.config.update({ region });

function getARN(topic) {
  return `arn:aws:sns:${region}:${userID}:${topic}`;
}

function sns() {
  return new AWS.SNS({ apiVersion });
}

module.exports = {
  AWS,
  getARN,
  sns,
};
