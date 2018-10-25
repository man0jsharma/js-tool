
/*
1. 
Node { left.value : 10, right.value : 20 }

2.
Node { left.left.value: 5, left.right.value : 10, right.left.value: 15, right.right.value : 20}

*/


class Node {
    constructor(value) {
        this.value = value;
    }

    setLeft(value) {
        this.left = new Node(value);
        return this.left;
    }

    setRight(value) {
        this.right = new Node(value);
        return this.left;
    }
}

const node = new Node(10);

node.setLeft(5).setLeft(15).setRight(20);
node.setRight(15);

console.log(node);