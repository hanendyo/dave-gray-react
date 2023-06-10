import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(
        "🚀 ~ file: useLocalStorage.jsx:13 ~ const[storedValue,setStoredValue]=useState ~ error:",
        error
      );
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: useLocalStorage.jsx:25 ~ setValue ~ error:",
        error
      );
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
