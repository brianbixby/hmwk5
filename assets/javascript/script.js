"use strict";

document.querySelector("#currentDay").textContent = moment().format('dddd, MMM Do');

function applyColor() {
    var currentHour = moment().hours();
    console.log(currentHour, typeof currentHour);
    for (let i=9; i<18; i++) {
        if (currentHour > i) {
            $(`#eventCol${i}`).addClass("past");
        } else if (currentHour == i) {
            $(`#eventCol${i}`).addClass("present");
        } else {
            $(`#eventCol${i}`).addClass("future");
        }
        console.log(i, currentHour, typeof currentHour);
    }
}

applyColor();

