import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import apolloServer from './config/apolloServer.js';
import { expressMiddleware } from '@apollo/server/express4';
const app = express();
const PORT = process.env.PORT || 7000;
// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Route
app.get("/", (req, res) => {
    return res.send("Hello From Server!");
});
const startApolloServer = async () => {
    await apolloServer.start();
    app.use("/graphql", expressMiddleware(apolloServer));
};
startApolloServer();
app.listen(PORT, () => console.log(`Server is Running On Port ${PORT}`));
