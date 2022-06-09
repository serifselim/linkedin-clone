export const getData = (dbName) => JSON.parse(localStorage.getItem(dbName));
export const setData = (dbName, payload) => localStorage.setItem(dbName, JSON.stringify(payload));