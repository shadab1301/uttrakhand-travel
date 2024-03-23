const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) console.log(`[-] Unable to connect with db: ${err}`);
  else console.log(`[+] Db connected !`);
});

module.exports = mongoose;