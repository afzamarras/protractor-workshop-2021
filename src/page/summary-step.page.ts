import { $, ElementFinder } from 'protractor';

export class SummarySteppage {
  private checkbtn: ElementFinder;

  constructor () {
    this.checkbtn = $('.cart_navigation span');
  }

  public async tocheck(): Promise<void> {
    await this.checkbtn.click();
  }
}
