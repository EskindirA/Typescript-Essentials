"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberStringToNumber = exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
var numberStringToNumber = function (numberString) {
    return parseInt(numberString);
};
exports.numberStringToNumber = numberStringToNumber;
