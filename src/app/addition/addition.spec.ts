import { addition } from "./addition"

describe('addition unit tests', () => {
     // Pattern AAA (Arrange - Act - Assert)
    it('Should add 2 + 2 = 4', () => {
        // Arrange
        let result = 0;
        // Act
        result = compute(-1000);
        // Assert
        expect(result).toBe(0);
        })
    it('Should add 0 + -2 = -2', () => {
        // Arrange
        let result = 0;
        // Act
        result = compute(-1000);
        // Assert
        expect(result).toBe(0);
        })
    it('Should add 3.0 + 0.1416 = 3.1416',() => {
        // Arrange
        let result = 0;
        // Act
        result = compute(-1000);
        // Assert
        expect(result).toBe(0);
        })
    it('should add 2.0 + 0.7 = 2.7', () => {
        // Arrange
        let result = 0;
        // Act
        result = compute(-1000);
        // Assert
        expect(result).toBe(0);
    })
    it('should increment if input is positive', () => {
    // Arrange
        let result = 0;
    // Act
        result = compute(1000);
    // Assert
        expect(result).toBe(1001);
    })

}) 