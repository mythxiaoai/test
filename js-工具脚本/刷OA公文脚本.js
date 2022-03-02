/**
 * 使用方法:
 * 1.登陆OA(只要登陆就行，不用切换到对应界面)
 * 2.按F12，切换到console
 * 3.粘贴以下代码到控制台
 * 4.按回撤键
 * 5.wait....
 * tips:如果少量(只有一页没签收)切换到"已收公文"的界面在控制台输入	$(".deltail_view").trigger("click") 按回撤
 * $("#docRecievedGrid-body .x-grid-row").each(function(){if(~$(this).text().indexOf("未签收")){$(this).find(".deltail_view").trigger("click")}});
 */
;
(() => {
    let baseUrl = "https://erp.runjian.com:8665";
    $.ajax({
          type: "get",
          data: {
            "page": 1,
            "start": 0,
            "limit": 9999
          },
          url: `${baseUrl}/OABriefcase/LoadDataByRecievedType`,
          success(data) {
            let arr = JSON.parse(data);
            arr.rows = arr.rows.filter(v => {
              return v.State == "未签收"
            });
            let len = arr.rows.length;
            let i = 1;
            console.log("----总共未签收有:" + len + "份----");
            if (arr.rows.length > 0) {
              for (let item of arr.rows) {
                setTimeout(() => {
                    $.ajax({
                        type: "post",
                        data: {
                          briefcaseId: item.SourceId,
                          __RequestVerificationToken: "CCztajIwYcGxwUWPp0dTDpE2_Ius3N3R1jd-m4X8zgLEDGlaYdcVdX_SwIOQoewM7QyAeLpR6GA19eoj01nAj8R0b7V4E29VV9aOIkwc9-01"
                        },
                        url: `${baseUrl}/OABriefcase/GetDetailModel`,
                        success(data) {
                          console.log("----成功" + (i) + "\t" + ((i++/len)*100).toFixed(2)+"%----");
                            }
                          });
                        },
                        200);
                    }
                    console.log("----正在执行...执行完后，点击重置刷新----");
                  } else {
                    console.log("----全部已签收，无未签收公文！！----");
                  }
                }
              });
          })()
