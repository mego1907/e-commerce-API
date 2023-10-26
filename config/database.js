const mongoose = require("mongoose");

const dbConnection = () => {
  // Connect with db
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("db connected successfuly...");
    })
    // .catch((err) => {
    //   console.error(`Database Error: ${err}`)
    //   process.exit(1);
    // });

}

module.exports = dbConnection

