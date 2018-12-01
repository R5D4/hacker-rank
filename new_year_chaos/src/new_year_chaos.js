/**
 * Return minimum number of movies to get queue into current configuration.
 * Return 'Too chaotic' if no illegal configuration.
 * @param {array} q Array of integers representing initial position (start from 1)
 */
function minimumBribes(q) {
    let bribes = 0;
    // quit before the last position
    for (let i = q.length - 1; i > 0; i--) {
        const currentPos = i + 1;

        if (q[i] === currentPos) {
            // do nothing
        } else if (q[i-1] === currentPos) {
            q[i-1] = q[i];
            q[i] = currentPos;
            bribes += 1;
        } else if (q[i-2] === currentPos) {
            q[i-2] = q[i-1];
            q[i-1] = q[i];
            q[i] = currentPos;
            bribes += 2;
        } else {
            return 'Too chaotic';
        }
    }
    return bribes;
}

module.exports = minimumBribes;