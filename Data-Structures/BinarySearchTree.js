class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static insertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left) {
        return BinarySearchTree.insertNode(node.left, newNode);
      } else {
        return node.left = newNode;
      }
    } else {
      if(node.right) {
        return BinarySearchTree.insertNode(node.left, newNode);
      } else {
        return node.right = newNode;
      }
    }
  }

  static inOrderTraverseNode(node, cb) {
    if(!node) {
      BinarySearchTree.inOrderTraverseNode(node.left, cb);
      cb(node.key);            
      BinarySearchTree.inOrderTraverseNode(node.right, cb);
    }
  }

  static preOrderTraverseNode(node, cb) {
    if(!node) {
      cb(node.key);
      BinarySearchTree.preOrderTraverseNode(node.left, cb);
      BinarySearchTree.preOrderTraverseNode(node.right, cb);
    }
  }

  static postOrderTraverseNode(node, cb) {
    if(!node) {
      BinarySearchTree.postOrderTraverseNode(node.left, cb);
      BinarySearchTree.postOrderTraverseNode(node.right, cb);
      cb(node.key);      
    }
  }

  static searchNode(node, key) {
    if(!node) { return false; }    
    if(node.key < key) {
      return BinarySearchTree.searchNode(node.right, key);
    } else if(node.key > key) {
      return BinarySearchTree.searchNode(node.left, key);
    } else {
      return true;
    }
  }

  static findMinNode(node) {
    if(!node) { return null; }
    while(node && node.left) {
      node = node.left;
    }
    return node;
  }

  static removeNode(node, key) {
    if(!node) { return false; }
    if(node.key < key) {
      node.right = BinarySearchTree.removeNode(node.right, key);
    } else if(node.key > key) {
      node.left = BinarySearchTree.removeNode(node.left, key);
    } else {
      if(!node.left && !node.right) {
        node = null;
      } else if(node.left && node.right) {
        const aux = BinarySearchTree.findMinNode(node.right);
        node.key = aux.key;
        node.right = BinarySearchTree.removeNode(node.right, aux.key);
      } else {
        if(node.left) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
    return true;
  }

  insert(key) {
    const node = new Node(key);
    if(!this.root) { return this.root = node; }
    return BinarySearchTree.insertNode(this.root, node);
  }

  search(key) {
    return BinarySearchTree.searchNode(this.root, key);
  }

  inOrderTraverse(cb) {
    return BinarySearchTree.inOrderTraverseNode(this.root, cb);
  }

  preOrderTraverse(cb) {
    return BinarySearchTree.preOrderTraverseNode(this.root, cb);
  }

  postOrderTraverse() {
    return BinarySearchTree.postOrderTraverseNode(this.root, cb);
  }

  min() {
    let node = this.root;
    while(node && node.left) {
      node = node.left;
    }
    return node.key;
  }

  max() {
    let node = this.root;
    if(!node) { return null; }
    while(node && node.right) {
      node = node.right;
    }
    return node.key;
  }

  remove(key) {
    return BinarySearchTree.removeNode(this.root, key);
  }
}

var tree = new BinarySearchTree();
tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);