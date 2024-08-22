
Link to video
https://github.com/user-attachments/assets/0aa771e2-a860-40e1-8478-436fecb4d5fa
https://github.com/user-attachments/assets/c425af16-b43a-4d95-9f82-6072fa7f3663

This is the express-react application of job

## TECH STACK

The app is using TailwindCSS as the styling and I try my best to make all the things work, I may miss a thing or two, but I have done my best

The Front End is using React JS

The Connection with backend using axios interceptor

The Backend is using ExpressJS / NodeJS

The Database is using mysql with the name of the db of job_dashboard, it is stored in ,env using the name DB_NAME

## BACKEND INFO

Env:
Backend env example:
```
DB_USERNAME=root
DB_PASSWORD=
DB_HOST=localhost
DB_NAME=job_dashboard
URL_ENDPOINT=/api
TOKEN_SECRET=mikemozawski
```

The SQL dump is in express/job_dashboard.sql 

I am using nodemon to run the server `npx nodemon app.js`

PORT database = 3306
PORT backend = 4500

## FRONTEND INFO
I am using react JS as I am the most proficient in this framework

(Env example)
```
VITE_REACT_APP_DEV_API_URL = "http://localhost:4500"
FAST_REFRESH = false
SKIP_PREFLIGHT_CHECK = true
```

The styling with tailwind css should be run and configured properly (see https://tailwindcss.com/docs/guides/vite)
Why tailwind? it is robust and making me able to apply styling since the class is now almost an industry standard

PORT frontend: 5173

## FEATURE
* I am doing my best to fulfill the feature list that is needed
* The CRUD of the Users:
  * Create on Sign Up
  * Update after Login
  * Get by id only after login
  * Get All only for admins
  * Delete only for admins
* The CRUD of Course/Career/Educations
  * Create after Login (detail page)
  * Update after Login (detail page)
  * Delete after Login (detail page)
  * Get after login (detail page)
* I have implemented JSON Web Token in communication between REST API and Front End using Bearer Authorization
* I have implemented role admin to have special access of getAll users and edit/delete all biodata access
* The role of non admins is restricted to their own view
* I have implemented dynamic UI/UX for CRUD course/career/educations

## ROLE INFO
Login (role admin)
username: john_doe
password: password

Login (role non-admin)
username: emily_brown
password: password
