"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTicketData = exports.getTicketById = void 0;

function getTicketById(id) {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then(function (response) { return response.json(); })
        .then(function (data) {
        return data;
    });
}
exports.getTicketById = getTicketById;

function postTicketData(postData) {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then(function (response) { return response.json(); })
        .then(function (data) {
        return data;
    });
}
exports.postTicketData = postTicketData;
