//聲明一個不可改變的常數 const 和一個可以改變的變數 let。請將兩者進行賦值，並嘗試更改它們的值，觀察 TypeScript 如何處理錯誤

const Age: number = 25;
let Name: string = "Alice";

Name = "Lydia"

console.log(`Age: ${Age}`);
console.log(`Name: ${Name}`);