function repeatedString(s, n) {
    const count1 = (s.match(/a/g) || []).length; // occurrence of 'a' in s
    const multiples = Math.floor(n / s.length); // number of repeats of s in n
    const count2 = (s.substring(0, n % s.length).match(/a/g) || []).length; // occurrence of 'a' in remainder of s
    const totalCount = count1 * multiples + count2;
    return totalCount;
}

exports.repeatedString = repeatedString;