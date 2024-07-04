const express = require('express')
const productController = require('../controller/product')
const router = express.Router();

// API - Endpoint - Route
// C R U D 
router 
   .post("/", productController.createProduct)
   .get("/", productController.getAllProducts)
   .get("/:id", productController.getProduct)
   .put("/:id", productController.replaceProduct)
   .patch("/:id", productController.updateProduct)
   .delete("/:id", productController.deleteProduct) 


exports.router = router;