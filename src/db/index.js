import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const DBConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `Connection Establised SuccessFully  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Connection Failed ! " + error);
  }
};
export default DBConnect;