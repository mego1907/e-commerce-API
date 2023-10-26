const express = require("express");
const { param, validationResult } = require("express-validator");

const { 
  getCategories, 
  createCategory, 
  getCategory, 
  updateCategory,
  deleteCategory 
} = require("../controllers/categoryController");   
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const { 
  getCategoryValidator, 
  updateCategoryValidator, 
  deleteCategoryValidator, 
  createCategoryValidator 
} = require("../utils/validators/categoryValidator");

const subCategoryRoute = require("./subCategoryRoute");

// Router
const router = express.Router();

router.use("/:categoryId/subcategories", subCategoryRoute);


router.route("/")
  .get(getCategories)
  .post(createCategoryValidator, createCategory)

router.route("/:id")
  .get(getCategoryValidator, getCategory)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory)

module.exports = router;