// Voltage Inputs
let voltageInput = document.getElementById("voltage-input");
let voltageUnits = document.getElementById("voltage-units");

// Current Inputs
let currentInput = document.getElementById("current");
let currentUnits = document.getElementById("current-units");

// Resistance Inputs
let resistanceInput = document.getElementById("resistance");
let resistanceUnits = document.getElementById("resistance-units");

// Buttons
const calculateButton = document.getElementById("calculate-btn");
const resetButton = document.getElementById("reset-btn");

// Result
let result = document.getElementById("result");


function calculateResistance() {
    let resistance = ((parseFloat(voltageInput.value) * parseFloat(voltageUnits.value)) / (parseFloat(currentInput.value) * parseFloat(currentUnits.value))).toFixed(2);
    if (resistance < 1000) {
        result.innerHTML = "R = " + resistance + "Ω";
    } else if (resistance >= 1000 && resistance < 1000000) {
        result.innerHTML = "R = " + resistance / 1000 + 'kΩ';
    } else {
        result.innerHTML = "R = " + resistance / 1000000 + 'MΩ';
    }
}

function calculateVoltage() {
    let voltage = ((parseFloat(currentInput.value) * parseFloat(currentUnits.value)) * (parseFloat(resistanceInput.value) * parseFloat(resistanceUnits.value))).toFixed(2);
    if (voltage < 0.1) {
        result.innerHTML = "V = " + voltage * 1000 + "mV";
    } else if (voltage >= 0.1 && voltage < 1000) {
        result.innerHTML = "V = " + voltage + 'V';
    } else {
        result.innerHTML = "V = " + voltage / 1000 + 'kV';
    }
}

function calculateCurrent() {
    let current = ((parseFloat(voltageInput.value) * parseFloat(voltageUnits.value)) / (parseFloat(resistanceInput.value) * parseFloat(resistanceUnits.value))).toFixed(2);
    if (current < 0.1) {
        result.innerHTML = "I = " + current * 1000 + "mA";
    } else if (current >= 0.1 && current < 1000) {
        result.innerHTML = "I = " + current + 'A';
    } else {
        result.innerHTML = "I = " + current / 1000 + 'kA';
    }
}

function calculate() {
    if (resistanceInput.value === '' && voltageInput.value === '' && currentInput.value === '') {
        result.innerHTML = "Please provide data for calculations"
    } else if (resistanceInput.value === '') {
        calculateResistance();
    } else if (voltageInput.value === '') {
        calculateVoltage();
    } else if (currentInput.value === '') {
        calculateCurrent();
    } else {
        result.innerHTML = "Fill only two values"
    }
}

function reset() {
    resistanceInput.value = '';
    voltageInput.value = '';
    currentInput.value = '';
    result.innerHTML = '...';
}
