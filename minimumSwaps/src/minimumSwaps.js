function minimumSwaps (arr) {
    // create graph from array
    const graph = {};
    arr.forEach((v, i) => {
        graph[v - 1] = i;
    });

    // find connected components
    const components = [];
    while (Object.entries(graph).length !== 0) {
        console.log(graph)
        let node = Object.keys(graph)[0];
        const component = [node];
        const next = graph[node];
        delete graph[node];
        components.push(component);
        console.log(`node: ${node}, graph[node]: ${graph[node]}`);

        node = next;
        while (graph[node]) {
            console.log(`node: ${node}, graph[node]: ${graph[node]}`);
            node = graph[node];
            component.push(node);
            delete graph[node];
            node = graph[node];
        }
    }
    console.log(components);

    let swaps = 0;
    
    return swaps;
}

exports.minimumSwaps = minimumSwaps;