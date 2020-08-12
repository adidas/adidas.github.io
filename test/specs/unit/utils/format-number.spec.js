const { formatNumber } = require('../../../../src/utils/format-number');

describe('formatNumber()', () => {
  it('should keep a number as-is below 3 characters', () => {
    expect(formatNumber(0)).toEqual('0');
    expect(formatNumber(23)).toEqual('23');
    expect(formatNumber(123)).toEqual('123');
  });

  it('should add a separator after 1st digit for numbers whose length modulo 3 is 1', () => {
    expect(formatNumber(4552)).toMatch(/^4\,/);
    expect(formatNumber(5436542)).toMatch(/^5\,/);
    expect(formatNumber(4536543843049314)).toMatch(/^4\,/);
  });

  it('should add a separator after 2nd digit for numbers whose length modulo 3 is 2', () => {
    expect(formatNumber(45512)).toMatch(/^45\,/);
    expect(formatNumber(54316542)).toMatch(/^54\,/);
    expect(formatNumber(14536543843049314)).toMatch(/^14\,/);
  });

  it('should add a separator after 3rd digit for numbers whose length modulo 3 is 0 and are longer than 3 characters', () => {
    expect(formatNumber(245512)).toMatch(/^245\,/);
    expect(formatNumber(354316542)).toMatch(/^354\,/);
    expect(formatNumber(714536543843049314)).toMatch(/^714\,/);
  });

  it('should keep decimals as-is', () => {
    expect(formatNumber(245512.1231)).toMatch(/.1231$/);
    expect(formatNumber(354316542.2)).toMatch(/.2$/);
    expect(formatNumber(43049314.54363213)).toMatch(/.54363213$/);
  });
});
