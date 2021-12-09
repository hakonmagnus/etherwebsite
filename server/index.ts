import express, { Request, Response } from 'express';
import next from 'next';
import compression from 'compression';
import cluster from 'cluster';

const port: number = parseInt(process.env.PORT, 10) || 3000;
const dev: boolean = process.env.NODE_ENV != "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const public_path = "public";
const totalCPUs = require('os').cpus().length;

function setNoCache(res: Response) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "public, no-cache");
}

function setLongTermCache(res: Response) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}

if (!dev && cluster.isMaster) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Master ${process.pid} is running`);
    
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Forking a new worker");
        cluster.fork();
    });
} else {
    app.prepare()
    .then(() => {
        const server = express();
        
        server.use(compression());
        server.use(
            express.static(public_path, {
                extensions: ['html'],
                setHeaders(res, path) {
                    if (path.match(/(\.html|\/sw\.js)$/)) {
                        setNoCache(res);
                        return;
                    }
                    
                    if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json|svg)$/)) {
                        setLongTermCache(res);
                    }
                }
            })
        );
        
        server.all('*', (req: Request, res: Response) => handle(req, res));
        
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    });
}