const { escapeRegex } = require("../utils/regex"); // Predpokladáme, že `regex.js` je v `utils/`

describe("escapeRegex", () => {
  it("should escape special regex characters", () => {
    // Testujeme, či escapeRegex funguje správne pre špeciálne znaky
    expect(escapeRegex(".*+?^${}()|[]\\")).toBe(
      "\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\"
    );
  });

  it("should return an empty string for non-string input", () => {
    // Test pre prázdny alebo neplatný vstup
    expect(escapeRegex()).toBe("");
    expect(escapeRegex(null)).toBe("");
    expect(escapeRegex(123)).toBe("");
  });

  it("should return the same string if no special characters are present", () => {
    // Testujeme, že bežný text sa neeskaluje
    expect(escapeRegex("hello world")).toBe("hello world");
  });

  it("should escape dot correctly", () => {
    // Testujeme bodku ako špeciálny znak
    expect(escapeRegex("hello.world")).toBe("hello\\.world");
  });
});
