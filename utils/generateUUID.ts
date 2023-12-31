import { type UUID } from "types";

export const generateUUID = (): UUID => {
  // Generate a random array of 16 bytes (128 bits)
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  // Set version (4) and variant (10) bits
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

  // Convert bytes to hexadecimal string representation
  let uuid: UUID = "- - - -";
  for (let i = 0; i < 16; i++) {
    uuid += randomBytes[i].toString(16).padStart(2, "0");
    if ([3, 5, 7, 9].includes(i)) {
      uuid += "-";
    }
  }
  return uuid;
};
// example -> ab2e99a6-5205-4120-a888-af84edca1ab2
// error -> 123 because it is not a valid UUID shape
