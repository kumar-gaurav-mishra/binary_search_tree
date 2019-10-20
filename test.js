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
});
