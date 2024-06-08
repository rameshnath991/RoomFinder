# RoomFinder

 Hello, I'm Ramesh Nath. In this repository i will be build a Complete 'Room Finder' Web application.
 Using Node.js, Express.js,  MongoDB, React.js, Next.js, Redux.js, & Tailwind CSS. So are you interested at this project let's connect and explore somethings new. Thanks
## Purpose:
The newcomers don’t have contacts when they arrive and as a result, have difficulty finding roommates to stay at shared rentals at affordable pricing. 
This issue is faced by professionals and students alike.  We aim to simplify the process of finding roommates.

## Usage & Functionality:

### Login and Register View - 
The login page is easily accessible from the navbar. 
It has functionality for logging in and registering a new account.
 Upon entering the correct credentials, the user is redirected to user dashboard and the admin is redirected to the admin dashboard. 

PANELS
 Admin- Admin panel
 User- user panel
 
### Admin Dashboard View - 

<ins>phoneNumber Or email</ins>: admin

<ins>password</ins>: admin

Once logged in as admin, you will be able to view the admin dashboard. When you click the dashboard button on the Navbar you will be taken to the admin dashboard page. This page allows you to see all users under User Management and all posts under Post Management. You can switch between both User Mangement and Post Management by clicking on their respective button. Reported users and reported posts will appear with a large red flag. You will be able to edit and delete any post and user as an admin. 



### User Dashboard View - 
Users:

<ins>phoneNumber</ins>: user
<ins>password</ins>: user

<ins>phoneNumber</ins>: user1
<ins>password</ins>: user1


Once logged in as a user, you will be able to view the user dashboard. When you click the dashboard button on the Navbar you will be taken to the user dashboard page. Here, you will be able to see all the posts made by the user ( that is you ). You will be able to view, edit and delete your own post under User Activity. Clicking on View Profile next to the Profile image takes you to your Profile Page. You will be able to edit your profile information as well as password under Settings.


### Postings View -
Here, you will be able to view all the postings made on RoomFinder. You will be able to filter based on preferences, location and price. Once logged in as a user, you will be able to make a post.


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

## Technologies Used

- Frontend: React.js, Next UI, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

## API Documentation

if testing on localhost then:
```
Base URL = http://localhost:7000
```

git clone https://github.com/rameshnath991/RoomFinder.git
```

###To run the application:
git clone https://github.com/rameshnath991/RoomFinder.git
```
Terminal 1: Setting Up Backend 
```sh
cd RoomFinder
cd server
npm install
npm run dev
```
Terminal 2: Setting Up Backend 
```sh
cd RoomFinder
cd client
npm install
npm run dev
```
The application runs on **localhost:3000** on your local machine.
The server runs on **localhost:7000** on your local machine.

Contact
Your Name - Ramesh Nath - rameshnath991@gmail.com

Project Link: https://github.com/rameshnath991/RoomFinder.git