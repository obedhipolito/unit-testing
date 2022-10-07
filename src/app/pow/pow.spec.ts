import {getPow} from './pow';

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,3);
    expect(result).toBe(8)
  })
})

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,0);
    expect(result).toBe(1)
  })
})

describe('getPow', () => {
  it ('should return the pow function', () => {
    const result = getPow(2,-3);
    expect(result).toBe(0)
  })
})