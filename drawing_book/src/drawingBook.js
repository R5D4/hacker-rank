function pageCount (n, p) {
    const sn = Math.floor(n/2);
    const sp = Math.floor(p/2);
    return Math.min(sp, sn - sp);
}

exports.pageCount = pageCount;