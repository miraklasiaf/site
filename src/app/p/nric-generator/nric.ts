import { Prefix, Checksum } from './types';

export default class NRIC {
  static #PREFIX_CITIZEN_1900 = 'S';
  static #PREFIX_CITIZEN_2000 = 'T';
  static #PREFIX_FOREIGNER_1900 = 'F';
  static #PREFIX_FOREIGNER_2000 = 'G';
  static #PREFIX_FOREIGNER_2022 = 'M';
  static #CUTOFF_DATE = '1968-01-01';
  static #CHECKSUM_WEIGHTS = [2, 7, 6, 5, 4, 3, 2];

  #nric: string;

  constructor(value: NRIC | string | undefined | null = null) {
    this.#nric = '';

    if (value instanceof NRIC) {
      this.#nric = NRIC.toString();
    } else if (typeof value === 'string') {
      this.#nric = value.trim().toUpperCase();
    }
  }

  get value() {
    return this.#nric;
  }
  get length() {
    return this.#nric.length;
  }
  get isValidFormat() {
    return /^[STFGM]\d{7}[A-Z]$/.test(this.#nric);
  }
  get isValid() {
    return this.#validateChecksum();
  }
  get prefix() {
    return this.isValidFormat ? this.#nric.slice(0, 1) : null;
  }
  get digits() {
    return this.isValidFormat ? this.#nric.slice(1, -1) : null;
  }
  get checksum() {
    return this.isValidFormat ? this.#nric.slice(-1) : null;
  }
  get last4Chars() {
    return this.isValidFormat ? this.#nric.slice(-4) : null;
  }
  #validateChecksum(): boolean {
    let { isValidFormat, prefix, checksum } = this;
    let digits = this.digits;

    return (
      isValidFormat &&
      checksum === NRIC.#getChecksum(prefix as Prefix, digits as string)
    );
  }

  static GenerateNric(date: Date | null = null): NRIC {
    return NRIC.#generate(date, false);
  }
  static GenerateFin(date: Date | null = null): NRIC {
    return NRIC.#generate(date, true);
  }
  static #generate(date: Date | null = null, isForeigner: boolean): NRIC {
    let d = date || this.getRandomDate();
    let prefix = this.#getPrefix(d, isForeigner) as Prefix;
    let digits = this.#getDigits(d, isForeigner);
    let checksum = this.#getChecksum(prefix, digits);
    return new NRIC(prefix + digits + checksum);
  }
  static #getPrefix(date: Date, isForeigner: boolean) {
    if (isForeigner) {
      if (date > new Date('2022-01-01')) {
        return this.#PREFIX_FOREIGNER_2022;
      }
      if (date < new Date('2000-01-01')) {
        return this.#PREFIX_FOREIGNER_1900;
      }
      return this.#PREFIX_FOREIGNER_2000;
    }

    return date < new Date('2000-01-01')
      ? this.#PREFIX_CITIZEN_1900
      : this.#PREFIX_CITIZEN_2000;
  }
  static #getDigits(date: Date, isForeigner: boolean): string {
    if (date < new Date(this.#CUTOFF_DATE)) {
      return String(
        Math.floor(Math.random() * 1000000) + (isForeigner ? 2000000 : 0)
      ).padStart(7, '0');
    }

    let digits =
      (date.getFullYear() % 100) * 100000 +
      Math.floor(Math.random() * 100) * 1000 +
      date.getMonth() * 31 +
      date.getDate();

    return digits.toString().padStart(7, '0');
  }
  static #getChecksum(prefix: Prefix, digitStr: string): Checksum {
    let digits = digitStr.split('').map(Number);
    let offset = this.#getOffset(prefix);

    let total = digits.reduce(
      (sum, digit, index) => sum + digit * this.#CHECKSUM_WEIGHTS[index],
      offset
    );

    let table = this.#getChecksumTable(prefix);
    let index = total % 11;
    if (prefix === this.#PREFIX_FOREIGNER_2022) {
      index = 10 - index;
    }

    return table[index];
  }
  static #getOffset(prefix: Prefix): number {
    let offset = 0;
    if (
      [this.#PREFIX_CITIZEN_2000, this.#PREFIX_FOREIGNER_2000].includes(prefix)
    )
      offset = 4;
    if (prefix === this.#PREFIX_FOREIGNER_2022) {
      offset = 3;
    }

    return offset;
  }
  static #getChecksumTable(prefix: Prefix): Checksum[] {
    let checksums = {
      ST: ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'],
      FG: ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'],
      M: ['K', 'L', 'J', 'N', 'P', 'Q', 'R', 'T', 'U', 'W', 'X']
    };

    let key = Object.keys(checksums).filter((v) => v.includes(prefix));
    if (!key || !key.length) {
      throw new Error(`Unable to find checksum table for "${prefix}"`);
    }

    let lookupKey = key[0] as keyof typeof checksums;

    return checksums[lookupKey] as Checksum[];
  }
  static getRandomDate(): Date {
    let minTimestamp = new Date('1900-01-01').getTime();
    let maxTimestamp = Date.now();

    let randomTimestamp =
      Math.floor(Math.random() * (maxTimestamp - minTimestamp + 1)) +
      minTimestamp;

    return new Date(randomTimestamp);
  }
}
