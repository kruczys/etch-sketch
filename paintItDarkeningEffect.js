"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paintItDarkening = function (pixels) {
    var opacity = 0;
    pixels.forEach(function (pixel) {
        pixel.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = "0.".concat(opacity % 10);
            opacity += 1;
        });
    });
};
exports.default = paintItDarkening;
