import { isString, isBoolean, isUuid } from "./validators";

describe("isString", () => {
  it("accepts strings", () => {
    expect(isString("")).toBeUndefined();
  });

  it("rejects non-strings", () => {
    expect(isString([""])).toMatch("must be a string");
  });
});

describe("isBoolean", () => {
  it("accepts bools", () => {
    expect(isBoolean(false)).toBeUndefined();
  });

  it("rejects non-bools", () => {
    expect(isBoolean(1)).toMatch("must be a bool");
  });
});

describe("isUuid", () => {
  it("accepts a CIEL External ID", () => {
    expect(isUuid("123118AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")).toBeUndefined();
  });

  it("accepts a valid UUID with dashes", () => {
    expect(isUuid("28c37ff6-0079-4fa7-b803-5d547ac454e0")).toBeUndefined();
  });

  it("rejects a bad UUID", () => {
    expect(isUuid("28c37ff6-0079-4fa7-b803-5d547ac454e")).toMatch(
      "must be a valid UUID"
    );
  });

  it("rejects a bad CIEL External ID", () => {
    expect(isUuid("123118AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")).toMatch(
      "must be a valid UUID"
    );
  });
});
