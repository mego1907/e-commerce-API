const factory = require("./handlersFactory");

const Product = require("../models/productModel");



//* -------------------------------------------------------------------------------------------
//* ===============================>> Get Products <<==========================================
//* -------------------------------------------------------------------------------------------
// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = factory.getAll(Product, "Products");


//* -------------------------------------------------------------------------------------------
//* ===============================>> Get Specific product <<==================================
//* -------------------------------------------------------------------------------------------
// @desc    Get specific product by id
// @route   GET /api/v1/products/:id
// @access  Public
exports.getProduct = factory.getOne(Product);


//* -------------------------------------------------------------------------------------------
//* ===============================>> Create Product <<========================================
//* -------------------------------------------------------------------------------------------
// @desc    Create product
// @route   POST  /api/v1/products
// @access  Private 
exports.createProduct = factory.createOne(Product);


//* -------------------------------------------------------------------------------------------
//* ===============================>> Update Product <<========================================
//* -------------------------------------------------------------------------------------------
// @desc    Update specific product
// @route   PUT /api/v1/products/:id
// @access  Private
exports.updateProduct = factory.updateOne(Product);



//* -------------------------------------------------------------------------------------------
//* ===============================>> Delete Product <<========================================
//* -------------------------------------------------------------------------------------------
// @desc    Delete specific product
// @route   DELETE /api/v1/products/:id
// @access  Private
exports.deleteProduct = factory.deleteOne(Product);
