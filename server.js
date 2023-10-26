const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globaleError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/database");
// Routes
const categoryRoute = require("./routes/CategoryRoute");
const subCategoryRoute = require("./routes/subCategoryRoute");
const brandRoute = require("./routes/brandRoute");
const productRoute = require("./routes/productRoute");


// Connect with db
dbConnection();

// express app
const app = express();


// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`)
}


// Mount Routes
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/subcategories", subCategoryRoute);
app.use("/api/v1/brands", brandRoute);
app.use("/api/v1/products", productRoute);


app.all("*", (req, res, next) => {
  // Create error and send it to error handling middleware
  // const err = new Error(`Can't find this route: ${req.originalUrl}`)
  // next(err.message)
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400))
})

// Global error handling middleware for express
app.use(globaleError);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});


// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down...`)
    process.exit(1);
  })
})