// x: Cat A
// y: Cat B
// z: Mouse C
function catAndMouse(x, y, z) {
    const dXZ = Math.abs(x - z);
    const dYZ = Math.abs(y - z);
    if (dXZ === dYZ) return 'Mouse C';
    else if (dXZ < dYZ) return 'Cat A';
    else return 'Cat B';
}

exports.catAndMouse = catAndMouse;