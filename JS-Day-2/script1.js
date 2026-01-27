let arr1= [ 1,2,3,4,5,6,7,78,8,8,8,28];
arr.reverse();
console.log(arr)

let arr2=[32,234,234,224,343,23,234,5455];
console.log(arr1.pop());

let arr3 = [1,2,3,4,5,6,7]
let rev = []
while(arr.length>0){
    rev.push(arr.pop())
}
console.log(rev)

let num = 3
if(num>0){
    console.log(num , "is positive")
}
else{
    console.log("is negative")
}

let arr = [1,2,3,3,-3,-8,-100,23,3,0];

function printpositivenum(arr){
    for(let num of arr){
        if (num>=0){
            console.log()
        }
    }
}

printpositivenum(arr)


function palindrone(){
    let arr = [1,2,3,4,566,3];
    let original = [];//[1,2,3,4,566,3]
    let reverse = []; //[1,2,3,4,566,3]

    for(let i = 0; i < arr.length; i++){
        original.push(arr[i]);
    }

    while(arr.length > 0 ){
        reverse.push(arr.pop());
    }

    
}

