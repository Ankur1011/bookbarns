import express from 'express';
import Product from '../models/productModel';
import { isAuth,isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await Product.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products);
});

//Product details end point
router.get("/:id",async (req,res)=>{
  const products = await Product.findOne({_id:req.params.id});
  if(products){
  res.send(products);
  }
  else{
    res.status(404).send({msg:"Product not found"});
  }
});



//creating a new Product
router.post("/",isAuth,isAdmin,async(req,res)=>{
  const product = new Product({
    name:req.body.name,
    image:req.body.image,
    author:req.body.author,
    price:req.body.price,
    category:req.body.category,
    countInStock:req.body.countInStock,
    description:req.body.description,
    rating:req.body.rating,
    numReviews:req.body.numReviews,  
  });
  const newProduct = await product.save();
  if(newProduct){
    res.status(201).send({message:'New Product Created',data:newProduct});
  }
  res.status(500).send({message:'Error !! No Product is created'});
});
//Updating a product
router.put('/:id',isAuth,isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.author = req.body.author;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});


router.delete('/:id',isAuth,isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});




router.post('/:id/reviews', isAuth, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((a, c) => c.rating + a, 0) /
      product.reviews.length;
    const updatedProduct = await product.save();
    res.status(201).send({
      data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});


export default router;