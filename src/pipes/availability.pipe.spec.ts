import { AvailabilityPipe } from './availability.pipe';

describe('AvailabilityPipe', () => {
  let sut: AvailabilityPipe;

  beforeEach(() => {
    sut = new AvailabilityPipe();
  })

  it('create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should be available', () => {
    // Arrange
    const myPipeInput = 'some input'
    
    // Act
    const actual = sut.transform(myPipeInput);

    // Assert
    expect(actual).toBe(myPipeInput);
  });

  it('should not be available', () => {
    // Arrange
    const myPipeInput = undefined
    
    // Act
    const actual = sut.transform(myPipeInput);

    // Assert
    expect(actual).toBe('Unavailable');
  });
});
