class MaxBinaryHeap {
    // a max binary heap that uses an array to store the node values
    constructor() {
        this.values = [];
    }
    // adds a value in the spot that respects the max heap property
    insert(val) {
        // add the value at the end of the array
        this.values.push(val);

        // initialize last pushed element index and its parent's index
        let index = this.values.length - 1,
            parentIndex = Math.floor((index - 1) / 2);

        // as long as the parent is less than the element and the parent index is positive
        while (this.values[parentIndex] < this.values[index] && parentIndex >= 0) {
            // swap the parent with the element
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];

            // reassign indices for the next iteration
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }

        // return the array that stores the heap
        // each element represents a node in the heap, starting with the root at index 0
        // each element has the child nodes at (2*n) + 1 and (2*n) + 2, where n is its index
        // each element has the parent at the floor division between its index - 1 and 2
        return this.values;
    }
    // removes the highest priority node (the root), places the last element instead
    // and then restructures the array in order to respect the max heap property
    extractMax() {
        console.log(`starting heap:\t ${this.values}`);
        // swap the root with the last element in the heap
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        console.log(`after swap:\t ${this.values}`);
        // extract the old root
        const max = this.values.pop();
        console.log(`after pop:\t ${this.values}`);

        // initialize indices
        let parent = 0,
            left = 2 * parent + 1,
            right = 2 * parent + 2;

        // while right and left nodes' indices are in range
        while (right < this.values.length || left < this.values.length) {
            // reassign for current iteration
            left = 2 * parent + 1;
            right = 2 * parent + 2;

            // if any child node has a greater value than the parent
            if (this.values[parent] < this.values[left] || this.values[parent] < this.values[right]) {
                // swap priority, greater values have priority
                if (this.values[left] >= this.values[right]) {
                    // swap left node with parent node
                    [this.values[parent], this.values[left]] = [this.values[left], this.values[parent]];
                    // reassign parent node index
                    parent = left;
                } else {
                    // swap right node with parent node
                    [this.values[parent], this.values[right]] = [this.values[right], this.values[parent]];
                    // reassign parent node index
                    parent = right;
                }
            // break loop in case no child node value is greater than the parent node value
            } else break;
            console.log(`iteration:\t ${this.values}`);
        }
        console.log(`result heap:\t ${this.values}`);
        // return value of root node
        return max;
    }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(41));
// console.log(heap.insert(39));
// console.log(heap.insert(33));
// console.log(heap.insert(18));
// console.log(heap.insert(27));
// console.log(heap.insert(12));
// console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.extractMax());