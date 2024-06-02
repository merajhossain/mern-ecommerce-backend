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
'/ProductSliderList' </br>
'/ProductListByBrand/:BrandID' </br>
'/ProductListByCategory/:CategoryID' </br>
'/ProductListBySmilier/:CategoryID' </br>
'/ProductListByKeyword/:Keyword' </br>
'/ProductListByRemark/:Remark' </br>
'/ProductDetails/:ProductID' </br>
'/ProductReviewList/:ProductID' </br>
'/UserOTP/:email' </br>
'/VerifyLogin/:email/:otp' </br>
'/UserLogout' </br>
'/CreateProfile' </br>
'/UpdateProfile' </br>
'/ReadProfile' </br>
'/SaveWishList' </br>
'/RemoveWishList' </br>
'/WishList' </br>
'/SaveCartList' </br>
'/RemoveCartList' </br>
'/CartList' </br>

# Postman collection 
  root/todolist-application.postman_collection.json 

# Import database
 root/data <br />

 Import database on mongo compass 

 change db path on app.js line number 25 <br />

root/src/routes/api.js <br />

Change these variable data on .env files

PORT = 4000
SMTP_HOST = mail.teamrabbil.com
SMTP_USER = info@teamrabbil.com
SMTP_PASS = ~sR4[bhaC[Qs



