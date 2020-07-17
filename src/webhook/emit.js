require("dotenv").config();
const _ = require("lodash");
const { getParams } = require("../../lib/params");
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_DEFAULT_REGION });

async function run() {
  //
  const [topic, message] = getParams();

  const region = "us-east-1";
  const userid = 143021604250;
  // const topic = "integration-create";
  const TopicArn = `arn:aws:sns:${region}:${userid}:${topic}`;

  var params = {
    Message: JSON.stringify({
      message,
      event: "create-integration",
      client: { ref: "devsite1" },
      partner: { ref: "olx" },
    }),
    TopicArn,
    // TopicArn: "arn:aws:sns:us-east-1:143021604250:integration-create",
  };

  var sns = new AWS.SNS({ apiVersion: "2010-03-31" });

  try {
    var data = await sns.publish(params).promise();
  } catch (e) {
    console.log("error", `${e}`);
    return;
  }
  console.log("success");
  console.log(JSON.stringify(data));
}

run();
