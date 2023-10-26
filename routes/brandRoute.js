const express = require("express");

const { 
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  updateBrand,
  applySlugify
} = require("../controllers/brandController");  


const { 
  createBrandValidator,
  deleteBrandValidator,
  updateBrandValidator,
  getBrandValidator
} = require("../utils/validators/brandValidator");

// Router
const router = express.Router();


router.route("/")
  .get(getBrands)
  .post(createBrandValidator, createBrand)

router.route("/:id")
  .get(getBrandValidator, getBrand)
  .put(updateBrandValidator, updateBrand)
  // .put(updateBrandValidator, applySlugify, updateBrand)
  .delete(deleteBrandValidator, deleteBrand);

module.exports = router;