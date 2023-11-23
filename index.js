const express = require("express");
const {route} = require("./Router/BlogRouter");
const app = express();
const cors = require("cors");

app.use(cors({
    origin : "*"
}))
// expressServer.use(BlogRoutes);

app.use(route)
app.listen(5000)