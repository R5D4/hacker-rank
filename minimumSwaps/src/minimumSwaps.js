function minimumSwaps (arr) {
    let swaps = 0;

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

        // found all nodes in a connected component
        // calculate # of swaps needed to sort this component
        swaps += component.length - 1;
    }
    
    return swaps;
}

exports.minimumSwaps = minimumSwaps;