export const getData = (dbName) => JSON.parse(localStorage.getItem(dbName));
export const setData = (dbName, payload) => JSON.stringify(localStorage.setItem(dbName, payload));