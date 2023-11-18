"use client";
const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };
  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  };
  const clearLocalStorage = () => {
    try {
      window.localStorage.clear(key);
    } catch (err) {
      console.error(err);
    }
  };
  return {
    setItem,
    getItem,
    removeItem,
    clearLocalStorage,
  };
};

export default useLocalStorage;
