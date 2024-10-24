//定義一個函數來輸出 1 到 9 的九九乘法表，並將結果以 console.log 印出。

function printMultiplicationTable(): void{
    for(let i = 1;i <= 9;i++){
        for(let j = 1;j <= 9;j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}
printMultiplicationTable();