const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://vadim:Tim1pwfh@ds133086.mlab.com:33086/heroku_q92vjh4t",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://vadim:Tim1pwfh@ds019033.mlab.com:19033/heroku_x04pm5w2",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
