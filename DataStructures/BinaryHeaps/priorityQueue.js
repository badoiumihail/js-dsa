class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    // a max binary heap that uses an array to store the node values
    constructor() {
        this.values = [];
    }
    // adds a value in the spot that respects the max heap property
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        // add the value at the end of the array
        this.values.push(newNode);

        // initialize last pushed element index and its parent's index
        let index = this.values.length - 1,
            parentIndex = 0;

        // as long as the parent has greater priority value than the element and the parent index is positive
        while (this.values[parentIndex].priority > this.values[index].priority && parentIndex >= 0) {
            // swap the parent with the element
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];

            // reassign indices for the next iteration
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
            console.log(this.values[parentIndex], parentIndex);
        }

        // return the array that stores the heap
        // each element represents a node in the heap, starting with the root at index 0
        // each element has the child nodes at (2*n) + 1 and (2*n) + 2, where n is its index
        // each element has the parent at the floor division between its index - 1 and 2
        return this.values;
    }
    // removes the highest priority node (the root), places the last element instead
    // and then restructures the array in order to respect the max heap property
    dequeue() {
        // check if heap is empty
        if (!this.values.length) return undefined;

        // swap the root with the last element in the heap
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];

        // extract the old root
        const oldRoot = this.values.pop();

        if (!this.values.length) return oldRoot;

        // initialize indices
        let parent = 0,
            left = 1,
            right = 2;

        let minChildVal;
        // initialize minimum value between child nodes
        if (this.values[left] && this.values[right])
            minChildVal = Math.min(this.values[left].priority, this.values[right].priority);
        else if (this.values[left] && !this.values[right])
            minChildVal = this.values[left].priority

        // while the parent node value is greater than any child node value
        while (this.values[parent].priority > minChildVal) {
            // determine which child is more desirable for swapping
            let child = this.values[left].priority === minChildVal ? left : right;
            // swap the parent with the child
            [this.values[parent], this.values[child]] = [this.values[child], this.values[parent]];

            // reassign values for indices
            parent = child;
            left = 2 * parent + 1;
            right = 2 * parent + 2;

            // recompute min between child nodes for next iteration
            if (this.values[left] && this.values[right])
                minChildVal = Math.min(this.values[left].priority, this.values[right].priority);
            else if (this.values[left] && !this.values[right])
                minChildVal = this.values[left].priority
            else break;
        }
        console.log(this.values);
        // return value of root node
        return oldRoot;
    }
}

const pQueue = new PriorityQueue();
pQueue.enqueue('heavy rain', 3);
pQueue.enqueue('cataclysm', 0);
pQueue.enqueue('hurricane', 1);
pQueue.enqueue('wildfire', 2);
pQueue.enqueue('low temperature', 4);
pQueue.enqueue('mild heat', 5);
pQueue.enqueue('extreme heat', 3);
pQueue.enqueue('apocalypse', 0);
pQueue.enqueue('violent riot', 2);
pQueue.enqueue('mild rain', 5);
pQueue.enqueue('something with priority 1', 1);
console.log(pQueue);
console.log('###############################################');
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());