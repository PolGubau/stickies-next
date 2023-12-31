// Function to get a value from localStorage
export function getLocalStorage(
  key: string,
  initialValue: string | number | object | null
): string | number | object | null {
  if (typeof window === "undefined") {
    return initialValue;
  }
  const value = localStorage.getItem(key);
  if (!value) {
    setToLocalStorage(key, initialValue);
    return initialValue;
  }
  return JSON.parse(value);
}

// Function to set a value in localStorage
export function setToLocalStorage(
  key: string,
  value: string | number | object | null
): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to remove a value from localStorage
export function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
