import { Citizen } from "./Citizen";

/**
 * * A Studying Citizen - maybe working or in school or college or higher education
 * @extends {Citizen}
 */
export class Student extends Citizen {
  under18: boolean;
  grade: number;
  degree: boolean;
  masters: boolean;
  PHD: boolean;

  constructor(
    name: string,
    age: number,
    under18: boolean,
    grade: number,
    degree: boolean,
    masters: boolean,
    PHD: boolean
  ) {
    super(name, age);
    this.under18 = under18;
    this.grade = grade;
    this.degree = degree;
    this.masters = masters;
    this.PHD = PHD;
  }
}
