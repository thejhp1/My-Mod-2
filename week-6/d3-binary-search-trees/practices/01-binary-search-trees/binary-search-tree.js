// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
      this.root = null;
  }

  insert(val, currentNode = this.root) {
      const newNode = new TreeNode(val)
      if (!currentNode) {
          this.root = newNode
          return
      }

      if (val < currentNode.val) {
          if (!currentNode.left) {
              currentNode.left = newNode
          }
          else {
              this.insert(val, currentNode.left)
          }
      }

      else {
          if (!currentNode.right) {
              currentNode.right = newNode
          }
          else {
              this.insert(val, currentNode.right)
          }
      }
  }

  search(val) {
      let currentNode = this.root;
      while (currentNode) {
          if (currentNode.val === val) {
              return true;
          }
          if (val < currentNode.val) {
              currentNode = currentNode.left;
          } else {
              currentNode = currentNode.right;
          }
      }
      return false;
  }

  preOrderTraversal(currentNode = this.root) {
      if (!currentNode) { return }
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
      if (!currentNode) { return }
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
      if (!currentNode) { return }
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
  }

  breadthFirstTraversal() {
      if (!this.root) {
          return
      }

      const queue = []
      queue.push(this.root)

      while (queue.length) {
          let currentNode = queue.shift();
          console.log(currentNode.val);

          if (currentNode.left) {
              queue.push(currentNode.left);
          }
          if (currentNode.right) {
              queue.push(currentNode.right);
          }
      }
  }

  depthFirstTraversal() {
      if (!this.root) {
          return
      }

      const stack = [];
      stack.push(this.root);

      while (stack.length > 0) {

          let currentNode = stack.pop();
          console.log(currentNode.val);

          if (currentNode.left) {
              stack.push(currentNode.left)
          }

          if (currentNode.right) {
              stack.push(currentNode.right)
          }
      }
  }
}

module.exports = { BinarySearchTree, TreeNode };
