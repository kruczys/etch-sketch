"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paintItRandomRGB_1 = require("./paintItRandomRGB");
var paintItBlack_1 = require("./paintItBlack");
var paintItDarkeningEffect_1 = require("./paintItDarkeningEffect");
var setMode = function (chosenMode) {
    var pixels = document.querySelectorAll(".pixel");
    switch (chosenMode) {
        case "random-rgb":
            (0, paintItRandomRGB_1.default)(pixels);
            break;
        case "black-mode":
            (0, paintItBlack_1.default)(pixels);
            break;
        case "darkening-mode":
            (0, paintItDarkeningEffect_1.default)(pixels);
            break;
        default:
            (0, paintItBlack_1.default)(pixels);
    }
};
exports.default = setMode;
