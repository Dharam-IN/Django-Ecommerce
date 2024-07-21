import express from 'express';
const app = express();
const PORT = 8000;
// Route
app.get("/", (req, res) => {
    return res.send("Hello From Server!");
});
app.listen(PORT, () => console.log(`Server is Running On Port ${PORT}`));
