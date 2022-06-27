export const getData = (dbName) => JSON.parse(localStorage.getItem(dbName));
export const setData = (dbName, payload) => localStorage.setItem(dbName, JSON.stringify(payload));
export const setImage = ({ file, setState }) => {
    const fReader = new FileReader();
    fReader.onload = () => {
        setState(fReader.result);
    };
    fReader.readAsDataURL(file);
};