const { check, body } = require("express-validator");
const { default: slugify } = require("slugify");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getSubCategoryValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),
  validatorMiddleware,
]


exports.createSubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("SubCategory required")
    .isLength({ min: 2 })
    .withMessage("Too short SubCategory name")
    .isLength({ max: 32 })
    .withMessage("Too long SubCategory name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("category")
    .notEmpty()
    .withMessage("SubCategory must be belong to a category")
    .isMongoId()
    .withMessage("Invalid Category id format"),

  validatorMiddleware
]


exports.updateSubCategoryValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),
  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  validatorMiddleware,
]


exports.deleteSubCategoryValidator = [
  check("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),
  validatorMiddleware,
]