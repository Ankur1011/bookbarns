import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose, { mongo } from 'mongoose';
import userRoute from './routes/userRoutes';
import productRoute from './routes/ProductRoutes';
import orderRoute from './routes/orderRoute';
//post request in node application : Body-parser
import bodyParser from 'body-parser';
dotenv.config();

const mongodbURL = config.MONGODB_URL;

mongoose.connect(mongodbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoute);

app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal',(req,res)=>{
    res.send(config.PAYPAL_CLIENT_ID);
})


//end point
//app.use("/api/products",productRoute);
// app.get("/api/products",(req,res)=>{
//     res.send(products);
// })

// app.get("/api/products/:id",(req,res)=>{
//     const productId = req.params.id;
    
//     const product = data.products.find(x=>x._id===productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({message: "Product not found" });    
// });


app.listen(5000,()=>{
    console.log("Server started at http://localhost:5000/api/products");
});