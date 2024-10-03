// Question-1
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
var reversedarr=[];
for (var i=a.length-1;i>=0;i--){
    reversedarr.push(a[i])
}
console.log(reversedarr);

// Question-2
var a="prasanna";
var reversedarray="";
for (var i=a.length-1;i>=0;i--){
    reversedarray += a[i];
}
console.log(reversedarray);

// Question-3
var arr=[1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
for (var i=0;i<arr.length;i++){
    if(typeof arr[i]==='object'&&'age' in arr[i]){
        console.log(arr[i].age);
    }
}