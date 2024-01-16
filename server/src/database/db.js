import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("----------------------------------------------");
  console.log("🔃 Wait connecting to the database".blue);

  mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB Atlas Connected".green))
    .catch((error) => console.log(`❌ Ocorreu um erro: ${error}`.red))
    .then(() => console.log("----------------------------------------------"));
};

export default connectDatabase;
