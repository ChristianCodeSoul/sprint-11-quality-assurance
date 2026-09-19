const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();


const app = express(); 
app.use(helmet());
app.use(cors());
app.use(express.json());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Sprint 11 backend is running",
    });
});

const PORT = process.env.PORT || 4000;
if (require.main === module) {
    connectDB();
    app.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}`);
    });
}
module.exports = app;