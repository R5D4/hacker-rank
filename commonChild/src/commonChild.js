function commonChild (s1, s2) {
    let len;
    if (s1.length === 0 || s2.length === 0) {
        len = 0;
    } else if (s1[s1.length - 1] === s2[s2.length -1]) {
        len = commonChild(s1.substring(0, s1.length - 1), s2.substring(0, s2.length - 1)) + 1;
    } else {
        len = Math.max(commonChild(s1, s2.substring(0, s2.length - 1)), commonChild(s1.substring(0, s1.length - 1), s2));
    }
    return len;
}

exports.commonChild = commonChild;