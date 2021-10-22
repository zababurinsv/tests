import path from "path";
let __dirname = path.dirname(process.argv[1]);
import whitelist from './whitelist/whitelist.mjs'
import express from "express";
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";

let app = express();
app.use(compression())
app.use(cors())
app.use(express.json())

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

app.use(queue.getMiddleware());

let corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use('/tests', express.static('docs') );

app.get('/favicon.ico', async (req, res) => {
    res.sendFile('/docs/favicon.ico', { root: __dirname });
})

app.get('/', async (req, res) => {
    res.sendFile('/docs/index.html', { root: __dirname });
})

app.get('/api/info', async (req, res) => {
    res.send({tests:'1.0.0'})
})

app.use(queue.getErrorMiddleware())
export default app