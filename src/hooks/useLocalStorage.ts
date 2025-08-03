import { useState, useCallback } from "react";

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setStoredValue = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  const removeValue = useCallback(() => {
    try {
      setValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return { value, setValue: setStoredValue, removeValue };
}
