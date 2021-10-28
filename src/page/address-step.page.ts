import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkbtn: ElementFinder;

  constructor () {
    this.checkbtn = $('#center_column > form > p > button > span');
  }

  public async tocheck(): Promise<void> {
    await this.checkbtn.click();
  }
}
