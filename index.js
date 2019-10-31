'use strict';
const Queue = require('js-queue-ds');
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
  bfs() {
    const data = [];
    if (this.root === null) return data;
    let queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size > 0) {
      let node = queue.dequeue();
      data.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return data;
  }
  dfs() {
    if (this.root === null) return [];
    return this.dfsHelperInOrder(this.root);
  }
  dfsPreOrder() {
    if (this.root === null) return [];
    return this.dfsHelperPreOrder(this.root);
  }
  dfsPostOrder() {
    if (this.root === null) return [];
    return this.dfsHelperPostOrder(this.root);
  }
  dfsHelperPreOrder(node, data = []) {
    if (node) {
      data.push(node.value);
    }
    if (node.left) this.dfsHelperPreOrder(node.left, data);
    if (node.right) this.dfsHelperPreOrder(node.right, data);
    return data;
  }
  dfsHelperPostOrder(node, data = []) {
    if (node.left) this.dfsHelperPostOrder(node.left, data);
    if (node.right) this.dfsHelperPostOrder(node.right, data);
    if (node) {
      data.push(node.value);
    }
    return data;
  }
  dfsHelperInOrder(node, data = []) {
    if (node.left) this.dfsHelperInOrder(node.left, data);
    if (node) {
      data.push(node.value);
    }
    if (node.right) this.dfsHelperInOrder(node.right, data);
    return data;
  }
}
module.exports = BinarySearchTree;
