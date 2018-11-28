/**
 * Return minimum number of movies to get queue into current configuration.
 * Return 'Too chaotic' if no illegal configuration.
 * @param {array} q Array of integers representing initial position (start from 1)
 */
function minimumBribes(q) {
    let bribes = 0;
    // quit before the last position
    for (let i = 0; i < q.length - 1; i++) {
        const initPos = q[i];
        const currentPos = i + 1;

        // no one can move up more than two positions, invalid configuration
        if (initPos > currentPos + 2) {return 'Too chaotic';}

        // Calculate number of bribes
        for (let j = i + 1; j < q.length; j++) {
            if (initPos > q[j]) {bribes++;}
        }
    }
    return bribes;
}

module.exports = minimumBribes;