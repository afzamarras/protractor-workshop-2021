import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addtoCarBtn: ElementFinder;

  constructor () {
    this.addtoCarBtn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addtoCart(): Promise<void> {
    await this.addtoCarBtn.click();
  }
}
