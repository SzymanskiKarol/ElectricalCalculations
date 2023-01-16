// Voltage Inputs
let voltageInput = document.getElementById("voltage-input");
let voltageUnits = document.getElementById("voltage-units");

// Current Inputs
let currentInput = document.getElementById("current");
let currentUnits = document.getElementById("current-units");

// Resistance Inputs
let resistanceInput = document.getElementById("resistance");
let resistanceUnits = document.getElementById("resistance-units");

// Power Inputs
let powerInput = document.getElementById("power");
let powerUnits = document.getElementById("power-units");

// Buttons
const calculateButton = document.getElementById("calculate-btn");
const resetButton = document.getElementById("reset-btn");

// Result
let result = document.getElementById("result");


function calculateResistance() {
    let resistance = (parseFloat(voltageInput.value) / parseFloat(current.value)).toFixed(2);
    if (resistance < 1000) {
        result.innerHTML = resistance + "Ω";
    } else if (resistance >= 1000 && resistance < 1000000) {
        result.innerHTML = resistance + 'kΩ';
    } else {
        result.innerHTML = resistance + 'MΩ';
    }
}

function calculatePower() {
    let power = (parseFloat(voltageInput.value) * parseFloat(current.value)).toFixed(2);
    if (power < 1000) {
        result.innerHTML = power + "W";
    } else if (power >= 1000 && power < 1000000) {
        result.innerHTML = power + 'kW';
    } else {
        result.innerHTML = power + 'MW';
    }
}

