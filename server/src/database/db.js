import mongoose from 'mongoose';

const connectDatabase = () => {
  console.log('Wait connecting to the database');

  mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));
};

export default connectDatabase;