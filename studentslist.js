const { MongoClient } = require('mongodb');
const fs = require('fs');
const csv = require('csv-parser');

const uri = "mongodb://localhost:27017"; // 替換為你的 MongoDB 連接字串
const dbName = "411630121"; // 替換為你的資料庫名稱
const collectionName = "studentslist"; // 替換為你的集合名稱

const client = new MongoClient(uri);

async function importCSVtoMongoDB() {
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 讀取 CSV 檔案
        const results = [];
        fs.createReadStream('studentslist.csv') // CSV 檔案路徑
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                try {
                    // 插入資料到 MongoDB
                    const insertResult = await collection.insertMany(results);
                    console.log(`成功插入 ${insertResult.insertedCount} 筆資料！`);
                } catch (insertError) {
                    console.error("插入資料時發生錯誤：", insertError);
                } finally {
                    // 關閉連接
                    await client.close();
                    console.log("連接已關閉");
                }
            });
    } catch (error) {
        console.error("發生錯誤：", error);
    }
}

importCSVtoMongoDB();
