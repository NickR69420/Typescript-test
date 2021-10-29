interface Imposter {
  /**
   * AKA
   */
  name: string;
  /**
   * Actual imposter Nick
   */
  IsImposter: boolean;
  /**
   * Sussy ass
   */
  Sussy: boolean;
  /**
   * Cool person?
   */
  isCool: boolean;
  /**
   * Likes men?
   */
  likesMen: boolean;
  /**
   * Has a toefoot?
   */
  toefoothing: boolean;
  /**
   * Is bald?
   */
  baldy: boolean;
}

/**
 * @name SlickNicky10
 * @param Imposter Nick
 * @summary SlickNicky10 is the imposter
 */
export class SlickNicky10 {
  public name: string;
  public IsImposter: boolean;
  public Sussy: boolean;
  public isCool: boolean;
  public likesMen: boolean;
  public toefoothing: boolean;
  public baldy: boolean;

  constructor(Nick: Imposter) {
    this.name = Nick.name;
    this.IsImposter = Nick.IsImposter;
    this.Sussy = Nick.Sussy;
    this.isCool = Nick.isCool;
    this.likesMen = Nick.likesMen;
    this.toefoothing = Nick.toefoothing;
    this.baldy = Nick.baldy;
  }
}
