import { browser } from 'protractor';
import * as pages from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: pages.MenuContentPage = new pages.MenuContentPage();
  const addressStep: pages.AddressStepPage = new pages.AddressStepPage();
  const bankPayment: pages.BankPaymentPage = new pages.BankPaymentPage();
  const orderSummary: pages.OrderSummaryPage = new pages.OrderSummaryPage();
  const paymentStep: pages.PaymentStepPage = new pages.PaymentStepPage();
  const productAdded: pages.ProductAddedModalPage = new pages.ProductAddedModalPage();
  const productList: pages.ProductListPage = new pages.ProductListPage();
  const shippingStep: pages.ShippingStepPage = new pages.ShippingStepPage();
  const signIn: pages.SingInStepPage = new pages.SingInStepPage();
  const summaryStep: pages.SummarySteppage = new pages.SummarySteppage();


  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    //await(browser.sleep(15000));
    await menuContentPage.goToTShirtMenu();
    //await(browser.sleep(4000));

    await productList.addtoCart();
    await(browser.sleep(6000));

    await productAdded.tocheck();
    //await(browser.sleep(4000));

    await summaryStep.tocheck();
    //await(browser.sleep(4000));

    await signIn.filltext('aperdomobo@gmail.com', 'WorkshopProtractor');
    await signIn.signIn();
    //await(browser.sleep(4000));

    await addressStep.tocheck();
    //await(browser.sleep(4000));

    await shippingStep.termscheck();
    //await(browser.sleep(4000));
    await shippingStep.tocheck();
    //await(browser.sleep(4000));

    await paymentStep.pay();
    //await(browser.sleep(4000));

    await bankPayment.pay();
    //await(browser.sleep(4000));

    await expect(orderSummary.getMessage()).toBe('Your order on My Store is complete.');
  });
});
