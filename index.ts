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

interface Car extends Vehicle{
    bodyType: String;
    wheelCount: Number;
}

interface Boat extends Vehicle{
    draft: Number
}

interface Plane extends Vehicle{
    wingspan: Number
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
        if(req.body.hasOwnProperty('bodyType') == true){
            console.log("its a car")
            const newVehicle: Car = {
                model:req.body.model,
                color:req.body.color,
                year:req.body.year,
                power:req.body.power,
                bodyType:req.body.bodyType,
                wheelCount:req.body.wheelCount
            }
            vehicleList.push(newVehicle)
        }
        if(req.body.hasOwnProperty('draft') == true){
            console.log("its a boat")
            const newVehicle: Boat = {
                model:req.body.model,
                color:req.body.color,
                year:req.body.year,
                power:req.body.power,
                draft:req.body.draft,
            }
            vehicleList.push(newVehicle)
        }
        if(req.body.hasOwnProperty('wingspan') == true){
            console.log("its a plane")
            const newVehicle: Plane = {
                model:req.body.model,
                color:req.body.color,
                year:req.body.year,
                power:req.body.power,
                wingspan:req.body.wingspan
            }
            vehicleList.push(newVehicle)
        }
        console.log(vehicleList)
    res.status(201).send("Vehicle added")
    }
})

app.listen(port, () =>{
    console.log("Server is up and running")
})