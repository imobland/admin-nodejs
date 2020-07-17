const AWS = require("aws-sdk");
const { apiVersion } = use("config/aws");

AWS.config.update({ region: process.env.AWS_DEFAULT_REGION });

const region = process.env.AWS_DEFAULT_REGION;
const userid = process.env.AWS_USER_ID;

function getARN(topic) {
  return `arn:aws:sns:${region}:${userid}:${topic}`;
}

module.exports = {
  AWS,
  getARN,
  sns() {
    return new AWS.SNS({ apiVersion });
  },
};
