const TreeNode = require("./TreeNode")

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new TreeNode(value)

        if (this.root == null){
            this.root = newNode
            return
        }

        let current = this.root

        while(true){
            if (value === current.value){
                // Duplicate
                return 
            }

            if (value < current.value) {
                if(current.left  === null){
                    current.left = newNode
                    return 
                }
                current = current.left
            }
            else {
                if(current.right  === null){
                    current.right = newNode
                    return 
                }
                current = current.right
            }
        }
    }

    delete(value){
        this.root = this._deleteRec(this.root, value)
    }
    _deleteRec(node, value){
        if(node == null) return null

        if (value < node.value){
            node.left = this._deleteRec(node.left, value)
        }
        else if (value > node.value){
            node.right = this._deleteRec(node.right, value)
        } else{
            // Leaft Node
            if(!node.left && !node.right){
                return null
            }
            // One Children
            if(!node.right) return node.left
            if(!node.left) return node.right

            // Two Children
            let minNode = this._findMin(node.right)
            node.value = minNode.value
            node.right = this._deleteRec(node.right, minNode.value)
        }
        return node
    }
    height(){
        return this._findHeight(this.root)
    }

    _findHeight(node){
        if(node == null) return 0
        return 1 + Math.max(this._findHeight(node.left), this._findHeight(node.right))
    }
    _findMin(node){
        while(node.left != null){
            node = node.left
        }
        return node
    }

    inOrderTraversal(node = this.root) {
        if(node != null){
            this.inOrderTraversal(node.left)
            console.log(node.value)
            this.inOrderTraversal(node.right)
        }
    }
    preOrderTraversal(node = this.root) {
        if(node != null){
            console.log(node.value)
            this.preOrderTraversal(node.left)
            this.preOrderTraversal(node.right)
        }
    }
    postOrderTraversal(node = this.root) {
        if(node != null){
            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.value)
        }
    }
}
