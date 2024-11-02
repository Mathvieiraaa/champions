import express, {Request, Response, Router} from "express";
import router from "./routers/routes";

function createApp() {

    const app = express();
    app.use(express.json())
    app.use("/api", router);
    
    app.post('/', (req: Request, res: Response) => {
        res.json()
    });
    
    app.put('/', (req: Request, res: Response) => {
        res.json()
    });
    
    app.patch('/', (req: Request, res: Response) => {
        res.json()
    });
    
    app.delete('/', (req: Request, res: Response) => {
        res.json()
    });

    return app;
}


export default createApp;