const express = require('express');
const UserController=require('../controllers/UserController');
const ProductController=require('../controllers/ProductController');
const WishListController=require('../controllers/WishListController');
const CartListController=require('../controllers/CartListController');
const AuthMiddleware=require('../middleware/AuthMiddleware');

const router = express.Router();

//users
router.get('/UserOTP/:email',UserController.UserOTP);
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin);
router.get('/UserLogout',AuthMiddleware,UserController.UserLogout);
router.post('/CreateProfile',AuthMiddleware,UserController.CreateProfile);
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile);
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile);

// Product
router.get('/ProductBrandList',ProductController.ProductBrandList);
router.get('/ProductCategoryList',ProductController.ProductCategoryList);
router.get('/ProductSliderList',ProductController.ProductSliderList);
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory);
router.get('/ProductListBySmilier/:CategoryID',ProductController.ProductListBySmilier);
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword);
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark);
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails);
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList);

// Cart
router.get('/CartList',AuthMiddleware,CartListController.CartList);
router.post('/SaveCartList',AuthMiddleware,CartListController.SaveCartList);
router.post('/RemoveCartList',AuthMiddleware,CartListController.RemoveCartList);

// Wish
router.get('/WishList',AuthMiddleware,WishListController.WishList);
router.post('/SaveWishList',AuthMiddleware,WishListController.SaveWishList);
router.post('/RemoveWishList',AuthMiddleware,WishListController.RemoveWishList);


module.exports = router;