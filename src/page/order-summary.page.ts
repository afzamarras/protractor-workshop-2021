import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirm: ElementFinder;

  constructor () {
    this.confirm = $('#center_column > div > p > strong');
  }

  public async getMessage(): Promise<string> {
    return this.confirm.getText();
  }
}
