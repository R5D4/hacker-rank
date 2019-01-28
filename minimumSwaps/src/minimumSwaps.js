function minimumSwaps (arr) {
    // create graph from array
    const graph = {};
    arr.forEach((v, i) => {
        graph[v - 1] = i;
    });

    // find connected components
    const components = [];
    while (Object.entries(graph).length !== 0) {
        let node = Object.keys(graph)[0];
        const component = [node];
        components.push(component);
        let next = graph[node];
        delete graph[node];
        node = next;
        
        while (graph[node] !== undefined) {
            component.push(node);
            next = graph[node];
            delete graph[node];
            node = next;
        }
    }

    // calculate number of swaps based on connected components
    const swaps = components.reduce((acc, component) => {
        return acc + component.length - 1;
    }, 0);
    
    return swaps;
}

exports.minimumSwaps = minimumSwaps;