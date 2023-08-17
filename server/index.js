import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import postsRoute from './src/routes/posts.route.js';

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(express.json());
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/posts', postsRoute);

app.listen(3001, () => console.log(`Server is running on port ${port}`));