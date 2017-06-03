//1
var arr = [1,5,8,8,6];
console.log(arr);
arr.length = 0;
console.log(arr);
//2
var arr1 = [1,2,3,4,5,6,7,8,9,];
arr1.reverse();
console.log(arr1);
//3
var  fruits = ["Orange", "Banana", "Mango", "Apple"];
var howmany = (fruits.length - 1);
for(var i = 0; i <= howmany; i++){
  console.log(fruits[i]);
}
//4
var start = 100;
var result = [100];
for(; start >= 0; start--) {
  result.push(start);
}
//5
var arr2 = ['Alina','Veronika','Dima', 'Oleg', 'Marjan', 'Vova', 'Artur', ];
arr2.splice(-2, 1, 'Ruslan');
console.log(arr2);
