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
  Create User (post request) - `http://localhost:4000/api/registration` <br />
  Login (Post request) - `http://localhost:4000/api/login` <br />
  Profile Details (get request) - `http://localhost:4000/api/profileView/65f09eaaf41996e0a5931344` <br />
  Profile Update (post request) - `http://localhost:4000/api/profileUpdate/65f09eaaf41996e0a5931344` <br />
  Task Create (post request) - `http://localhost:4000/api/create` <br /> 
  Task Read (get request) - `http://localhost:4000/api/read` <br /> 
  Task Delete (get request) - `http://localhost:4000/api/delete/65f0bd4e697bbdb899878b99` <br /> 
  Task Update (post request) - `http://localhost:4000/api/update/65f0be4c97df017af5115ed4`

# Postman collection 
  root/todolist-application.postman_collection.json 

# Import database
 root/taskManagement.json <br />

 Import database on mongo compass 

 change db path on app.js line number 23 <br />

  root/src/routes/api.js




