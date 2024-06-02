# assignment-expressjs-mongodb

# Getting started
- Clone the repository
```
git clone https://github.com/merajhossain/assignment-expressjs-mongodb.git
```
- Install dependencies
```
cd assignment-expressjs-mongodb
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:4000`

# API Document endpoints
'/ProductSliderList'
'/ProductListByBrand/:BrandID'
'/ProductListByCategory/:CategoryID'
'/ProductListBySmilier/:CategoryID'
'/ProductListByKeyword/:Keyword'
'/ProductListByRemark/:Remark'
'/ProductDetails/:ProductID'
'/ProductReviewList/:ProductID'
'/UserOTP/:email'
'/VerifyLogin/:email/:otp'
'/UserLogout'
'/CreateProfile'
'/UpdateProfile'
'/ReadProfile'
'/SaveWishList'
'/RemoveWishList'
'/WishList'
'/SaveCartList'
'/RemoveCartList'
'/CartList'

# Postman collection 
  root/todolist-application.postman_collection.json 

# Import database
 root/taskManagement.json <br />

 Import database on mongo compass 

 change db path on app.js line number 23 <br />

  root/src/routes/api.js




