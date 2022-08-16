import express from 'express';
import routes from './src/routes/InventoryChestRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 4001

//mongood connection
mongoose.Promise = global.Promise //this meane we will wait for a result when connecting to mongo to connect
mongoose.connect('mongodb://localhost/Chestdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

routes(app);

app.get('/', (req, res) =>
    res.send("Hello, welcome to your chest!")
);

app.listen(PORT, () => 
    console.log(`Server listening on ${PORT}`)
);