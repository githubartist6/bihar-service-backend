require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utls/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is runnig http://localhost:/${PORT}`);
    });
});

const authRoute = require("./router/auth-Router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const newrequestRoute = require("./router/request-routes");
const profileRoute = require("./router/profile-router");
const travelRoutes = require("./router/travel-route");


// let's tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/data", newrequestRoute);
app.use("/api/account", profileRoute);
app.use("/api/agenttravels", travelRoutes)

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

