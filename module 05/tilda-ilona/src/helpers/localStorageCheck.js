export function getLocalStorageArray(key) {
    const value = localStorage.getItem(key);

    if (value) {
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }
    return Array.isArray(value) ? value : [];
}

export function getLocalStorageValue(key) {
    const value = localStorage.getItem(key);

    if (typeof value === "string") {
        if (!isNaN(value)) {
            return Number(value);
        }
        return value;
    }
    return "";
}
