const express = require('express');

const {
  createProduct,
  productById,
  getProductById,
  getAllProducts,
  getProductsRelatedById,
  getProductsByCategory,
  getProductsBySearch,
  getPhotoByProductId,
  updateProductById,
  deleteProductById,
} = require('../controllers/product');
const { requireSignin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

const router = express.Router();

// routes
router.get('/product/:productId', getProductById);

router.get('/products', getAllProducts);

router.get('/products/related/:productId', getProductsRelatedById);

router.get('/products/categories', getProductsByCategory);

router.post('/product/photo/:productId', getPhotoByProductId);

router.post('/products/by/search', getProductsBySearch);

router.post(
  '/product/create/:userId',
  requireSignin,
  isAdmin,
  isAuth,
  createProduct
);

router.put(
  '/product/update/:productId/:userId',
  requireSignin,
  isAdmin,
  isAuth,
  updateProductById
);
router.delete(
  '/product/delete/:productId/:userId',
  requireSignin,
  isAdmin,
  isAuth,
  deleteProductById
);

// middleware
router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
