let arr = [5, 2, 1, -10, 8];
let b = []; 
arr.sort();
for(let i = arr.length- 1; i >= 0 ; i--){
    b.push(arr[i]); 
}

alert( b );