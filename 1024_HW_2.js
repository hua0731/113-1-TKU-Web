//使用 if 條件判斷和 for 迴圈來判斷一個數字是否為奇數或偶數，並將 1 到 10 的所有數字列印出來。
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("".concat(i, " \u662F\u5076\u6578"));
    }
    else {
        console.log("".concat(i, " \u662F\u5947\u6578"));
    }
}
