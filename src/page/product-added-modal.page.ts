import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkbtn: ElementFinder;

  constructor () {
    this.checkbtn = $('[style*="display: block;"] .button-container > a');
  }

  public async tocheck(): Promise<void> {
    await this.checkbtn.click();
  }
}
