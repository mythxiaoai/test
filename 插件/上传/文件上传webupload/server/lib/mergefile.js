/*
*   读取所有文件
*   合并成一个新文件
*/

const FS = require("fs");
const PATH = require('path');

module.exports = function(fileSource, exportFilePath) {

    const readFiles = [];
    let newFileSize = 0;
    let newFileData = "";
    let mergeFileProgress = 0;

    function searchFile(path) {
        try{
            let stats = FS.statSync(path);
            if(stats.isFile()){
                newFileSize += stats.size;
                readFiles.push({absPath:path,size:stats.size});
            }else if(stats.isDirectory()){
                //合并路径下所有文件
                let dirfiles = FS.readdirSync(path);
                for(let i = 0;i<dirfiles.length;i++){
                    searchFile(PATH.join(path,dirfiles[i]));
                }
            }
        }catch(err){
            console.log("error not find "+path);
        }
    }

    for(let i=0;i<fileSource.length;i++){
        searchFile(fileSource[i]);
    }

    for(let i = 0;i<readFiles.length;i++){
        newFileData += FS.readFileSync(readFiles[i].absPath);
        mergeFileProgress++;
        console.log("读取第"+mergeFileProgress+"个文件。");
    }

    FS.writeFile(exportFilePath,newFileData,err =>{
        if(null != err){
            throw err;
        }else{
            console.log("总共合并 "+readFiles.length+"个文件 "+newFileSize+" bytes");
        }
    });
}