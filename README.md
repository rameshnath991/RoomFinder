# RoomFinder

{
"firstName":"Arjun",
"midName": " Bdr",
"lastName":"Bam",
"phoneNumber":"+977 9868775830",
"address":"MNR",
"password": "1234567",
"email":"ramesh12@gmail.com"
}


 Hello, I'm Ramesh Nath. In this repository i will be build a Complete 'Room Finder' Web application.Using Node.js, Express.js,  MongoDB, React.js, Next.js, Redux.js, & Tailwind CSS. So are you interested at this project let's connect and explore somethings new. Thanks
## Purpose:
The newcomers don’t have contacts when they arrive and as a result, have difficulty finding roommates to stay at shared rentals at affordable pricing. This issue is faced by professionals and students alike.  We aim to simplify the process of finding roommates.

## Usage & Functionality:

### Login and Register View - 
The login page is easily accessible from the navbar. It has functionality for logging in and registering a new account. Upon entering the correct credentials, the user is redirected to user dashboard and the admin is redirected to the admin dashboard. 

PANELS
 Admin- Admin panel
 User- user panel
 
### Admin Dashboard View - 
<ins>username</ins>: admin

<ins>password</ins>: admin

Once logged in as admin, you will be able to view the admin dashboard. When you click the dashboard button on the Navbar you will be taken to the admin dashboard page. This page allows you to see all users under User Management and all posts under Post Management. You can switch between both User Mangement and Post Management by clicking on their respective button. Reported users and reported posts will appear with a large red flag. You will be able to edit and delete any post and user as an admin. 



### User Dashboard View - 
Users:

<ins>username</ins>: user
<ins>password</ins>: user

<ins>username</ins>: user1
<ins>password</ins>: user1


Once logged in as a user, you will be able to view the user dashboard. When you click the dashboard button on the Navbar you will be taken to the user dashboard page. Here, you will be able to see all the posts made by the user ( that is you ). You will be able to view, edit and delete your own post under User Activity. Clicking on View Profile next to the Profile image takes you to your Profile Page. You will be able to edit your profile information as well as password under Settings.



### Postings View -
Here, you will be able to view all the postings made on Amigo. You will be able to filter based on preferences, location and price. You can switch between the **Map View** and **Postings View** by clicking on the map/list button on the Postings Page. Once logged in as a user, you will be able to make a post.




### Make a New Post View -
Once logged in as a user you will be able to create a post by clicking on Make a Post on the postings page. 



### Post View -
Once you click on a post in postings page, you will be taken to another page with post details and ability to contact the user who made the post by filling the form, which will prefill email with information based on your form input with the post creator's email as the sender. 


### Edit Post View - 
As an admin or as the post creator user, you will be able to edit the post in this form.


### Profile Page View - 
You can view profile by clicking on View Profile link for a user. 


### Edit Profile View - 
As an admin or as the user, you will be able to edit your respective profile and password in this form.


#### Note:
Authentication is added to secure views and editing/deleting  posts and users. 


## API Documentation

if testing on localhost then:
```
Base URL = http://localhost:5000
```
The base URL will precede all the routes listed below.


### Routes

```
POST /api/users/login

Purpose: Logging in a user

Expected Type: raw JSON

Expected Data: {
    "username": "user"
    "password": "user"
}

Returns: {
    "currentUser": "user"
}
```

```
POST /api/users/new

Purpose: Creating a new user

POST /api/create-admin

Purpose : Initialises an admin with username of admin and password of admin.

No expected data

Returns: mongodb document of the created admin
```
```
POST /api/posts/new

Purpose: Creating a new post

Authorization: need to be logged in as a user

POST /api/posts/:id/report

Purpose: Reporting an innaproriate post

Authorization: need to be logged in as a user or admin

Expects a valid post id in the url

Returns: updated post document where the flagged parameter will be true
```
```
POST /api/users/:id/report

Purpose: Reporting an innaproriate user

Authorization: need to be logged in as a user or admin

Expects valid id in the url

Returns: updated user document where the flagged parameter will be true
```
```
PUT /api/users/:id

Purpose: Updating user information

Expected Type: raw JSON

PUT /api/users/:id/password

Purpose: Updating user password

Authorization: need to be logged in as the user with user _id = id

Expected Type: raw JSON

Returns: updated user document where the password parameter will be the updated password
```
```
PUT /api/users/:id/img

Purpose: Updating user profile photo

Authorization: need to be logged in as as the user with user _id = id

Expected Type: form-data

### Install dependencies and run on your local machine

React, NodeJS and MongoDB database should be installed on your machine.
Clone the project onto your local machine.

git clone https://github.com/rameshnath991/RoomFinder.git
```

To run the application:

```bash=7
mkdir mongo-data
mongod --dbpath mongo-data
npm start
cd client/
npm start
```

The application runs on **localhost:3000** on your local machine.
The server runs on **localhost:5000** on your local machine.

Contact
Your Name - Ramesh Nath - rameshnath991@gmail.com

Project Link: https://github.com/rameshnath991/RoomFinder.git