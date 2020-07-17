const AWS = require("aws-sdk");
const { arn, apiVersion, region } = use("config/aws");

AWS.config.update({ region });

function getDefaultParams(message, attrs) {
  const MessageAttributes = {};
  for (let key in attrs) {
    MessageAttributes[key] = { DataType: "String", StringValue: attrs[key] };
  }
  return {
    TopicArn: arn,
    Message: JSON.stringify(message),
    MessageAttributes,
  };
}

function sns() {
  return new AWS.SNS({ apiVersion });
}

module.exports = {
  AWS,
  getDefaultParams,
  sns,
};
