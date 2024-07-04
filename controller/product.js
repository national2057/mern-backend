const fs = require("fs");
const mongoose = require('mongoose');
const model = require('../model/product');
const Product = model.Product;

// POST || Create Product 
exports.createProduct = async (req, res) => {   
   const product = new Product(req.body);   
   await product.save();   
   res.status(201).json(req.body);
}

// GET || Get All Products 
exports.getAllProducts = async (req, res) => {
   const products = await Product.find();
   res.json(products);
}

// GET || Get Product by ID 
exports.getProduct = async (req, res) => {
   const id = req.params.id;
   const product = await Product.findById(id);
   res.json(product);
}

// PUT || Replace Product 
exports.replaceProduct = async (req, res) => {
   const id = req.params.id; 
   try{
      const doc = await Product.findOneAndReplace({_id: id}, req.body, {new: true});
      res.status(201).json(doc);
   }catch(err){
      console.log(err)
      res.status(400).json(err);
   }
}

// PATCH || Update Product  
exports.updateProduct = async (req, res) => {
   const id = req.params.id; 
   try{
      const doc = await Product.findOneAndUpdate({_id: id}, req.body, {new: true});
      res.status(201).json(doc);
   }catch(err){
      console.log(err)
      res.status(400).json(err);
   }
}

// DELETE || Delete Product 
exports.deleteProduct = async (req, res) => {
   const id = req.params.id; 
   try{
      const doc = await Product.findOneAndDelete({_id: id});
      res.status(201).json(doc);
   }catch(err){
      console.log(err)
      res.status(400).json(err);
   }
} 