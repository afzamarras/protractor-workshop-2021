import { $, ElementFinder } from 'protractor';

export class SingInStepPage {
  private email: ElementFinder;
  private pass: ElementFinder;
  private btn: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.pass = $('#passwd');
    this.btn = $('#SubmitLogin > span');
  }

  public async filltext(email='', pass=''): Promise<void[]> {
    return Promise.all([
      this.email.sendKeys(email),
      this.pass.sendKeys(pass),
    ]);
  }

  public async signIn(): Promise<void> {
    return this.btn.click();
  }
}
