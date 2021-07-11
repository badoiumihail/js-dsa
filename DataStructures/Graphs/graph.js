class Graph {
    constructor() {
        // the adjacency list used to store the vertices and the relations (edges) between them
        this.adjacencyList = {};
    }

    // adds a vertex in the graph without any edges
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        // if the vertex is already part of the adjacency list
        else throw `Vertex (${vertex}) is already in the graph.`;
        // return the current number of nodes
        return Object.keys(this.adjacencyList).length;
    }

    // adds an undirected edge between the two input vertices
    addEdge(vertexOne, vertexTwo) {
        // if any input vertex is invalid raise an error
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo]) throw `Invalid vertex.`;

        // if the edge is already in the adjacency list
        if (this.adjacencyList[vertexOne].includes(vertexTwo))
            throw `Edge between [${vertexOne}] and [${vertexTwo}] already exists.`

        // check if the vertices are actually the same vertex
        // in that case only add once to its edge list
        if (vertexOne === vertexTwo) this.adjacencyList[vertexOne].push(vertexTwo);
        else {
            // undirected graph, need to add the connection at both ends
            this.adjacencyList[vertexOne].push(vertexTwo);
            this.adjacencyList[vertexTwo].push(vertexOne);
        }
    }

    // removes the edge between the two input vertices
    removeEdge(vertexOne, vertexTwo) {
        // if any input vertex is invalid raise an error
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo]) throw `Invalid vertex.`;

        // store the index of each end of the edge
        const vertexOneIndex = this.adjacencyList[vertexTwo].indexOf(vertexOne),
            vertexTwoIndex = this.adjacencyList[vertexOne].indexOf(vertexTwo);

        // if both are valid indices
        if (vertexOneIndex > -1 && vertexTwoIndex > -1) {
            // check if the vertices are actually the same vertex, in which case only remove once from its edge list
            if (vertexOne === vertexTwo) this.adjacencyList[vertexTwo].splice(vertexOneIndex, 1);
            else {
                // remove both from each respective list
                this.adjacencyList[vertexTwo].splice(vertexOneIndex, 1);
                this.adjacencyList[vertexOne].splice(vertexTwoIndex, 1);
            }
        }
    }

    // removes the edge between the two input vertices (Colt's variation)
    removeConnection(vertexOne, vertexTwo) {
        // if any input vertex is invalid raise an error
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo]) throw `Invalid vertex.`;

        if (this.adjacencyList[vertexOne].includes(vertexTwo)){
            // filter array method using a callback function that tests all the elements in the array
            this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(v => v !== vertexTwo);
            this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(v => v !== vertexOne);
        }
    }

    // removes a vertex and its edges from the adjacency list
    removeVertex(vertex) {
        // check if the input is a valid vertex
        if (!this.adjacencyList[vertex]) throw `Invalid vertex.`;

        // as long as there are edges of the input vertex
        while (this.adjacencyList[vertex].length) {
            // better readability
            let edges = this.adjacencyList[vertex];
            // remove each edge
            this.removeEdge(vertex, edges[0]);
            // console.log(this.adjacencyList);
        }

        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex('Bucharest');
graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Houston');
graph.addVertex('Paris');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Tokyo');
graph.addEdge('Tokyo', 'Paris');
graph.addEdge('Tokyo', 'Houston');
graph.addEdge('Tokyo', 'Bucharest');
console.log(graph);
// graph.addEdge('Tokyo', 'Moscow');
// graph.removeConnection('Tokyo', 'Dallas');
// graph.removeEdge('Tokyo', 'Tokyo');
graph.removeVertex('Tokyo');
console.log(graph);