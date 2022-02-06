const debounce = (fn, delay) => {
    let timeoutID;
    // eslint-disable-next-line
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export default debounce;
