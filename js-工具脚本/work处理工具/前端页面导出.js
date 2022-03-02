const cheerio = require('cheerio');
let str = `<table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1706px;"><colgroup><col name="el-table_2_column_9" width="40"><col name="el-table_2_column_10" width="40"><col name="el-table_2_column_11" width="198"><col name="el-table_2_column_12" width="195"><col name="el-table_2_column_13" width="195"><col name="el-table_2_column_14" width="195"><col name="el-table_2_column_15" width="195"><col name="el-table_2_column_16" width="195"><col name="el-table_2_column_17" width="100"><col name="el-table_2_column_18" width="120"><col name="el-table_2_column_19" width="160"><col name="el-table_2_column_20" width="60"><col name="gutter" width="13"></colgroup><thead class="has-gutter"><tr class=""><th colspan="1" rowspan="1" class="el-table_2_column_9  is-center el-table-column--selection  is-leaf"><div class="cell"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value=""></span><!----></label></div></th><th colspan="1" rowspan="1" class="el-table_2_column_10  is-center   is-leaf"><div class="cell">序号</div></th><th colspan="1" rowspan="1" class="el-table_2_column_11     is-leaf"><div class="cell">工序类型</div></th><th colspan="1" rowspan="1" class="el-table_2_column_12     is-leaf"><div class="cell">工序分类</div></th><th colspan="1" rowspan="1" class="el-table_2_column_13     is-leaf"><div class="cell">工序名称</div></th><th colspan="1" rowspan="1" class="el-table_2_column_14     is-leaf"><div class="cell">工序耗时(分)</div></th><th colspan="1" rowspan="1" class="el-table_2_column_15     is-leaf"><div class="cell">工序计价(元)</div></th><th colspan="1" rowspan="1" class="el-table_2_column_16     is-leaf"><div class="cell">备注</div></th><th colspan="1" rowspan="1" class="el-table_2_column_17     is-leaf"><div class="cell">状态</div></th><th colspan="1" rowspan="1" class="el-table_2_column_18     is-leaf"><div class="cell">维护人</div></th><th colspan="1" rowspan="1" class="el-table_2_column_19     is-leaf"><div class="cell">维护时间</div></th><th colspan="1" rowspan="1" class="el-table_2_column_20  is-center   is-leaf"><div class="cell">操作</div></th><th class="gutter" style="width: 13px;"></th></tr></thead></table>`

$ = cheerio.load(str);
let res = $(".cell").toArray().map(function(v){
console.log($(v).text());
    return $(v).text();
})
console.log(JSON.stringify(res));


// let str = ``
// // console.log(str);
// let $ = cheerio.load(str);
// let res = $(".el-submenu .el-submenu__title span").toArray().map(function(v){
// console.log($(v).text());
//     return $(v).text();
// })
// console.log(JSON.stringify(res),res.length);
