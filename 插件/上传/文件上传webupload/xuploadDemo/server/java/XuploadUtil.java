package com.example.xupload.utils;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * xupload 抽取的工具类
 * @ClassName XuploadUtil
 * @Description TODO
 * @Author LYR
 * @Date 2019/3/13 8:55
 * @Version 1.0
 **/
public class XuploadUtil {

    /**
     * 检查文件是否以分片上传、是否未上传完成
     * savePath：文件存储路径
     * saveName、md5：前端传来的参数
     * @Author chengpunan
     * @Description //TODO
     * @Date 10:05 2019/3/13
     * @Param [path, saveName, md5]
     * @return java.lang.String
     **/
    public static String checkBlock(String savePath,String saveName,String md5) throws Exception {
        StringBuffer stringBuffer = new StringBuffer("[");
        //遍历upload文件夹
        File uploadFile = new File(savePath);
        if (uploadFile.exists()) {
            File[] files = uploadFile.listFiles();
            for (File file : files) {
                if (file.getName().equals(saveName)){   //已上传文件;
                    return "all";
                }else if(file.getName().equals(md5)){   //存在分片文件夹;
                    String[] blockList = file.list();
                    for (String blockFile : blockList) {
                        stringBuffer.append(blockFile+",");
                    }
                    stringBuffer.append("]");
                    return stringBuffer.toString();
                }
            }
        } else {
            throw new Exception("存储路径不存在，请检查配置文件");
        }
        return "[]";
    }

    /**
     * 文件上传
     * savePath：文件存储路径
     * file、chunks、chunk、saveName、md5：前端传来的参数
     * @Author chengpunan
     * @Description //TODO
     * @Date 15:32 2019/3/12
     * @Param [request, params]
     * @return java.lang.String
     **/
    public static String uploadFile(MultipartFile file,String chunks,String chunk,String savePath,String saveName,String md5) throws IOException {
        if(chunks==null){  //未分片文件
            File targetFile = new File(savePath+saveName);
            if(!targetFile.getParentFile().exists()){
                targetFile.getParentFile().mkdirs();    //创建路径
            }
            file.transferTo(targetFile);
            return "文件未分割，上传成功,存储路径为："+savePath+saveName;
        }else { //文件分片
            File blockFileDir = new File(savePath+md5+"/"+chunk);
            if (!blockFileDir.getParentFile().exists()){
                blockFileDir.getParentFile().mkdirs();
            }
            file.transferTo(blockFileDir);
            return "文件分割，"+chunk+"/"+chunks+"上传成功";
        }
    }

    /**
     * 合并分片
     * savePath：文件存储路径
     * saveName、md5：前端传来的参数
     * @Author chengpunan
     * @Description //TODO
     * @Date 15:35 2019/3/12
     * @Param [md5, saveName]
     * @return void
     **/
    public String mergeBlock(String md5,String saveName,String savePath) throws Exception{
        //分片文件夹路径
        String path = savePath+md5;
        File dir = new File(path);
        File[] Files = dir.listFiles();
        if(Files.length>0){
            //排序
            ArrayList<File> blockFiles = new ArrayList<>(Arrays.asList(Files));
            blockFiles.sort((o1, o2) -> {
                String o1Name = o1.getName();
                String o2Name = o2.getName();
                if (Integer.parseInt(o1Name) < Integer.parseInt(o2Name)) {
                    return -1;
                }
                return 1;
            });
            //目标文件
            File targetFile = new File(savePath+saveName);
            FileChannel outChannel = new FileOutputStream(targetFile).getChannel();
            FileChannel inputChannel;
            for (File blockFile : blockFiles) {
                inputChannel = new FileInputStream(blockFile).getChannel();
                inputChannel.transferTo(0, inputChannel.size(), outChannel);
                inputChannel.close();
                //删除分片
                blockFile.delete();
            }
            outChannel.close();
            //删除分片文件夹
            FileUtils.deleteDirectory(dir);
        }else {
            throw new Exception("分片文件夹下无文件，请检查");
        }
        return "分片合并成功,文件存储路径为："+savePath+saveName;

    }


}
