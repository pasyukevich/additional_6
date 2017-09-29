module.exports = function zeros(expression) {
  let array,i,fiveCount,twoCount,str,j,step;
 array=expression.slice(0,-1).split('!*');
 twoCount=fiveCount=0;
 for (i=0;i<array.length;i++){
   str=array[i];
   if (str.charCodeAt(str.length-1)==33){
     str=str.slice(0,-1);
     step=2;
   }
   else step=1;
     str=Number(str);
     for (j=str;j>0;j-=step){
       if (j%2==0) twoCount+=counter(j,2);
       if (j%5==0) fiveCount+=counter(j,5);
     }
   }
 return twoCount<fiveCount?twoCount:fiveCount;
}
function counter(number,divider){
 let count=0;
 while(!(number%divider)){
   number/=divider;
   count++;
 }
 return count;
}
