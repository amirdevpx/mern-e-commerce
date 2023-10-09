import Category from "../models/CategoryModel.js";

// @desc    Fetch all categories
// @route   GET /api/v1/categories
// @access  public
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single category
// @route   GET /api/v1/categories/:id
// @access  public
const getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.fintById(req.params.id);

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a category
// @route   POST /api/v1/categories
// @access  private
const createCategory = async (req, res, next) => {
  const category = new Category(req.body);

  try {
    const createdCategory = await category.save();

    res.status(200).json({
      success: true,
      data: createdCategory,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a category
// @route   PUT /api/v1/categories/:id
// @access  private
const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a category
// @route   DELETE /api/v1/categories/:id
// @access  private
const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: deletedCategory,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
