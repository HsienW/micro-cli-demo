#! /usr/bin/env node

import {fileURLToPath} from 'url';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
// import program from 'commander';
//
// program
//     .version('0.1.0')
//     .command('create <name>')
//     .description('create a new sub app')
//     .action(subAppName => {
//         // 打印命令行输入的值
//         console.log("sub app name is " + subAppName)
//     })
//
// program.parse()

inquirer
    .prompt([
        {
            type: 'input', //type： input, number, confirm, list, checkbox ...
            name: 'subAppName', // key 名
            message: 'Your Sub App Name', // 提示輸入
            default: ''
        }
    ]).then((answers) => {
    // 查看輸入結果
    console.log(answers)
    // 模板路徑
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const destUrl = path.join(__dirname, 'templates');
    // 生成文件目錄 process.cwd() 對應控制台位置
    const cwdUrl = process.cwd();

    // 從模版目錄中讀取文件
    fs.readdir(destUrl, (err, files) => {
        if (err) {
            throw err;
        }

        files.forEach((file) => {
            // 使用 ejs 渲染對應的模版文件
            // renderFile（模版文件地址，傳入渲染數據）
            ejs.renderFile(path.join(destUrl, file), answers).then((data) => {
                // 生成 ejs 處理後的模板文件
                fs.writeFileSync(path.join(cwdUrl, file), data)
            })
        })
    })
});
