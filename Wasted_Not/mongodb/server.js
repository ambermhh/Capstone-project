const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
let dbConnect = require("./dbConnect");


// parse requests of content-type -application / json;
app.use(express.json());
app.use(cors())

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

let commentRoutes = require('./routes/commentRoutes')
app.use('/api/comments', commentRoutes)

let recipeRoutes = require('./routes/recipeRoutes')
app.use('/api/recipes', recipeRoutes)

let mealPlannerRoutes = require('./routes/mealPlannerRoutes')
app.use('/api/mealPlanners', mealPlannerRoutes)

let subscriptionRoutes = require('./routes/subscriptionRoutes')
app.use('/api/subscriptions', subscriptionRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
