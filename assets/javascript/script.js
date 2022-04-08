"use strict";

function setDate() {
    $("#currentDay").text(moment().format('dddd, MMM Do'));
}

setDate()

function applyColor() {
    var currentHour = moment().hours();
    for (let i = 9; i < 18; i++) {
        if (currentHour > i) {
            $(`#eventCol${i}`).addClass("past");
        } else if (currentHour == i) {
            $(`#eventCol${i}`).addClass("present");
        } else {
            $(`#eventCol${i}`).addClass("future");
        }
    }
}

applyColor();

