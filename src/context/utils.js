const getData = (dataName) => {
    const data = JSON.parse(localStorage.getItem(dataName));
    return data;
};

const setData = (dataName, dataFile) => {
    localStorage.setItem(dataName, JSON.stringify(dataFile));
};

export {
    getData,
    setData
}