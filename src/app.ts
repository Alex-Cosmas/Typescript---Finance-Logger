import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
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

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello");

// console.log(docOne);

// Generics with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "Person",
  data: { name: "Shaun" },
};

const docFour: Resource<string[]> = {
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
