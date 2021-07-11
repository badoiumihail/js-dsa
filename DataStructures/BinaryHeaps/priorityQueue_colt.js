class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
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
            // restructure the heap array to respect the heap properties
            this.sinkDown();
        }
        // console.log(this.values);
        // return the old root node
        return oldRoot;
    }
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

let pQueue = new PriorityQueue();
