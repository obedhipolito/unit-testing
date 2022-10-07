

import { circle  } from './circle';

describe('getArea', () => {
  it('should return the  Area', () => {
    const result = circle(0);
    expect(result).toBe(0)
  });
});

describe('getArea', () => {
  it('should return the  Area', () => {
    const result = circle(-2);
    expect(result).toBe(0)
  });
});

describe('getArea', () => {
  it('should return the  Area', () => {
    const result = circle(1);
    expect(result).toBe(3.1416)
  });
});

describe('getArea', () => {
  it('should return the  Area', () => {
    const result = circle(2);
    expect(result).toBe(12.5664)
  });
});

describe('getArea', () => {
  it('should return the  Area', () => {
    const result = circle(3);
    expect(result).toBe(28.2744)
  });
});