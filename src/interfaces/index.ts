// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Alex",
  age: 30,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log("I spent", amount);
    return amount;
  },
};

// console.table(me);

const greetPerson = (person: IsPerson) => {
  // console.log("Hello", person.name);
};

greetPerson(me);
