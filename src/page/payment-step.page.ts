import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paybtn: ElementFinder;

  constructor () {
    this.paybtn = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async pay(): Promise<void> {
    await this.paybtn.click();
  }
}
