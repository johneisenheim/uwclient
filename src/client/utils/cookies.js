const isAuthenticated = () => {
    if(document.cookie){
        let splitted = document.cookie.split('=');
        if(splitted[0] === 'server-session-cookie-id'){
            return true;
        }
        return false;
    }
    return false;
};

const getAuthCookie = () => {
    if(document.cookie){
        let splitted = document.cookie.split('=');
        if(splitted[0] === 'server-session-cookie-id'){
            return splitted[1];
        }
        return null;
    }
    return null;
};

const setAuthCookie = (token) => {
    document.cookie = `server-session-cookie-id=${token};`;
};

const resetCookie = () => {
    document.cookie = "server-session-cookie-id=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};

const getAuthBearer = () => {
    return 'Bearer ' + getAuthCookie();
};

export { isAuthenticated, getAuthCookie, resetCookie, setAuthCookie, getAuthBearer }