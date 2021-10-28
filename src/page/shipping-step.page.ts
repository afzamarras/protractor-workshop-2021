import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkbtn: ElementFinder;
  private terms: ElementFinder;

  constructor () {
    this.checkbtn = $('#form > p > button > span');
    this.terms = $('#cgv');
  }

  public async termscheck(): Promise<void> {
    await this.terms.click();
  }
  public async tocheck(): Promise<void> {
    await this.checkbtn.click();
  }
}
