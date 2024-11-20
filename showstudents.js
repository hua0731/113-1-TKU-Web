const fs = require('fs');
const csv = require('csv-parser');

const filePath = 'studentslist.csv'; // 你的 CSV 檔案路徑

// 存放學生資料的陣列
const students = [];

// 讀取 CSV 並顯示內容
fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
        students.push(data);
    })
    .on('end', () => {
        console.log("成功讀取學生名單！");
        console.log("學生名單：");

        // 顯示學生名單
        students.forEach((student, index) => {
            console.log(
                `${index + 1}. 帳號: ${student.帳號}, 座號: ${student.座號}, 姓名: ${student.姓名}, 院系: ${student.院系}, 年級: ${student.年級}, 班級: ${student.班級}, Email: ${student.Email}`
            );
        });
    })
    .on('error', (error) => {
        console.error("讀取 CSV 檔案時發生錯誤：", error);
    });
