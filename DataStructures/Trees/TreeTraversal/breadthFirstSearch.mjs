import { Node as QueueNode, Queue } from "../../StacksAndQueues/queues.mjs";
import { Node as TreeNode, BinarySearchTree } from "../BinarySearchTrees/bst.mjs";

function breadthFirstSearch(tree) {
    const queue = new Queue();
    let nodesTraversed = [],
        currentNode;

    queue.enqueue(tree.root);

    while (queue.size) {

        currentNode = queue.dequeue();
        nodesTraversed.push(currentNode.val);

        if (currentNode.right) queue.enqueue(currentNode.right);
        if (currentNode.left) queue.enqueue(currentNode.left);
    }

    return nodesTraversed;
}

const tree = new BinarySearchTree();
tree.insert(7);
tree.insert(5);
tree.insert(12);
tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(4);
tree.insert(9);
tree.insert(15);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(17);
console.log(tree);
console.log(breadthFirstSearch(tree));
