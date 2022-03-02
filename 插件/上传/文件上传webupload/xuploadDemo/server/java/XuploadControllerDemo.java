package com.example.xupload.controller;

import com.example.xupload.utils.XuploadUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * 示例demo
 * @ClassName XuploadControllerDemo
 * @Description TODO
 * @Author LYR
 * @Date 2019/3/13 11:29
 * @Version 1.0
 **/
@RestController
public class XuploadControllerDemo {

    //检查文件是否以分片上传、是否未上传完成
    @RequestMapping("/uploadFile-checkblock")
    public String checkBlock(String md5,String saveName) throws Exception {
        //文件存储路径
        String savePath="";

        String flag = XuploadUtil.checkBlock(savePath, saveName, md5);
        //以下可以实现自身业务代码

        return flag;
    }

    //文件上传
    @RequestMapping("/uploadFile")
    public String uploadFile(MultipartFile file, String chunks, String chunk, String saveName, String md5) throws IOException {
        //文件存储路径
        String savePath="";

        String flag = XuploadUtil.uploadFile(file, chunks, chunk, savePath, saveName, md5);
        //以下可以实现自身业务代码

        return flag;
    }

    //合并分片
    @RequestMapping("/uploadFile-mergeblock")
    public String mergeBlock(String md5,String saveName) throws Exception {
        //文件存储路径
        String savePath="";

        String flag = XuploadUtil.mergeBlock(saveName, savePath, md5);
        //以下可以实现自身业务代码

        return flag;
    }

}
