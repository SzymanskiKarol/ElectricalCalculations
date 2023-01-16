// Voltage Inputs
const voltageInput = document.getElementById("voltage").value;
const voltageUnits = document.getElementById("voltage-units").value;
const voltage = voltageInput * voltageUnits;

// Current Inputs
const currentInput = document.getElementById("current").value;
const currentUnits = document.getElementById("current-units").value;
const current = currentInput * currentUnits;

// Resistance Inputs
const resistanceInput = document.getElementById("resistance").value;
const resistanceUnits = document.getElementById("resistance-units").value;
const resistance = resistanceInput * resistanceUnits;

// Power Inputs
const powerInput = document.getElementById("power").value;
const powerUnits = document.getElementById("power-units").value;
const power = powerInput * powerUnits;

// Buttons
const calculateButton = document.getElementById("calculate-btn");
const resetButton = document.getElementById("reset-btn");

// Result
let result = document.getElementById("result");


function calculate() {
    
}