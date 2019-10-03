Assignment 2
Documentation

1. Git repository

Git repository is where I upload all my codes. It has two sections for client and server and a readme file. At each point after i made small changes to my code, i add, commit and push it to the master branch. By doing so, if I did something wrong which make the program stop running, I can easily move back to the previous version and try other ways to code.

2. Data structures:

The main entities which is used in both server and client side:

a. Users:

- Avatar: Src
- UserName: String
- Email: String
- Password: String
- Group List: Array
- Admin Group List: Array
- Role: String

b. Groups:

- Name: String
- Members: Array
- Channels: Array
- Assist: Array

c. Channels:

- Name: String
- Group: String
- Members: Array
- History: String

Each of the data group will be moved to their compatible database's collection. Such as users will have a database collection named "users", etc..

3. REST API

1.

app.get("/", (req, res, next):

- Initial route will show the home page
- And it also return back a message

2.

app.post("/api/users", (req, res, next):

- This route will create user if not registered with all attributes like: avatar, username, email, address,...
- It also put the user data in the database if created
- It will return error if the user have already signed up

3.

app.post("/api/login", (req, res):

- This route will check user's username and pasword input, if they are true the user will be logged in in their account
- It will return the data if the user provide correct email and password, or else, return error

4.

app.get("/api/users", (req, res, next):

- This route will provide users list
- It will return list of current users if its' called

5.

app.get("/chatroom/:room", (req, res, next)

- This route will give data of current chat room
- It will return data correspond to the chat room, or else, return error

6.

app.post("/api/addgroup", function(req, res)

- This route will add group to the database
- It will check if the group is existed or not, if not send back the group number and no error, but if it's already exist, print error

7.

app.post("/api/deletegroup", function(req, res)

- This route will delete group from the database
- It will return the new updated group

8.

app.get("/api/getgroups", function(req, res):

- This route will get current group lists
- It will return data of existing list of groups

9.

app.get("/api/getgroup", function(req, res)

- This route will get current group
- It will return data of the chosen group

10.

app.post("/api/addchannel", function(req, res)

- This route will add channel to the database
- Return new channel list data

11. app.post("/api/deletechannel", function(req, res)

- This route will delete channel from the database
- It will return the new updated channel

12.

app.get("/api/getchannels", function(req, res):

- This route will get current channel lists
- It will return data of existing list of channels

13.

app.get("/api/getchannel", function(req, res)

- This route will get current channel
- It will return data of the chosen channel

4.  Angular Architecture

a. Components:

1. Sign Up: This component is for the sign up page with user’s sign up form
1. Log in: This component is for the login page with user’s login form
1. Users: This component is the user tab where Super Admin can change the role of other users and all users can view other users and their roles
1. Groups: This component is the group tab where all users can view the information about the groups and functionality for each user role. Such as Super Admin can add, delete user, group and channel, while group admin can add, delete group and channel, etc.…
1. Channel: add user, add group and delete user
1. Chat: List of user to chat
1. Chat room: Component return chat room and chat history

b. Services:

1. Websocket: functions for messaging users
2. Group data: Passing data of the group

c. Routes:

- path: "", component: HomeComponent
- path: "login", component: LoginComponent
- path: "sign-up", component: SignUpComponent
- path: "profile", component: ProfileComponent, canActivate: [AuthGuard]
- path: "chat", component: ChatComponent, canActivate: [AuthGuard]
- path: "chatroom", component: ChatroomComponent, canActivate: [AuthGuard]
- path: "users", component: UsersComponent, canActivate: [AuthGuard]
- path: "groups", component: GroupsComponent, canActivate: [AuthGuard]

4. Node Server Architecture:

a. Modules:

- Cors
- Http
- Express
- Socket.io
- bodyParser
- mongodb
- multer

b. Functions:

- Socket.connect()
- Server.listen()

c. Files:

- app.js: main server and db

d. Global variables:

- PORT
