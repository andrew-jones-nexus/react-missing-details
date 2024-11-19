const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;

app.use(cors());

const mockData = [
 {
  vehicleReg: "ABC123",
  type: null,
  color: null,
  engineSize: 1.6,
  insured: null,
  taxed: null,
  make: null,
  mileage: null,
 },
 {
  vehicleReg: "XYZ789",
  type: "hatchback",
  color: null,
  engineSize: 2.0,
  insured: true,
  taxed: true,
  make: null,
  mileage: null,
 },
 {
  vehicleReg: null,
  type: "coupe",
  color: "Blue",
  engineSize: null,
  insured: false,
  taxed: false,
  make: "Honda",
  mileage: 30000,
 },
];

app.get("/", (req, res) => {
 const randomIndex = Math.floor(Math.random() * mockData.length);
 res.json(mockData[randomIndex]);
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
