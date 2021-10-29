import { Citizen } from "./Citizen";

/**
 * An Employed Citizen
 * @extends {Citizen}
 */
export class Employee extends Citizen {
  under18: boolean;
  student: boolean;
  occupation: string;

  constructor(
    name: string,
    age: number,
    under18: boolean,
    student: boolean,
    occupation: string
  ) {
    super(name, age);

    this.under18 = under18;
    this.student = student;
    this.occupation = occupation;
  }
}
