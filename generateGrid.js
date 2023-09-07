"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyGrid_1 = require("./emptyGrid");
var generateGrid = function (dimension, selector) {
    (0, emptyGrid_1.default)(selector);
    var gridContainer = document.querySelector(selector);
    var squareSize = 100 / dimension;
    for (var i = 0; i < dimension * dimension; i++) {
        var gridSquare = document.createElement("div");
        gridSquare.setAttribute("style", "width: ".concat(squareSize, "%; height: ").concat(squareSize, "; padding: 0; margin: 0;"));
        gridSquare.setAttribute("class", "pixel");
        gridContainer.appendChild(gridSquare);
    }
};
exports.default = generateGrid;
