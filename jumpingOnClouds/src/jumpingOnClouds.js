function jumpingOnClouds(c) {
    let moves = 0;
    for (let i = 0; i < c.length - 1;) {
        if (!c[i + 2]) i += 2;
        else i += 1;
        moves++;
    }
    return moves;
}

exports.jumpingOnClouds = jumpingOnClouds;