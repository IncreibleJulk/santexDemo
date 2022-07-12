import { useState } from 'react';

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      // parse stored json or return initialValue
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      // for any error return default
      console.log(error);
      return defaultValue;
    }
  });

  // persists the new value to localStorage.
  const setValue = (value: unknown) => {
    try {
      // to keep the same interface useState, evaluate if it is a function
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
