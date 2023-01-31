export const trimStringToLength = (string: string, length: number = 45) =>
  string.length > length ? string.substring(0, length - 3) + '...' : string;
