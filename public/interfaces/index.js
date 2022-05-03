"use strict";
var me = {
    name: "Alex",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent", amount);
        return amount;
    },
};
// console.table(me);
var greetPerson = function (person) {
    // console.log("Hello", person.name);
};
greetPerson(me);
