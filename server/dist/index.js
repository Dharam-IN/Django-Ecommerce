import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 7000;
// Route
app.get("/", (req, res) => {
    return res.send("Hello From Server!");
});
app.listen(PORT, () => console.log(`Server is Running On Port ${PORT}`));
