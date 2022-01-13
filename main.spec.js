import { sayHello } from "./main";

describe("sayHello", () => {
  it("should say hello world", () => {
    expect(sayHello()).toBe("Hello world!");
  });
});
