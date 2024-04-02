import { fPercent } from '~utils/formatNumber';

describe('fPercent', () => {
  it('should format the number as a percentage', () => {
    expect(fPercent(0.5)).toBe('50.0%');
    expect(fPercent(1)).toBe('100.0%');
    expect(fPercent(0)).toBe('0.0%');
    expect(fPercent('0.75')).toBe('75.0%');
    expect(fPercent('')).toBe('.0%');
  });
});
