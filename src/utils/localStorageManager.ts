// getJSONByKey

// setJSONByKey

export const setJSONByKey = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getJSONByKey = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};
