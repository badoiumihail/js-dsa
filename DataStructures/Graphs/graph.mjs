import { Node as StackNode, Stack } from "../StacksAndQueues/stacks.mjs";
import { Node as QueueNode, Queue } from "../StacksAndQueues/queues.mjs";

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

        if (this.adjacencyList[vertexOne].includes(vertexTwo)) {
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

    // depth first graph traversal - recursive variation
    depthFirstTraversalRecursive(start) {
        const results = [],
            // using an object to verify if the objects were visited instead of looping through
            // the results list since accessing an element in an object is constant time
            visited = {},
            // store the graph's adjacency list into a variable to be able to access it in the helper function
            adjacencyList = this.adjacencyList;

        // using a helper function since in the outer function we
        // initialize both the results list and the visited object
        (function DF(vertex) {
            // error handling in case the input vertex is not present in the graph
            if (!adjacencyList[vertex]) throw `Could not find [${vertex}] in the graph.`

            // push the current vertex into
            // the results and mark it visited
            results.push(vertex);
            visited[vertex] = true;

            // iterate through the current vertex's neighbors
            adjacencyList[vertex].forEach(neighbor => {
                // if the current neighbor wasn't visited
                // recursively call the function on it
                if (!visited[neighbor]) DF(neighbor);
            });
            // immediately call the function after declaration with start as an argument
        })(start);

        // return the results
        return results;
    }
    // depth first graph traversal - iterative variation using a stack
    depthFirstTraversalIterative(start) {
        // create a stack to manage the order of traversal
        const stack = new Stack(),
            // create an object to keep track of visited vertices
            visited = {},
            // array to store the resulting order of traversal
            results = [];
        // declare a variable that keeps track of the current vertex of each iteration of the main loop
        let currentVertex;

        // add the start vertex to the stack
        stack.push(start);
        // mark it as visited
        visited[start] = true;

        // as long as there are elements in the stack
        while (stack.size) {
            // pop a vertex and store it in a variable
            currentVertex = stack.pop();
            // add it to the result
            results.push(currentVertex);

            // iterate through its neighbors
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // if the current neighbor hasn't been visited
                if (!visited[neighbor]) {
                    // add it to the stack
                    stack.push(neighbor);
                    // mark it as visited
                    visited[neighbor] = true;
                }
            });
        }
        // return the traversal result
        return results;
    }

    // breadth first graph traversal - iterative using a queue
    breadthFirstTraversal(start) {
        // create a queue to manage order of traversal
        const queue = new Queue(),
            // object to keep track of visited vertices
            visited = {},
            // array to store the order of traversal
            results = [];
        // declare a variable that keeps track of the current vertex of each iteration of the main loop
        let currentVertex;

        // visit the start vertex
        visited[start] = true;
        // add it to the queue
        queue.enqueue(start)

        while (queue.size) {
            // store the current vertex
            currentVertex = queue.dequeue();
            // push it to the results
            results.push(currentVertex);

            // iterate through its neighbors in reverse order
            // (slice returns a phantom copy so that we don't reverse the actual list of edges in the adjacency list)
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {
                // if the current neighbor hasn't been visited
                if (!visited[neighbor]) {
                    // mark it as visited
                    visited[neighbor] = true;
                    // add it to the queue
                    queue.enqueue(neighbor);
                }
            });
        }

        // return the order of traversal
        return results;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
// these will yield different results but the result is still valid for a depth first traversal
console.log(graph.depthFirstTraversalRecursive('A'));
console.log(graph.depthFirstTraversalIterative('A'));
console.log(graph.breadthFirstTraversal('A'));
