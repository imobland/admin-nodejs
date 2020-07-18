const AWS = require("aws-sdk");
const { isArray } = require("lodash");
const { arn, apiVersion, region } = use("config/aws");

AWS.config.update({ region });

function getDefaultParams(message, attributes) {
  //
  const MessageAttributes = {};

  for (let key in attributes) {
    const value = attributes[key];
    const DataType = Array.isArray(value) ? "String.Array" : "String";

    const StringValue =
      DataType == "String.Array"
        ? JSON.stringify(attributes[key])
        : attributes[key];

    MessageAttributes[key] = { DataType, StringValue };
  }

  return {
    TopicArn: arn,
    Message: JSON.stringify({
      attributes,
      message,
    }),
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
