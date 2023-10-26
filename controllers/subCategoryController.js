const factory = require("./handlersFactory");
const SubCategory = require("../models/subCategoryModel");



exports.setCategoryIdToBody = (req, res, next) => {
  // Nested route
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
}

// Nested route
// GET  /api/v1/categories/:categoryId/subcategories
exports.createFilterObj = (req, res, next) => {
  console.log(req.params.categoryId);
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId }
  req.filterObject = filterObject;
  next();
}

//* -------------------------------------------------------------------------------------------
//* ===============================>> Get SubCategories <<=====================================
//* -------------------------------------------------------------------------------------------
// @desc    Get list of subcategories
// @route   GET  /api/v1/subcategories
// @access  Public
exports.getSubCategories = factory.getAll(SubCategory);


//* -------------------------------------------------------------------------------------------
//* ===============================>> Get Single SubCategory <<================================
//* -------------------------------------------------------------------------------------------
// @desc    Get specific subcategory by id
// @route   GET /api/v1/subcategories/:id
// @access  Public
exports.getSubCategory = factory.getOne(SubCategory)


//* -------------------------------------------------------------------------------------------
//* ===============================>> Create SubCategory <<====================================
//* -------------------------------------------------------------------------------------------
// @desc    Create subCategory
// @route   POST  /api/v1/subcategories
// @access  Private
exports.createSubCategory = factory.createOne(SubCategory);


//* -------------------------------------------------------------------------------------------
//* ===============================>> Update SubCategory <<====================================
//* -------------------------------------------------------------------------------------------
// @desc    Update specific subcategory
// @route   PUT /api/v1/subcategories/:id
// @access  Private
exports.updateSubCategory = factory.updateOne(SubCategory)


//* -------------------------------------------------------------------------------------------
//* ===============================>> Delete SubCategory <<====================================
//* -------------------------------------------------------------------------------------------
// @desc    Delete specific subcategory
// @route   DELETE /api/v1/subcategories/:id
// @access  Private
exports.deleteSubCategory = factory.deleteOne(SubCategory);

