import BinarySearchTree from "./BinarySearchTree.js"



const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(4)
bst.insert(34)
bst.insert(44)
bst.insert(3)
bst.insert(1)
bst.insert(55)
bst.insert(56)
bst.delete(4)

console.log("Height",bst.height())


bst.postOrderTraversal()