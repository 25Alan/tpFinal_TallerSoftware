import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();

var corsOptions = {
    origin : 'https://localhost:8081'
};

app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended:true}));

import { sequelize } from "./app/models";

sequelize.sync()
.then(() => {
    console.log('Synced db.');
})
.catch((err) => {
    console.log('Failed to sync db : ' + err.message);
});
