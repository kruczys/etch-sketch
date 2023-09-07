"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyGrid = function (selector) {
    var gridContainer = document.querySelector(selector);
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};
exports.default = emptyGrid;
