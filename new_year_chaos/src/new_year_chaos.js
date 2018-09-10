/**
 * Return minimum number of movies to get queue into current configuration.
 * Return 'Too chaotic' if no illegal configuration.
 * @param {array} q Array of integers representing initial position (start from 1)
 */
function minimumBribes(q) {
    let bribes = 0;
    // quit before the last position
    for (let i = 0; i < q.length - 1; i++) {
        const current = q[i];
        const position = i + 1;
        const right = q[i + 1];
        if (current > position + 2) {return 'Too chaotic';}

        // Calculate number of bribes
        if (current > position) {
            bribes += (current - position);
        } else if (current > right) {
            bribes++;
        }
    }
    return bribes;
}

module.exports = minimumBribes;