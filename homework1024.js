
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