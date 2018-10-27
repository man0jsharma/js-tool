
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
  var num = [10,20,30,40,50,60,70,80,90];
  var sum=0;
  var avg =0;
  var largestnum =0;

  for (var i=0;i<num.length;i++)
  {
    sum+=num[i];    
    avg = sum/num.length;
  }

  for (var i=0;i<num.length;i++)
  {
      for( var j=0;j<num[i].length;j++){
          if(num[i][j]>largestnum[i]){
              largestnum[i]=num[i][j];
          }
      }
    
  }
  console.log("largest num is: "+largestnum[i]);

  console.log("sum is node "+sum);
  console.log("avg is node "+avg);
