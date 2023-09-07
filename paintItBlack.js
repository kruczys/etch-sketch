"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paintItBlack = function (pixels) {
    pixels.forEach(function (pixel) {
        pixel.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = "1.0";
        });
    });
};
exports.default = paintItBlack;
