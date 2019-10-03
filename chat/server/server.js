const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const sockets = require("./socket.js");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

app.use(cors());
app.use(bodyParser.json());
const url = "mongodb://localhost:27017";
MongoClient.connect(
  url,
  { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    //Callback function code. When we have a connection start the rest of the app.
    if (err) {
      return console.log(err);
    }
    const dbName = "mydb";
    const db = client.db(dbName);
    sockets.connect(app, io, db);
    require("./routes/api-add.js")(db, app);
    //require('./routes/api-prodcount.js')(db,app);
    require("./routes/api-validid.js")(db, app);
    //require('./routes/api-getlist.js')(db,app);
    require("./routes/api-getitem.js")(db, app, ObjectID);
    require("./routes/api-update.js")(db, app, ObjectID);
    require("./routes/api-deleteitem.js")(db, app, ObjectID);

    //Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
    require("./listen.js")(http);
  }
);
