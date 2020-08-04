import { AsYouType } from 'libphonenumber-js';

const singletonPhoneNumber = new AsYouType('US');

export function isValid(number) {
  singletonPhoneNumber.reset();
  singletonPhoneNumber.input(number);
  return singletonPhoneNumber.isValid();
}

export function getFormatted(number) {
  singletonPhoneNumber.reset();
  return singletonPhoneNumber.input(number);
}
