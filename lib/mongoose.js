import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = "mongodb+srv://admin:admin@cluster0.miqaflt.mongodb.net/";
    return mongoose.connect(uri);
  }
}