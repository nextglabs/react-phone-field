import { formatNumber } from './format-number';
import { countries } from '../data/countries';

const prefix = '+';

describe('formatNumber', () => {
  it('returns prefix if value is falsy', () => {
    const { dialCode, mask } = countries.us;
    // @ts-ignore
    const result = formatNumber(null, dialCode, mask);
    expect(result).toEqual(prefix);
  });
  it('returns value if dialCode is falsy', () => {
    // @ts-ignore
    const result = formatNumber('123456789');
    expect(result).toEqual('123456789');
  });
  it('returns prefix & unformatted value if no mask provided', () => {
    const value = '1234567890';
    const { dialCode } = countries.us;
    const result = formatNumber(value, dialCode, null);
    expect(result).toEqual(`${prefix}${value}`);
  });
  it('correctly formats US phone number', () => {
    const value = '1234567890';
    const { dialCode, mask } = countries.us;
    const result = formatNumber(value, dialCode, mask);
    expect(result).toEqual(`${prefix}${dialCode} (123) 456-7890`);
  });
  it('correctly formats custom masks', () => {
    const value = '1234567890';
    const { dialCode } = countries.tn;
    const customMask = '..-..(..).. ..';
    const result = formatNumber(value, dialCode, customMask);
    expect(result).toEqual(`${prefix}${dialCode} 12-34(56)78 90`);
  });
  it('allows custom prefix', () => {
    const customPrefix = '00';
    const value = '1234567890';
    const { dialCode, mask } = countries.us;
    const result = formatNumber(value, dialCode, mask, {
      prefix: customPrefix,
    });
    expect(result).toEqual(`${customPrefix}${dialCode} (123) 456-7890`);
  });
  it('allows numbers longer than mask to be displayed', () => {
    const value = '123456789012345';
    const { dialCode, mask } = countries.us;
    const result = formatNumber(value, dialCode, mask, {
      enableLongNumbers: true,
    });
    expect(result).toEqual(`${prefix}${dialCode} (123) 456-789012345`);
  });
});
