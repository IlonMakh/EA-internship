import CryptoJS from "crypto-js";

const cryptoKey = "secret key 135";

export const encryptString = (str) => {
    return CryptoJS.AES.encrypt(str, cryptoKey).toString();
};

export const decryptString = (str) => {
    return CryptoJS.AES.decrypt(str, cryptoKey).toString(CryptoJS.enc.Utf8);
};

export const setToken = (name, surname, birthdate) => {
    const data = {
        name,
        surname,
        birthdate,
        id: Date.now(),
    }
    const string = JSON.stringify(data);
    const cipherString = encryptString(string);
    
    return cipherString;
};
