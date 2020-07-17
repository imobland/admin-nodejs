const { sns, getDefaultParams } = use("core/aws");

module.exports = {
  //
  handle(message, attributes) {
    //
    const env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

    const data = getDefaultParams(message, { ...attributes, env });

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
