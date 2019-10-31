'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.count = 1;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!value) return undefined;
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let node = this.root;
      while (node) {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
            break;
          }
          node = node.left;
        } else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
            break;
          }
          node = node.right;
        } else {
          node.count += 1;
          break;
        }
      }
    }
    return this;
  }
  find(value) {
    if (value === undefined || this.root === null) return undefined;
    let current = this.root,
      found = false;
    while (!found && current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (value === undefined) return undefined;
    if (this.root === null) return false;
    let node = this.root;
    while (node) {
      if (value > node.value) {
        node = node.right;
      } else if (value < node.value) {
        node = node.left;
      } else if (value === node.value) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(14);
tree.insert(17);
tree.insert(8);
console.log(tree.find(10));
module.exports = BinarySearchTree;
