var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// Inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// List template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
// // Generics
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "yoshi", age: 40 });
// console.log(docOne);
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "yoshi", age: 40 });
// // let docTwo = addUID("hello");
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "yoshi", age: 40 });
var docThree = {
    uid: 1,
    resourceName: "Person",
    data: { name: "Shaun" },
};
var docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["test", "milk", "chocolate"],
};
console.log(docThree, docFour);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "changes", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.table(docs);
// const invOne = new Invoice("mario", "work on the mario website ", 200);
// const invTwo = new Invoice("luigi", "work on the luigi website ", 250);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invOne.client = "yoshi";
// // invTwo.amount = 400;
// // console.table(invoices);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
//
