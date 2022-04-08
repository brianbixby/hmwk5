"use strict";

var events = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

function setDate() {
    $("#currentDay").text(moment().format('dddd, MMM Do'));
}

setDate();

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

function renderEvents() {
    for (let i = 0; i < events.length; i++) {
        if (events[i].text) {
            if (moment(events[i].date).isSame(new Date(), 'day') && events[i].hour - 9 == i) {
                var textArea = $(`#textarea${events[i].hour}`).val(events[i].text);
            }
        }
    }
}

function init() {
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents !== null) {
        events = storedEvents;
    }
    renderEvents();
}

function storeEvents() {
    localStorage.setItem("events", JSON.stringify(events));
    setDate();
    applyColor();
}

$("#scheduleContainer").on("click", ".saveBtn", event => {
    var hour = $(event.target).is("button") ? $(event.target).attr('data-time') : $(event.target).parent('button').attr('data-time');
    var text = $(`#textarea${hour}`).val().trim();
    var date = moment();

    events.splice(hour - 9, 1, { hour, text, date });
    storeEvents();
});

init();

