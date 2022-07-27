import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
import routerProduct from './routes/product';
import routerAuth from './routes/auth';
import routerCategory from './routes/category'

const app = express();
//middleware
app.use(cors())
app.use(express.json());
app.use("/api", routerProduct);
app.use("/api", routerAuth);
app.use("/api", routerCategory);


// connectdb
mongoose.connect('mongodb://localhost:27017/we17103', () => {
    console.log('successfully')
});

app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công, cổng' + process.env.PORT)
})