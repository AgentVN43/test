import LoginPage from "../pageobjects/LoginPage.js";
import { userCredentials } from "../pageobjects/config.js";

describe("My Login application", () => {
  let loginPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    await loginPage.open();
  });

  it("should login with valid credentials", async () => {
    const { username, password, message } = userCredentials.validUser;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
    await expect(browser).toHaveUrlContaining("/secure");
  });

  it("should show error with invalid username", async () => {
    const { username, password, message } = userCredentials.invalidUser;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
  });

  it("should show error with invalid password", async () => {
    const { username, password, message } = userCredentials.invalidPassword;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
  });

  it("should show error with blank username", async () => {
    const { username, password, message } = userCredentials.blankUser;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
  });

  it("should show error with blank password", async () => {
    const { username, password, message } = userCredentials.blankPassword;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
  });

  it("should show error with blank username and password", async () => {
    const { username, password, message } = userCredentials.blankBoth;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
  });

  it("should logout successfully", async () => {
    const { username, password, message } = userCredentials.validUser;
    await loginPage.login(username, password);
    await expect(loginPage.flashMessage).toBeExisting();
    await expect(loginPage.flashMessage).toHaveTextContaining(message);
    await loginPage.logout();
    await expect(browser).toHaveUrlContaining("/login");
  });
});
