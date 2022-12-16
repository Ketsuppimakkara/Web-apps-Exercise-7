"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let vehicleList = [];
app.get("/", (req, res) => {
    res.send("Hello from TS-express");
});
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.get("/vehicle/search/:model", (req, res) => {
    if (!req.params.model) {
        res.status(400).send("Malformed request");
    }
    else {
        const searchedModel = req.params.model;
        console.log(searchedModel);
        const vehicle = vehicleList.find(entry => entry.model == searchedModel);
        if (vehicle != undefined) {
            res.status(200).send(vehicle);
        }
        else {
            res.status(404).send("No such model found!");
        }
    }
});
app.post("/vehicle/add", (req, res) => {
    if (!req.body.model || !req.body.color || !req.body.year || !req.body.power) {
        res.status(400).send("Malformed request");
    }
    else {
        if (req.body.hasOwnProperty('bodyType') == true) {
            console.log("its a car");
            const newVehicle = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                bodyType: req.body.bodyType,
                wheelCount: req.body.wheelCount
            };
            vehicleList.push(newVehicle);
            res.status(201).send("Vehicle added");
            return;
        }
        if (req.body.hasOwnProperty('draft') == true) {
            console.log("its a boat");
            const newVehicle = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                draft: req.body.draft,
            };
            vehicleList.push(newVehicle);
            res.status(201).send("Vehicle added");
            return;
        }
        if (req.body.hasOwnProperty('wingspan') == true) {
            console.log("its a plane");
            const newVehicle = {
                model: req.body.model,
                color: req.body.color,
                year: req.body.year,
                power: req.body.power,
                wingspan: req.body.wingspan
            };
            vehicleList.push(newVehicle);
            res.status(201).send("Vehicle added");
            return;
        }
    }
});
app.listen(port, () => {
    console.log("Server is up and running");
});
