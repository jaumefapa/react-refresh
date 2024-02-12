import test, { describe } from "node:test";

const USER_LOGIN_ROUTE = "/api/v1/user/login";
const USER_REGISTER_ROUTE = "/api/v1/user/register";

describe(`${USER_LOGIN_ROUTE} endpoint`, async () => {
  test("Should break with 'BAD_REQUEST' if no credentials are provided", async () => {});

  test("Should break with 'WRONG_CREDENTIALS' when there is no account", async () => {});
  test("Should break with 'WRONG_CREDENTIALS' when password is incorrect", async () => {});

  test("Should return 200 and a token when credentials are correct", async () => {});
});

describe(`${USER_REGISTER_ROUTE} endpoint`, async () => {
  test("Should break with 'BAD_REQUEST' if not valid credentials are provided", async () => {});

  test("Should break with 'USER_ALREADY_EXISTS' if email is already in use", async () => {});

  test("Should return 201 and a token when credentials are correct", async () => {});
});
