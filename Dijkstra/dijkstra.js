class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// simple and naive implementation of a priority queue using an array
class NaivePriorityQueue {
    constructor() {
        this.values = [];
    }

    // adds an element to the end of a queue
    enqueue(val, priority) {
        this.values.push({val, priority});
        // sort the array based on priority
        this.sort();
    }

    dequeue() {
        // removes an element from the start
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    // adds an element to the queue
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    // determines where the last pushed element should be in the priority queue
    bubbleUp() {
        // get the index of the last pushed element
        let idx = this.values.length - 1;
        const element = this.values[idx];


        while (idx > 0) {
            // determine its parent
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            // if the priority value of the element is greater than the parent's
            // break the loop since we're using a min binary heap
            if (element.priority >= parent.priority) break;

            // else switch the parent node with the child node in the array
            this.values[parentIdx] = element;
            this.values[idx] = parent;

            // reassign the element index for the next iteration
            idx = parentIdx;
        }
    }
    // removes the root element of the queue (highest priority element)
    dequeue() {
        const oldRoot = this.values[0];
        const endNode = this.values.pop();

        // check if the array used as the queue has elements in it
        if (this.values.length > 0) {
            // swap the root element with the last node in the array
            this.values[0] = endNode;
            this.sinkDown();
        }
        // return the old root node
        return oldRoot;
    }

    // restructure the heap array to respect the heap properties
    sinkDown() {
        // initialize current element index
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];


        while (true) {
            // compute child nodes indices
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            // declare child nodes variables
            let leftChild, rightChild;

            // swap state variable
            let swap = null;

            // if left child node index is in range
            if (leftChildIdx < length) {
                // store the node into the previously declared variable
                leftChild = this.values[leftChildIdx];

                // if the left child priority is less in value (that means higher priority)
                if (leftChild.priority < element.priority) {
                    // remember to swap with the left child
                    swap = leftChildIdx;
                }
            }
            // if right child node index is in range
            if (rightChildIdx < length) {
                // store the node into the previously declared variable
                rightChild = this.values[rightChildIdx];
                // if the right child priority is less in value when the left child's
                // priority was greater OR if the right child's priority is less than
                // the left child's priority when both of them are smaller than the parent's
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    // remember to swap with the right child
                    swap = rightChildIdx;
                }
            }
            // if there are no swaps available, break the loop
            // that means we found the spot for the element
            if (swap === null) break;

            // in case there is a swap available, swap the element with the child
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            // reassign the element's index for the next iteration
            idx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
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
    addEdge(vertexOne, vertexTwo, weight = 0) {
        // if any argument is invalid throw an error
        if (!this.adjacencyList[vertexOne] || !this.adjacencyList[vertexTwo] || typeof weight !== 'number')
            throw `Invalid arguments.`;

        // if the edge is already in the adjacency list
        this.adjacencyList[vertexOne].forEach(edge => {
            if (edge['node'] === vertexTwo)
                throw `Edge between [${vertexOne}] and [${vertexTwo}] already exists.`
        });

        // check if the vertices are actually the same vertex
        // in that case only add once to its edge list
        if (vertexOne === vertexTwo) this.adjacencyList[vertexOne].push({
            'node': vertexTwo,
            'weight': 0
        });
        else {
            // undirected graph, need to add the connection at both ends
            this.adjacencyList[vertexOne].push({
                'node': vertexTwo,
                'weight': weight
            });
            this.adjacencyList[vertexTwo].push({
                // it works with this syntax as well
                'node': vertexOne, weight
            });
        }
    }

    dijkstra(start, end) {
        const distances = {},
              previous = {},
              nodes = new PriorityQueue();
        let smallest,
            path = [];

        // iterate through all of the vertices in the graph
        Object.keys(this.adjacencyList).forEach(vertex => {
            // initialize them with null in the previous object
            // which basically keeps track of the shortest distances
            // from the start vertex to every other vertex in the graph
            previous[vertex] = null;

            // for the start vertex
            if (vertex === start) {
                // initialize the distance object with 0
                // since it's the starting point
                distances[vertex] = 0;

                // add it to the queue with the highest priority
                nodes.enqueue(vertex, 0)
            } else {
                // for every other vertex initialize them with infinity
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
        });

        // as long as there are nodes remaining in the queue
        while (nodes.values.length) {
            // remove the element with the highest priority and store it
            smallest = nodes.dequeue().val;

            // if it happens to be the end vertex
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            // if smallest is a valid vertex and its distance from the start vertex is not infinite
            if (smallest || distances[smallest] !== Infinity) {
                // iterate through its neighbors
                this.adjacencyList[smallest].forEach(neighbor => {
                    // compute the distance from the start vertex to the current neighbor
                    let distance = distances[smallest] + neighbor.weight;
                    // if the just computed distance is less than the previous smallest distance
                    if (distance < distances[neighbor.node]) {
                        // replace the old distance with the new one since it's smaller
                        distances[neighbor.node] = distance;
                        // update from which node we got to this neighbor the quickest
                        previous[neighbor.node] = smallest;
                        // update its priority in the queue as well
                        nodes.enqueue(neighbor.node, distance);
                    }
                });
            }
        }
        return path.concat(smallest).reverse();
    }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
// console.log(graph.adjacencyList);
console.log(graph.adjacencyList);
console.log(graph.dijkstra('A','E'));