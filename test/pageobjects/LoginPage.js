export default class LoginPage {
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    get flashMessage() { return $('#flash'); }
    get logoutLink() { return $('a[href="/logout"]'); }

    async open() {
        await browser.url('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}
