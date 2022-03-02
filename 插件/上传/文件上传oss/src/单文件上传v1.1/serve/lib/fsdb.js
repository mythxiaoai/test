//文件系统读写数据库
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "./db.json")

function get(key){
    let data =  fs.readFileSync(src);
    const json = JSON.parse(data);
    console.log(key?json[key]:json);
    return key?json[key]:json;
}

function set(key,value){
    let data = fs.readFileSync(src);
    const json = data?JSON.parse(data):{};
    json[key] = value;
    console.log(JSON.stringify(json,null,4),"插入成功！")
    fs.writeFileSync(src,JSON.stringify(json,null,4))
}

exports.get = get;
exports.set = set;
