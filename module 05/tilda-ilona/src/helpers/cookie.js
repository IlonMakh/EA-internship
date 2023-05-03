export const setCookie = (cookieName, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();

        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (cookieName) => {
    const cookieString = `; ${document.cookie}`;
    const parts = cookieString.split(`; ${cookieName}=`);

    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

export const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const isCookieExpired = (cookieName) => {
    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${cookieName}=`))
        ?.split("=")[1];
        
    if (cookieValue) {
        const expirationTime = parseInt(cookieValue);
        const now = new Date().getTime();

        return now > expirationTime;
    }
    return true;
};
