const express = require("express");
const app = express();
const port = 8081;

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
  type: "SUV",
  color: "Red",
  engineSize: 2.0,
  insured: true,
  taxed: true,
  make: "Toyota",
  mileage: 50000,
 },
 {
  vehicleReg: "LMN456",
  type: "Sedan",
  color: "Blue",
  engineSize: 1.8,
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
