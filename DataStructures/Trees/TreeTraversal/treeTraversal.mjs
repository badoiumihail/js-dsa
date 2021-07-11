import { Node as QueueNode, Queue } from "../../StacksAndQueues/queues.mjs";
import { Node as TreeNode, BinarySearchTree } from "../BinarySearchTrees/bst.mjs";

// visit the sibling nodes first, then the child nodes
function breadthFirstSearch(tree) {
    // using a queue to manage the order in which the nodes are visited (FIFO)
    const queue = new Queue();
    let traversedNodes = [],
        currentNode;

    // starting with the root node
    queue.enqueue(tree.root);

    while (queue.size) {

        // dequeue a node
        currentNode = queue.dequeue();
        // push its value to the list
        traversedNodes.push(currentNode.val);

        // check if it has child nodes, if so, add them to the queue
        if (currentNode.left) queue.enqueue(currentNode.left);
        if (currentNode.right) queue.enqueue(currentNode.right);
    }

    return traversedNodes;
}

// for any given node, visit the left side first
// (that includes children of children)
// then visit the right side
function depthFirstSearchPreOrder(tree) {
    // store order of traversal
    let traversedNodes = [],
        // the starting point
        startingNode = tree.root;

    // recursive logic
    function traverse(node) {
        // push the current node's value to the array
        traversedNodes.push(node.val);

        // check for child nodes
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(startingNode);

    // returns the order of traversal
    return traversedNodes;
}

// Post Order -> we start ordering from the leaves (left->right)
function depthFirstSearchPostOrder(tree) {
    // store order of traversal
    let traversedNodes = [],
        // the starting point
        startingNode = tree.root;

    // recursive logic
    function traverse(node) {
        // traverse child nodes before adding the values
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);

        // push the current node's value to the array
        traversedNodes.push(node.val);
    }

    traverse(startingNode);

    // returns the order of traversal
    return traversedNodes;
}

// In Order -> we start from the leaves but after finishing the left side of a node,
// we "visit" the node itself too;
function depthFirstSearchInOrder(tree) {
    // store order of traversal
    let traversedNodes = [],
        // the starting point
        startingNode = tree.root;

    // recursive logic
    function traverse(node) {
        // traverse left child nodes
        node.left && traverse(node.left);

        // push the current node's value to the array
        traversedNodes.push(node.val);

        // traverse right child nodes
        node.right && traverse(node.right);
        // same as: if (node.right) {traverse(node.right)}

    }

    traverse(startingNode);

    // returns the order of traversal
    return traversedNodes;
}

const tree = new BinarySearchTree();

