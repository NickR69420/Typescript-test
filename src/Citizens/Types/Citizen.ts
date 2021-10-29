interface ICitizen {
  name: string;
  age: number;
}

/**
 * A Citizen in a city
 */
export class Citizen implements ICitizen {
  name: string;
  age: number;

/**
 * @kind constructor
 * @param name Name of the citizen
 * @param age Age of the citzen
 */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
