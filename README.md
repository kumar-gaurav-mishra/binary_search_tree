# Binary Search Tree

JavaScript implementation of Binary Search Tree.

### Installation & Usage :

```Installation

npm install binary_search_tree_ds

```

```Javascript
const BinarySearchTree = require('binary_search_tree_ds');

let bst = new BinarySearchTree();

bst.insert(1); // Insert an element to bst tree
bst.find(1); // If node exits with the given value it returns that node otherwise undefined
bst.contains(1); // If node exits with the given value it returns true otherwise false
bst.bfs() // Returns array of values in breadth first search order
bst.dfs() // Returns array of values in depth first search order
bst.dfsPreOrder() // Returns array of values in pre depth first search order
bst.dfsPostOrder() // Returns array of values in post depth first search order

```
