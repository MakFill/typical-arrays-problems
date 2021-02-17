exports.min = function min(array = 0) {
    if (array == 0) {
        return 0;
    } else {
        return Math.min(array);
    }
};

exports.max = function max(array = 0) {
    if (array == 0) {
        return 0;
    } else {
        return Math.max(array);
    }
};

exports.avg = function avg(array = 0) {
    if (array == 0) {
        return 0;
    } else {
        return array.reduce((a, b) => a + b) / array.length;
    }
};
