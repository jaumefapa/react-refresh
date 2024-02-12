import test, { describe } from "node:test";

const FAVORITE_ROUTE = "/api/v1//character/favorite";

describe(`${FAVORITE_ROUTE} endpoint`, async () => {
  describe("addFavorite", async () => {
    test("Should break with 'BAD_REQUEST' if not valid payload", async () => {});

    // TODO: Character exists

    test("Should return 201 and the new added favorite", async () => {});
  });

  describe("removeFavorite", async () => {
    test("Should break with 'BAD_REQUEST' if not valid payload", async () => {});

    // TODO: Favorite belongs to user
    test("Should return 200 and the deleted favorite", async () => {});
  });

  describe("findAllFavorites", async () => {
    test("Should break with 'BAD_REQUEST' if userId is not present", async () => {});

    test("Should return 200 and an array of favorites", async () => {});
  });
});
