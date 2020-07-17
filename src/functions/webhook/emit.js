const { sns, getARN } = use("core/aws");

module.exports = {
  handle(topic, message) {
    //
    const Message = {
      message,
      event: "create-integration",
      client: { ref: "devsite1" },
      partner: { ref: "olx" },
    };
    const data = {
      TopicArn: getARN(topic),
      Message: JSON.stringify(Message),
    };
    sns()
      .publish(data)
      .promise()
      .then((data) => {
        console.log("success");
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log("error", `${err}`);
      });
  },
};
