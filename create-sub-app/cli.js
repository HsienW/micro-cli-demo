#! /usr/bin/env node

import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'input', //type： input, number, confirm, list, checkbox ...
        subAppName: 'subAppName', // key 名
        message: 'Your Sub App Name', // 提示輸入
        default: ''
    }
]).then(answers => {
    // 查看輸入結果
    console.log(answers)
})
