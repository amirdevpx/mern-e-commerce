import Product from "../models/ProductModel.js";

// @desc    Fetch all products
// @route   GET /api/v1/products
// @access  public
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).populate("categories");

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single product
// @route   GET /api/v1/products/:id
// @access  public
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.fintById(req.params.id);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a product
// @route   POST /api/v1/products
// @access  private
const createProduct = async (req, res, next) => {
  const product = new Product(req.body);

  try {
    const createdProduct = await product.save();

    res.status(200).json({
      success: true,
      data: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a product
// @route   PUT /api/v1/products/:id
// @access  private
const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  private
const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
