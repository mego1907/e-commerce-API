const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const ApiFeatures = require("../utils/apiFeatures");
const factory = require("./handlersFactory");

const Category = require("../models/categoryModel");


//* -------------------------------------------------------------------------------------------
//* ===============================>> Get Categories <<========================================
//* -------------------------------------------------------------------------------------------
// @desc    Get list of categories
// @route   GET  /api/v1/categories
// @access  Public
exports.getCategories = factory.getAll(Category);

//* -------------------------------------------------------------------------------------------
//* ===============================>> Get Single Category <<===================================
//* -------------------------------------------------------------------------------------------
// @desc    Get specific category by id
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getCategory = factory.getOne(Category)

//* -------------------------------------------------------------------------------------------
//* ===============================>> Create Category <<=======================================
//* -------------------------------------------------------------------------------------------
// @desc    Create category
// @route   POST  /api/v1/categories
// @access  Private
exports.createCategory = factory.createOne(Category);

//* -------------------------------------------------------------------------------------------
//* ===============================>> Update Category <<=======================================
//* -------------------------------------------------------------------------------------------
// @desc    Update specific category
// @route   PUT /api/v1/categories/:id
// @access  Private
exports.updateCategory = factory.updateOne(Category);


//* -------------------------------------------------------------------------------------------
//* ===============================>> Delete Category <<=======================================
//* -------------------------------------------------------------------------------------------
// @desc    Delete specific category
// @route   DELETE /api/v1/categories/:id
// @access  Private
exports.deleteCategory = factory.deleteOne(Category);
