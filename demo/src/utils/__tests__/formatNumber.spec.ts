import { fPercent } from '~utils/formatNumber';

describe('fPercent', () => {
  it('should format the number as a percentage', () => {
    expect(fPercent(0.5)).toBe('0.5%');
    expect(fPercent(1)).toBe('1%');
    expect(fPercent(0)).toBe('0%');
    expect(fPercent('0.75')).toBe('0.8%');
    expect(fPercent('')).toBe('0%');
  });
});
