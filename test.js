'use strict';
const chai = require('chai');
chai.should();
let BinarySearchTree = require('./index');
describe('Binary Search Tree', () => {
  describe('Instantiation', () => {
    let bst = new BinarySearchTree();
    it('bst should be object', () => {
      (typeof bst === 'object').should.be.equals(true);
    });
    it('bst should be instance of BinarySearchTree', () => {
      (bst instanceof BinarySearchTree).should.be.equals(true);
    });
  });
  describe('Insert Method', () => {
    it('root element of the tree should be null', () => {
      let bst = new BinarySearchTree();
      (bst.root === null).should.be.equals(true);
    });
    it('It should return undefined when called with no value', () => {
      let bst = new BinarySearchTree();
      (bst.insert() === undefined).should.be.equals(true);
    });
    it('It should return current node with count increased by 1 when called with duplicate value', () => {
      let bst = new BinarySearchTree();
      bst.insert(1);
      (bst.root.count === 1).should.be.equals(true);
      bst.insert(1);
      (bst.root.count === 2).should.be.equals(true);
    });
    it('value of root element should be 1', () => {
      let bst = new BinarySearchTree();
      bst.insert(1);
      (bst.root.value === 1).should.be.equals(true);
    });
    it('left element should be 0 and right element should be 2', () => {
      let bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(6);
      bst.insert(1);
      (bst.root.value === 5).should.be.equals(true);
      (bst.root.left.value === 1).should.be.equals(true);
      (bst.root.right.value === 6).should.be.equals(true);
    });
  });
  describe('find Method', () => {
    it('if the provided value exits in the bst then it should return the node otherwise undefined', () => {
      let bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(6);
      bst.insert(1);
      let node = bst.find(1);
      (typeof node).should.be.equals('object');
      node.value.should.be.equals(1);
      node = bst.find(15);
      (node === undefined).should.be.equals(true);
    });
    it('if no value is provide in find or there is no element in the bst it should return undefined', () => {
      let bst = new BinarySearchTree();
      let node = bst.find();
      (node === undefined).should.be.equals(true);
      node = bst.find(15);
      (node === undefined).should.be.equals(true);
    });
  });
  describe('contains Method', () => {
    it('if the provided value exits in the bst then it should return true otherwise false', () => {
      let bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(6);
      bst.insert(1);
      let node = bst.contains(1);
      (typeof node).should.be.equals('boolean');
      node.should.be.equals(true);
      node = bst.contains(15);
      (typeof node).should.be.equals('boolean');
      node.should.be.equals(false);
    });
    it('if no value is provide in contains or there is no element in the bst it should return undefined', () => {
      let bst = new BinarySearchTree();
      let node = bst.contains();
      (node === undefined).should.be.equals(true);
      node = bst.contains(15);
      (node === false).should.be.equals(true);
      bst.insert(20);
      node = bst.contains(15);
      (node === false).should.be.equals(true);
    });
  });
  describe('breadth first search', () => {
    it('bst will visit the tree nodes in breadth first order and returns array of values in the same order', () => {
      let bst = new BinarySearchTree();
      [10, 7, 3, 8, 15, 14, 17].forEach(val => bst.insert(val));
      let bfsResult = bst.bfs();
      Array.isArray(bfsResult).should.be.equals(true);
      bfsResult.length.should.be.equals(7);
      (bfsResult.toString() === '10,7,15,3,8,14,17').should.be.equals(true);
    });
    it('if there is no element in the tree then bfs will return empty array', () => {
      let bst = new BinarySearchTree();
      let bfsResult = bst.bfs();
      bfsResult.length.should.be.equals(0);
      Array.isArray(bfsResult).should.be.equals(true);
    });
  });
  describe('dept first search', () => {
    it('bst will visit the tree nodes in depth first order and returns array of values in the same order', () => {
      let bst = new BinarySearchTree();
      [10, 7, 3, 8, 15, 14, 17].forEach(val => bst.insert(val));
      let dfsResult = bst.dfs();
      Array.isArray(dfsResult).should.be.equals(true);
      dfsResult.length.should.be.equals(7);
      (dfsResult.toString() === '3,7,8,10,14,15,17').should.be.equals(true);
    });
    it('if there is no element in the tree then dfs will return empty array', () => {
      let bst = new BinarySearchTree();
      let dfsResult = bst.dfs();
      dfsResult.length.should.be.equals(0);
      Array.isArray(dfsResult).should.be.equals(true);
    });
  });
  describe('dept first search pre order', () => {
    it('bst will visit the tree nodes in depth first pre order and returns array of values in the same order', () => {
      let bst = new BinarySearchTree();
      [10, 7, 3, 8, 15, 14, 17].forEach(val => bst.insert(val));
      let dfsResult = bst.dfsPreOrder();
      Array.isArray(dfsResult).should.be.equals(true);
      dfsResult.length.should.be.equals(7);
      (dfsResult.toString() === '10,7,3,8,15,14,17').should.be.equals(true);
    });
    it('if there is no element in the tree then dfs pre order will return empty array', () => {
      let bst = new BinarySearchTree();
      let dfsResult = bst.dfsPreOrder();
      dfsResult.length.should.be.equals(0);
      Array.isArray(dfsResult).should.be.equals(true);
    });
  });
  describe('dept first search post order', () => {
    it('bst will visit the tree nodes in depth first post order and returns array of values in the same order', () => {
      let bst = new BinarySearchTree();
      [10, 7, 3, 8, 15, 14, 17].forEach(val => bst.insert(val));
      let dfsResult = bst.dfsPostOrder();
      Array.isArray(dfsResult).should.be.equals(true);
      dfsResult.length.should.be.equals(7);
      (dfsResult.toString() === '3,8,7,14,17,15,10').should.be.equals(true);
    });
    it('if there is no element in the tree then dfs post order will return empty array', () => {
      let bst = new BinarySearchTree();
      let dfsResult = bst.dfsPostOrder();
      dfsResult.length.should.be.equals(0);
      Array.isArray(dfsResult).should.be.equals(true);
    });
  });
});
