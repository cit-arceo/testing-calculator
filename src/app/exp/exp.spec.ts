import { exp } from "./exp"

describe('exp unit tests', () => {
     // Pattern AAA (Arrange - Act - Assert)
    it('Should exp 2 ^ 0 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = exp(2 , 0);
        // Assert
        expect(result).toBe(1);
        })
    it('Should exp 2 ^ 1 = 2', () => {
        // Arrange
        let result = 0;
        // Act
        result = exp(2, 1);
        // Assert
        expect(result).toBe(2);
        })
    it('Should exp 2 ^ 2 = 4',() => {
        // Arrange
        let result = 0;
        // Act
        result = exp(2 , 2);
        // Assert
        expect(result).toBe(4);
        })
    it('should add 2 ^ 3 = 8', () => {
        // Arrange
        let result = 0;
        // Act
        result = exp(2 , 3);
        // Assert
        expect(result).toBe(8);
        })
})