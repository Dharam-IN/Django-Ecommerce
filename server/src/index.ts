import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config'

const app: Application = express();
const PORT = process.env.PORT || 7000;

// Route
app.get("/", (req: Request, res: Response) =>{
    return res.send("Hello From Server!");
})

app.listen(PORT, () => console.log(`Server is Running On Port ${PORT}`));