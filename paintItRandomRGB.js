"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateRandomRGB_1 = require("./generateRandomRGB");
var paintItRandomRGB = function (pixels) {
    pixels.forEach(function (pixel) {
        pixel.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor =
                (0, generateRandomRGB_1.default)();
            e.target.style.opacity = "1.0";
        });
    });
};
exports.default = paintItRandomRGB;
