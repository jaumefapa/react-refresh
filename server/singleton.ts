import { jest } from "@jest/globals";
import { mockDeep, mockReset } from "jest-mock-extended";
import type { DeepMockProxy } from "jest-mock-extended";
import type { PrismaClient } from "@prisma/client";

import prisma from "./src/utils/db";

jest.mock("./src/utils/db", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
