import express from 'express';
import {config} from "dotenv-flow";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {router as routerUser} from "./routes/auth.route";
import {apiRouter} from "./routes/api.route";
import {AppConfig} from "./config";
import {userRouter} from "./routes/user.route";

config({node_env: AppConfig.NODE_ENV});

const app = express();
// const port = process.env.PORT || 8000;
const port = 8001;

app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Museart Api is running!');
});
app.use('/api', apiRouter);
app.use('/auth', routerUser);
app.use('/users', userRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

