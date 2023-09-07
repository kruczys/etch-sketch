"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateRandomColor = function () {
    var redValue = Math.floor(Math.random() * 255);
    var greenValue = Math.floor(Math.random() * 255);
    var blueValue = Math.floor(Math.random() * 255);
    return "rgba(".concat(redValue, ",").concat(greenValue, ",").concat(blueValue, ")");
};
exports.default = generateRandomColor;
