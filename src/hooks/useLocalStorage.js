"use client";

export const addItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const getItem = (key) => {
  const item = window.localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};
export const removeItem = (key) => {
  window.localStorage.removeItem(key);
  return true;
};
export const clearStorage = () => {
  window.localStorage.clear();
  return true;
};
