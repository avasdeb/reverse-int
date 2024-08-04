module.exports = function reverse(n) {
    let a = '';
    let b = Math.abs(n).toString();
    for (c = b.length - 1; c >= 0; c--) {
        a += b[c]
    };
    return a;
}
