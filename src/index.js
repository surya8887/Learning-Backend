import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import DBConnect from "./db/index.js";
import app from "./app.js";
const port = process.env.PORT || 3000;

DBConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️-Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error Occured " + error);
  });
