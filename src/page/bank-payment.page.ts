import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private btn: ElementFinder;

  constructor () {
    this.btn = $('#cart_navigation > button > span');
  }

  public async pay(): Promise<void> {
    await this.btn.click();
  }
}
