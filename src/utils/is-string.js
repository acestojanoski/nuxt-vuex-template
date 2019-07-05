export const isString = (value) => {
    if (Object.prototype.toString.call(value) === '[object String]') {
        return true;
    }
    return false;
};
