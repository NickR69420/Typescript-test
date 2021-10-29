import { Citizen, Student } from "./Citizens/City";

// Types
type User = {
  username: string;
  isCool: boolean;
};

// Objects with Types
const user: User = {
  username: "NickR69420",
  isCool: true,
};
// Interfaces
interface Connections {
  readonly github: string;
  readonly discord: string;
}

// Objects with Interfaces
const Info: Connections = {
  github: "https://github.com/NickR69420/",
  discord: "Nickk#7480",
};

// Enums
enum Languages {
  JS = "Javascript",
  TS = "Typescript",
}

// Functions
function Addition(a: number, b: number): number {
  return a + b;
}
console.log(Addition(1, 2));

//functions with interfaces (fav thing) :D
interface MathNumbers {
  (x: number, y: number): number;
}

const add: MathNumbers = (x: number, y: number): number => x + y;
const substract: MathNumbers = (x: number, y: number): number => x - y;
const multiply: MathNumbers = (x: number, y: number): number => x * y;
const divide: MathNumbers = (x: number, y: number): number => x / y;

console.log(
  add(69, 420),
  substract(69, 420),
  multiply(69, 420),
  divide(69, 420)
);

// Classes
interface RepoInterface {
  id: number;
  url: string;
  lang: string;
}

class Repo implements RepoInterface {
  id: number;
  url: string;
  lang: string;

  constructor(url: string, lang: string, id: number) {
    this.url = url;
    this.lang = lang;
    this.id = id;
  }

  about() {
    return console.log(this.url + "blob/main/README.md");
  }
}

const randomnum: number = Math.floor(Math.random() * 1000000000000);

const Dobrov2 = new Repo(
  "https://github.com/DobroDev/Dobro-v2/",
  Languages.JS,
  randomnum
);

console.log(Dobrov2);

class PrivRepo extends Repo {
  priv: boolean;

  constructor(url: string, lang: string, id: number, priv: boolean) {
    super(url, lang, id);
    this.priv = priv;
  }
}

const Dobrov3 = new PrivRepo("coming soon", Languages.TS, randomnum, true);

console.log(Dobrov3.about());

// Generics
// function getArr(toes: any): any {
//   return new Array().concat(toes);
// }

// let nails = getArr([1, 2, 3]);
// let toethings = getArr(["toe1", "toe2", "toe3"]);

// toethings.push("foot")

function getArr<T>(toes: T[]): T[] {
  return new Array().concat(toes);
}

let nails = getArr<number>([1, 2, 3]);
let toethings = getArr<string>(["toe1", "toe2", "toe3"]);

toethings.push("foot");
nails.push(69);
