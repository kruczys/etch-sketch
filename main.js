"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateGrid_1 = require("./generateGrid");
var changeMode_1 = require("./changeMode");
var startDimension = 10;
var sizeChangeButton = document.querySelector("#change-size-button");
var emptyCanvasButton = document.querySelector("#reset-button");
var currMode = "random-rgb";
(0, generateGrid_1.default)(startDimension, "#grid-container");
(0, changeMode_1.default)(currMode);
sizeChangeButton.addEventListener("click", function () {
    var newGridDimension = prompt("What grid dimension are you interested in?");
    startDimension = newGridDimension ? +newGridDimension : startDimension;
    (0, generateGrid_1.default)(newGridDimension && +newGridDimension <= 100 ? +newGridDimension : 100, "#grid-container");
    (0, changeMode_1.default)(currMode);
});
emptyCanvasButton.addEventListener("click", function () {
    (0, generateGrid_1.default)(startDimension, "#grid-container");
    (0, changeMode_1.default)(currMode);
});
var rainbowModeInput = document.querySelector("#random-rgb");
var blackModeInput = document.querySelector("#black-mode");
var darkeningModeInput = document.querySelector("#darkening-mode");
rainbowModeInput.addEventListener("click", function () {
    currMode = "random-rgb";
    (0, changeMode_1.default)(currMode);
    rainbowModeInput.checked = true;
    blackModeInput.checked = false;
    darkeningModeInput.checked = false;
});
blackModeInput.addEventListener("click", function () {
    currMode = "black-mode";
    (0, changeMode_1.default)(currMode);
    rainbowModeInput.checked = false;
    blackModeInput.checked = true;
    darkeningModeInput.checked = false;
});
darkeningModeInput.addEventListener("click", function () {
    currMode = "darkening-mode";
    (0, changeMode_1.default)(currMode);
    rainbowModeInput.checked = false;
    blackModeInput.checked = false;
    darkeningModeInput.checked = true;
});
