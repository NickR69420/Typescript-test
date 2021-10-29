import { Citizen, Employee, Student } from "./Citizens/City";

const Person = new Citizen("Brad", 16);
const Brad = new Student("Brad", 16, true, 11, false, false, false);
const Tom = new Employee("Tom", 23, false, false, "Janitor");

// Imposter
import { SlickNicky10 } from "./Citizens/City";

const ImposterNick = new SlickNicky10({
  name: "SlickNicky10",
  IsImposter: true,
  Sussy: true,
  isCool: false,
  likesMen: true,
  toefoothing: true,
  baldy: true,
});

console.log(ImposterNick);
