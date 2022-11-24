import { add } from "../Utils";

describe("Utils", () => {
  describe("add", () => {
    it("Should return correct value", () => {
      // Arrange
      const a = 2;
      const b = 2;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(4);
    });
  });
});
