 /// Homework 1010 start

 class Node{
    constructor(left,right){
        this.left= {}
        this.right ={}
    }
    setleft(value){
        this.left = value;
    }
    setright(value){
        this.right = value;
    }
}
var node = new Node();

var leftval = node.setleft(10);
var rightval = node.setright(45);
//var childnode = new Node();
//childnode.setleft(10);

console.log('set left is: '+node);

