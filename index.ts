import express, {Express, Request, Response} from "express"
const app: Express = express()
const port: Number = 3000
app.use(express.json())

interface Vehicle {
    model: String;
    color: String;
    year: Number;
    power: Number;
}

let vehicleList: Vehicle[] = []

app.get("/",(req: Request,res: Response) =>{
    res.send("Hello from TS-express")
})

app.get("/hello",(req: Request,res: Response) =>{
    res.send("Hello world")
})

app.post("/vehicle/add",(req: Request,res: Response) =>{
    if(!req.body.model || !req.body.color || !req.body.year|| !req.body.power){
        res.status(400).send("Malformed request")
    }
    else{
        const newVehicle: Vehicle = {
            model:req.body.model,
            color:req.body.color,
            year:req.body.year,
            power:req.body.power
        }
        vehicleList.push(newVehicle)
        console.log(vehicleList)
    res.status(201).send("Vehicle added")
    }
})

app.listen(port, () =>{
    console.log("Server is up and running")
})