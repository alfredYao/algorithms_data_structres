function BinaryTree(){
    var Node = function(key){
        this.key=key;
        this.left = null;
        this.right = null;
    }
    // 二叉树根节点
    var root = null;
    // 二叉树插入节点方法
    var insertNode = function(node,newNode){
        if(newNode.key < node.key ){
            if(node.left===null){
                node.left = newNode
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right = newNode
            }else{
                insertNode(node.right,newNode)
            }
        }
    }
    // 外部调用插入方法
    this.insert = function(key){
        var newNode = new Node(key)
        if(root === null){
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }
}

var nodes=[8,3,10,1,6,14,4,7,13]
var binaryTree=new BinaryTree()
nodes.forEach(function(key){
    binaryTree.insert(key)
})