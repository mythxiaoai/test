


<!DOCTYPE html>
<html lang="zh_CN">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>评估预警地图</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <script type="text/javascript" src="js/baiduMap/map_load.js"></script>
    
    <script type="text/javascript" src="js/evaluateWarningMap.js"></script>
    <script type="text/javascript" src="js/evaluateWarningDetail.js"></script>
    <script type="text/javascript" src="js/commonDropdownData.js"></script>
    <script type="text/javascript" src="js/baiduMap/DistanceTool_min.js"></script>
    <script type="text/javascript" src="js/baiduMap/SearchInfoWindow_min.js"></script>
    <script type="text/javascript" src="js/baiduMap/mapv.js"></script>

    <link rel="stylesheet" type="text/css" href="js/baiduMap/css/scenceInfo.css">
    <link rel="stylesheet" type="text/css" href="js/baiduMap/css/SearchInfoWindow_min.css">
    <script type="text/javascript" src="js/appData/Mapv.min.js"></script>
    
<body>
<!DOCTYPE html>
<html>
<head>
    <script src="js/common/jquery/jquery-2.0.3.min.js"></script>
    <script src="js/common/jquery.json-2.4.js"></script>
    <script type="text/javascript" src="js/common/Jquery_Loading/randomColor.min.js"></script>
    <script type="text/javascript" src="js/common/ajaxFileUpload.js"></script>

    <link rel="stylesheet" type="text/css" href="js/common/Jquery_Loading/default.min.css"/>
    <link rel="stylesheet" type="text/css" href="js/common/Jquery_Loading/loading.css"/>
    <link rel="stylesheet" type="text/css" href="css/loading.css"/>
    <script type="text/javascript" src="js/common/Jquery_Loading/loading.js"></script>

    <!-- JQUERY UI-->
    <script src="js/common/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"></script>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="bootstrap-3.3.7/css/app.min.css">
    <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/css/bootstrap-theme.min.css"/>
    <script src="bootstrap-3.3.7/js/bootstrap.min.js"></script>
    <script src="bootstrap-3.3.7/js/app.min.js"></script>

    <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" type="text/css" href="js/common/bootstrap-switch/bootstrap-switch.min.css"/>
    <script type="text/javascript" src="js/common/bootstrap-switch/bootstrap-switch.min.js"></script>

    <script type="application/javascript" src="bootstrap-3.3.7/js/bootstrap-select.min.js"></script>
    <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/css/bootstrap-select.min.css"/>

    <script src="bootstrap-3.3.7/js/bootstrap-table.min.js"></script>
    <link href="bootstrap-3.3.7/css/bootstrap-table.min.css" rel="stylesheet"/>
    <script src="bootstrap-3.3.7/js/bootstrap-table-zh-CN.min.js"></script>
    <!-- DATE RANGE PICKER -->
    <script type="application/javascript" src="bootstrap-3.3.7/js/moment-with-locales.min.js"></script>
    <script type="application/javascript" src="bootstrap-3.3.7/js/bootstrap-datetimepicker.min.js"></script>
    <script src="bootstrap-3.3.7/js/bootstrap-contextmenu.js"></script>

    <link rel="stylesheet" type="text/css" href="css/cloud-admin.css">
    <link rel="stylesheet" type="text/css" href="css/themes/default.min.css" id="skin-switcher"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.css"/>
    <link href="bootstrap-3.3.7/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <!-- ANIMATE -->
    <link rel="stylesheet" type="text/css" href="css/animatecss/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/css/build.css">
    <!-- DATE RANGE PICKER -->
    <link rel="stylesheet" type="text/css" href="js/common/jquery-todo/css/styles.css"/>
    <!-- FULL CALENDAR -->
    <link rel="stylesheet" type="text/css" href="js/common/fullcalendar/fullcalendar.min.css"/>
    <!-- GRITTER -->
    <link rel="stylesheet" type="text/css" href="js/common/gritter/css/jquery.gritter.css"/>

    <!-- SLIMSCROLL -->
    <script type="text/javascript" src="js/common/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"></script>
    <!-- SLIMSCROLL -->
    <script type="text/javascript" src="js/common/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"></script>
    <script type="text/javascript" src="js/common/jQuery-slimScroll-1.3.0/slimScrollHorizontal.min.js"></script>
    <!-- BLOCK UI -->
    <script type="text/javascript" src="js/common/jQuery-BlockUI/jquery.blockUI.min.js"></script>

    <!--bootstrap-treeview-->
    <script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap-treeview.min.js"></script>
    <script type="text/javascript" src="bootstrap-3.3.7/css/bootstrap-treeview.min.css"></script>

    <!-- SPARKLINES -->
    <script type="text/javascript" src="js/common/sparklines/jquery.sparkline.min.js"></script>
    <!-- EASY PIE CHART -->
    <script src="js/common/jquery-easing/jquery.easing.min.js"></script>
    <script type="text/javascript" src="js/common/easypiechart/jquery.easypiechart.min.js"></script>
    <!-- FLOT CHARTS -->
    <script src="js/common/flot/jquery.flot.min.js"></script>
    <script src="js/common/flot/jquery.flot.time.min.js"></script>
    <script src="js/common/flot/jquery.flot.selection.min.js"></script>
    <script src="js/common/flot/jquery.flot.resize.min.js"></script>
    <script src="js/common/flot/jquery.flot.pie.min.js"></script>
    <script src="js/common/flot/jquery.flot.stack.min.js"></script>
    <script src="js/common/flot/jquery.flot.crosshair.min.js"></script>
    <!-- TODO -->
    <script type="text/javascript" src="js/common/jquery-todo/js/paddystodolist.js"></script>
    <!-- TIMEAGO -->
    <script type="text/javascript" src="js/common/timeago/jquery.timeago.min.js"></script>
    <!-- FULL CALENDAR -->
    <script type="text/javascript" src="js/common/fullcalendar/fullcalendar.min.js"></script>
    <!-- COOKIE -->
    <script type="text/javascript" src="js/common/jQuery-Cookie/jquery.cookie.min.js"></script>
    <!-- GRITTER -->
    <script type="text/javascript" src="js/common/gritter/js/jquery.gritter.min.js"></script>
    <script type="text/javascript" src="js/common/bootstrap-onhover/twitter-bootstrap-hover-dropdown.min.js"></script>
    <!-- CUSTOM SCRIPT -->
    <script src="js/common/script.js"></script>
    <script src="js/header.js"></script>
    <!--Ladda UI for Bootstrap 3 -->
    <link rel="stylesheet" href="bootstrap-3.3.7/css/ladda-themeless.min.css"/>
    <script src="bootstrap-3.3.7/js/spin.min.js"></script>
    <script src="bootstrap-3.3.7/js/ladda.min.js"></script>

    <link rel="stylesheet" type="text/css" href="js/common/bootstrap-fileinput/css/fileinput.min.css" media="all"/>
    <script src="js/common/bootstrap-fileinput/js/plugins/piexif.min.js" type="text/javascript"></script>
    <script src="js/common/bootstrap-fileinput/js/plugins/sortable.min.js" type="text/javascript"></script>
    <script src="js/common/bootstrap-fileinput/js/plugins/purify.min.js" type="text/javascript"></script>
    <script src="js/common/bootstrap-fileinput/js/fileinput.min.js"></script>
    <script src="js/common/bootstrap-fileinput/themes/fas/theme.min.js"></script>
    <script src="js/common/bootstrap-fileinput/js/locales/zh.js"></script>

    <script type="text/javascript" src="js/common/toastr/toastr.min.js"></script>
    <link rel="stylesheet" type="text/css" href="js/common/toastr/toastr.min.css"/>
    <!-- TYPEHEAD -->
    <style type="text/css">
        .table {
            table-layout: fixed;
        }

        .brand {
            font-family: georgia, serif;
        }

        .brand .first {
            color: #ccc;
            font-style: italic;
        }

        .brand .second {
            color: #fff;
            font-weight: bold;
        }

        #aable1 th {
            text-align: center;
            vertical-align: middle;
        }

        #aable1 td {
            text-align: center;
            vertical-align: middle;
        }
        #orderTable th {
            text-align: center;
            vertical-align: middle;
        }

        #orderTable td {
            text-align: center;
            vertical-align: middle;
        }

        #orderTable1 th {
            text-align: center;
            vertical-align: middle;
        }

        #orderTable1 td {
            text-align: center;
            vertical-align: middle;
        }

        .settings-text {
            padding-left: 0px;
            padding-right: 0px;
            text-align: center !important;
        }
    </style>
</head>
<body>
<!-- HEADER -->
<header class="navbar clearfix" id="header">
    <div class="container">
        <div class="navbar-brand" style="width:30%">
            <!-- COMPANY LOGO -->
            <a href="sceneRecognition.jsp">
                <img src="img/logo.png" alt="Cloud Admin Logo" class="img-responsive Rotation img" style="height:30px;width:30px">
            </a>
            <a class="brand" href="sceneRecognition.jsp" style="margin-left: 21%"><span class="second">重点场景</span> <span class="first">问题分析及网络保障系统</span></a>
            <div class="visible-xs">
                <a href="#" class="team-status-toggle switcher btn dropdown-toggle">
                    <i class="fa fa-users"></i>
                </a>
            </div>
            <div id="sidebar-collapse" class="sidebar-collapse btn">
                <i class="fa fa-bars"
                   data-icon1="fa fa-bars"
                   data-icon2="fa fa-bars"></i>
            </div>
        </div>
        <ul class="nav navbar-nav pull-left hidden-xs" id="navbar-left">

            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-cog"></i>
                    <span class="name">皮肤</span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu skins">
                    <li class="dropdown-title">
                        <span><i class="fa fa-leaf"></i>皮肤主题</span>
                    </li>
                    <li><a href="#" data-skin="graphite">经典黑 (默认)</a></li>
                    <li><a href="#" data-skin="default">蓝白</a></li>
                    <li><a href="#" data-skin="night">墨蓝</a></li>
                    <li><a href="#" data-skin="earth">泥土</a></li>
                    <li><a href="#" data-skin="utopia">黄黑</a></li>
                    <li><a href="#" data-skin="nature">青灰</a></li>
                </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav pull-right">
            <li class="dropdown" id="header-notification">

                <button type="button" class="btn btn-success dropdown-toggle menuButtonStyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hover="dropdown">
                    <i class="fa fa-gears fa-fw"></i> 系统设置 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li id="userSet"><a href="userInfo.jsp"><i class="fa fa-users"></i>&nbsp&nbsp平台账号管理</a></li>
                    <li id="alarmSet"><a onclick="$('#alarmSetTable').modal('show');"><i class="fa fa-heartbeat"></i>&nbsp&nbsp评估预警门限设置</a></li>
                    <li id="orderSet"><a onclick="header.orderSet()"><i class="fa fa-briefcase"></i>&nbsp&nbsp派单质检门限设置</a></li>
                    <li style="border-radius:15px 15px 15px 15px;"><a href="#"><i class="fa fa-photo"></i>&nbsp&nbsp场景图标设置</a></li>
                    <li><a onclick="header.festivalGrtThresholdSet()"><i class="fa fa-cog"></i>&nbsp&nbsp保障劣化小区门限配置</a></li>
                </ul>
            </li>

            <li class="dropdown user" id="header-user">
                <button type="button" class="btn btn-success dropdown-toggle menuButtonStyle"
                        style="margin-top: 12px;margin-left: 15px"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hover="dropdown" id="userName">
                </button>
                <ul class="dropdown-menu">
                    <li><a href="userInfo.jsp"><i class="fa fa-user"></i>&nbsp&nbsp账户信息</a></li>
                    <li><a href="#"><i class="fa fa-cog"></i>&nbsp&nbsp账户设置</a></li>
                    <li><a href="#"><i class="fa fa-eye"></i>&nbsp&nbsp权限设置</a></li>
                    <li onclick="removeUserInfo()"><a href="login.jsp"><i class="fa fa-power-off"></i>&nbsp&nbsp退出</a></li>
                </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN -->
        </ul>
        <!-- END TOP NAVIGATION MENU -->
    </div>
</header>
<div class="modal fade" id="loadingModal">
    <div style="width: 200px;height:20px; position: absolute; text-align: center; left: 50%; top: 50%;margin-left:-100px;margin-top:-10px">
        <div class="progress progress-striped active" style="margin-bottom: 0;">
            <div class="progress-bar" style="width: 100%;"></div>
        </div>
        <h5 style="color:honeydew"> <strong>评估预警门限值批量设置中......</strong> </h5>
    </div>
</div>
<div id="alarmSetTable" class="modal fade">
    <div class="modal-dialog modal-lg" role="document" style="width: 900px">
        <div class="modal-content">
            <div class="modal-header badge-green modleStyle">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span class="fa fa-gears" aria-hidden="true"></span> 设置评估预警门限值</h4>
            </div>
            <div class="modal-body" style="padding: 3px">
                <div class='panel-default'>
                    <div class="row col-md-12" STYLE="width: 100%">
                        <div class="col-md-3" STYLE="width:150px;padding-left:5px;padding-right:5px;">
                            <h5 class="modal-title"><span class="label label-info arrow-in arrow-in-right">设置模式:</span></h5>
                            <select id="scenceMode" data-actions-box="true" class="selectpicker" data-style="btn-success" title="全部场景">
                                <option value="0" data-icon="glyphicon">场景类型设置</option>
                                <option value="1" data-icon="glyphicon" selected="selected">场景名设置</option>
                            </select>
                        </div>
                        <div class="col-md-2" STYLE="width:110px;padding-left:0px;padding-right:5px;">
                            <h5 class="modal-title"><span class="label label-info arrow-in arrow-in-right">地&nbsp&nbsp市:</span></h5>
                            <select id="cityList11" data-actions-box="true" class="selectpicker" data-live-search="true" data-style="btn-success" title="云南省">
                                <option value="云南省" data-icon="glyphicon glyphicon-home" selected="selected" id="defaultCity11">云南省</option>
                            </select>
                        </div>
                        <div class="col-md-2" STYLE="padding-left:0px;padding-right:5px;">
                            <h5 class="modal-title"><span class="label label-info arrow-in arrow-in-right">区&nbsp&nbsp县:</span></h5>
                            <select id="countyList11" data-actions-box="true" class="selectpicker" data-live-search="true" data-style="btn-success" title="全部区县">
                                <option value="全部区县" data-icon="glyphicon glyphicon-home" selected="selected" id="defaultCounty11">全部区县</option>
                            </select>
                        </div>
                        <div class="col-md-2" STYLE="padding-left:0px;padding-right:5px;">
                            <h5 class="modal-title"><span class="label label-info arrow-in arrow-in-right">场景类型:</span></h5>
                            <select id="scenceList11" data-actions-box="true" class="selectpicker" multiple data-live-search="true" data-style="btn-success" title="全部场景">
                                <option value="全部场景" data-icon="glyphicon" selected="selected" id="defaultScence11">全部场景</option>
                            </select>
                        </div>
                        <div class="col-md-3" STYLE="padding-left:0px;padding-right:0px;">
                            <h5 class="modal-title"><span class="label label-info arrow-in arrow-in-right">场景名称:</span></h5>
                            <div class="input-group" style="width: 100%">
                                <input id="scenceName11" type="text" class="form-control" placeholder="请输入关键字">
                            </div>
                        </div>
                        <div class="col-md-1" STYLE="padding-left:0px;padding-right:0px;">
                            <button class="btn btn-info" style="margin-top: 20px" onclick="header.querySceneData()"><i class="fa fa-search"></i> 查询</button>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <table id="sceneTable11" class="bg-info" style="z-index: 1"></table>
                    </div>
                    <table class="table table-striped table-bordered table-hover dataTables-example" style="table-layout:fixed;word-break:break-all;" id="aable1">
                        <tr>
                            <th colspan="7" align="center" id="setTitle">设置目标：</th>
                        </tr>
                        <tr>
                            <th width="30px">类型</th>
                            <th width="20px">行标</th>
                            <th width="200px">指标</th>
                            <th>基准值</th>
                            <th>挑战值</th>
                            <th>指标项分数</th>
                            <th width="30px">单项汇总</th>
                        </tr>
                        <tr>
                            <th rowspan="2" align="center">告警</th>
                            <th>1</th>
                            <td id="a10">告警小区占比</td>
                            <td>
                                <div class="input-group"><input id="a11" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a12" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a13" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                            <td rowspan="2" id="aotal1"></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td id="a20">告警小区业务量占比</td>
                            <td>
                                <div class="input-group"><input id="a21" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a22" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a23" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>

                        <tr>
                            <th rowspan="6" align="center">容量</th>
                            <th>3</th>
                            <td id="a30">下行PRB利用率</td>
                            <td>
                                <div class="input-group"><input id="a31" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a32" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a33" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                            <td rowspan="6" id="aotal2"></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td id="a40">上行PRB利用率</td>
                            <td>
                                <div class="input-group"><input id="a41" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a42" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a43" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td id="a50">下行每PRB平均吞吐量</td>
                            <td>
                                <div class="input-group"><input id="a51" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a52" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a53" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td id="a60">上行每PRB平均吞吐量</td>
                            <td>
                                <div class="input-group"><input id="a61" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a62" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a63" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td id="a70">下行每PRB用户数</td>
                            <td>
                                <div class="input-group"><input id="a71" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a72" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a73" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td id="a80">上行每PRB用户数</td>
                            <td>
                                <div class="input-group"><input id="a81" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a82" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a83" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th rowspan="4" align="center">质量</th>
                            <th>9</th>
                            <td id="a90">VoLTE建立时延（ms）</td>
                            <td>
                                <div class="input-group"><input id="a91" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a92" type="text" class="form-control"></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a93" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                            <td rowspan="4" id="aotal3"></td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td id="a100">上行PDCP丢包率</td>
                            <td>
                                <div class="input-group"><input id="a101" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a102" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a103" name="kpiScore" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td id="a110">下行PDCP丢包率</td>
                            <td>
                                <div class="input-group"><input id="a111" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a112" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a113" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td id="a120">VOLTE MOS值3.0以上占比</td>
                            <td>
                                <div class="input-group"><input id="a121" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a122" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a123" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>

                        <tr>
                            <th rowspan="8" align="center">KPI</th>
                            <th>13</th>
                            <td id="a130">MR覆盖率</td>
                            <td>
                                <div class="input-group"><input id="a131" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a132" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a133" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                            <td rowspan="8" id="aotal4"></td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td id="a140">寻呼拥塞率</td>
                            <td>
                                <div class="input-group"><input id="a141" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a142" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a143" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td id="a150">LTE无线接通率</td>
                            <td>
                                <div class="input-group"><input id="a151" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a152" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a153" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>16</th>
                            <td id="a160">VoLTE无线接通率</td>
                            <td>
                                <div class="input-group"><input id="a161" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a162" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a163" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>17</th>
                            <td id="a170">LTE切换成功率</td>
                            <td>
                                <div class="input-group"><input id="a171" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a172" type="text"  class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a173" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>18</th>
                            <td id="a180">SRVCC切换成功率</td>
                            <td>
                                <div class="input-group"><input id="a181" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a182" type="text"  class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a183" name="kpiScore" type="text"  class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>19</th>
                            <td id="a190">LTE无线掉线率</td>
                            <td>
                                <div class="input-group"><input id="a191" type="text"  class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a192" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a193" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <th>20</th>
                            <td id="a200">VoLTE掉线率</td>
                            <td>
                                <div class="input-group"><input id="a201" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a202" type="text" class="form-control"><span class="input-group-addon">%</span></div>
                            </td>
                            <td>
                                <div class="input-group"><input id="a203" name="kpiScore" type="text" class="form-control"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                总计
                            </td>
                            <td colspan="6" id='kpiSumTag' style="text-align:right"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div style="text-align: center;margin-top: 0px;padding: 3px 20px;">
                <span class="input-group-text">应用到查询的所有场景<input type="checkbox"  id="applyAllScene"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-primary" onclick="header.insertAlarmThreshold()">确定</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-warning" onclick="header.initThresholdValue()" style="float: right">启用默认</button>
            </div>
        </div>
    </div>
</div>

<div id="orderSetTable" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document" style="width: 620px">
        <div class="modal-content">
            <div class="modal-header badge-orange modleStyle">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span class="fa fa-gears" aria-hidden="true"></span> 设置派单质检门限值</h4>
            </div>
            <div class="modal-body" style="padding: 5px">
                <div class='panel panel-default'>
                    <div class='panel-body'>
                        <table class='table  table-bordered table-hover' style="margin: auto" id="orderTable">
                            <tr>
                                <th colspan="7" style="background-color: #f0f0f0;">满足派单条件设置（候选工单）</th>
                            </tr>
                            <tr>
                                <th colspan="4" style="background-color: #f0f0f0;">评估时间粒度</th>
                                <th colspan="3" style="background-color: #f0f0f0;">15分钟</th>
                            </tr>
                            <tr>
                                <td colspan="4" style="background-color: rgba(214,207,13,0.71)">当天评估预警达到黄色及以上预警</td>
                                <td colspan="3">
                                    <div class="input-group"><input id="o1" type="number" class="form-control"><span class="input-group-addon">次</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" style="background-color: rgba(214,115,12,0.71)">当天评估预警达到橙色及以上预警</td>
                                <td colspan="3" >
                                    <div class="input-group"><input id="o2" type="number" class="form-control"><span class="input-group-addon">次</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" style="background-color: rgba(214,13,10,0.71)">当天评估预警达到红色及以上预警</td>
                                <td colspan="3">
                                    <div class="input-group">
                                        <input id="o3" type="number"  min="1" class="form-control"><span class="input-group-addon">次</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="7">候选工单系数计算(优先级排序):</th>
                            </tr>
                            <tr>
                                <td>工单系数=</td>
                                <td>
                                    <div class="col-sm-12 input-group">
                                        <input id="o4" type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td> *红色预警+</td>
                                <td> <div class="col-sm-12 input-group">
                                    <input id="o5" type="number" name="" class="form-control">
                                </div></td>
                                <td>*橙色预警+</td>
                                <td><div class="col-sm-12 input-group">
                                    <input id="o6" type="number" name="" class="form-control">
                                </div></td>
                                <td>*黄色预警</td>
                            </tr>
                            <tr>
                                <td colspan="3">地市每天派单量设置(控制派单数):</td>
                                <td><div class="col-sm-12 input-group">
                                    <input id="o7" type="number" name="" class="form-control">
                                </div></td>
                                <td colspan="3"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="text-align: center;">
                <button type="button" class="btn btn-primary" onclick="header.insertOrderThreshold()">确定</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>

<!--评估预警门限设置-->
<div id="alertThresholdSet" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document" style="width: 55%">
        <div class="modal-content">
            <div class="modal-header badge-orange modleStyle">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span class="fa fa-gears" aria-hidden="true"></span> 评估预警门限</h4>
            </div>
            <div class="modal-body" style="padding: 5px">
                <div class='panel panel-default'>
                    <div class='panel-body'>
                        <button type="button" class="btn btn-default btn-lg" onclick="$('#addAlertThreshold').modal('show');">
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> 新增预警门限
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--新增评估预警门限-->
<div id="addAlertThreshold" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document" style="width: 760px">
        <div class="modal-content">
            <div class="modal-header badge-green modleStyle">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span class="fa fa-gears" aria-hidden="true"></span> 新增评估预警门限</h4>
            </div>
            <div class="modal-body" style="padding: 5px">
                <div class='panel panel-default'>
                    <div class='panel-body'>
                        <table class='table table-bordered table-hover' style="margin: auto;">
                            <tr>
                                <th width="50px" style="background-color: #f0f0f0;">类型</th>
                                <th width="50px" style="background-color: #f0f0f0;">行标</th>
                                <th style="background-color: #f0f0f0;">指标</th>
                                <th width="110px" style="background-color: #f0f0f0;">基准值</th>
                                <th width="110px" style="background-color: #f0f0f0;">挑战值</th>
                                <th width="110px" style="background-color: #f0f0f0;">指标项分数</th>
                                <th width="110px" style="background-color: #f0f0f0;">单项汇总</th>
                            </tr>
                            <tr>
                                <td rowspan="2">告警</td>
                                <td>1</td>
                                <td>告警小区占比</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td rowspan="2"></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>告警小区业务量占比</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="6">容量</td>
                                <td>3</td>
                                <td>下行PRB平均利用率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td rowspan="6"></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>上行PRB平均利用率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>5</td>
                                <td>下行每PRB平均吞吐量</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>6</td>
                                <td>上行每PRB平均吞吐量</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>7</td>
                                <td>下行每PRB用户数</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>8</td>
                                <td>上行每PRB用户数</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td rowspan="4">质量</td>
                                <td>9</td>
                                <td>VOLTE建立时延</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td rowspan="4"></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>上行PDCP丢包率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>11</td>
                                <td>下行PDCP丢包率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>12</td>
                                <td>VOLTE MOS值3.0以上占比</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td rowspan="8">KPI</td>
                                <td>13</td>
                                <td>MR覆盖率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                                <td rowspan="8"></td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>寻呼拥塞率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>LTE无线接通率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>VOLTE无线接通率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>LTE切换成功率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>SRVCC切换成功率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>LTE无线掉线率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>VoLTE掉线率</td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                        <span class="input-group-addon">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="col-sm-12 input-group input-group-sm" style="float: left !important;">
                                        <input type="number" name="" class="form-control">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="modal-footer" style="text-align: center;">
                    <button type="button" class="btn btn-primary" onclick="header.insertAlertThresholdSet()">确定</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!--保障劣化小区门限配置-->
<div id="festivalGrtThresholdSet" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document" style="width: 55%">
        <div class="modal-content">
            <div class="modal-header badge-orange modleStyle">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"><span class="fa fa-gears" aria-hidden="true"></span> 保障劣化小区门限配置</h4>
            </div>
            <div class="modal-body" style="padding: 5px">
                <div class='panel panel-default'>
                    <div class='panel-body'>
                        <form class="form-horizontal" role="form">
                            <div class="form-group">
                                <label class="col-sm-2 control-label settings-text">节日保障时间周期: </label>
                                <div class="col-sm-2 input-group" style="float: left !important;">
                                    <select class="form-control" name="timeRange">
                                        <option value="15">15</option>
                                        <option value="30">30</option>
                                        <option value="60">60</option>
                                        <option value="天">天</option>
                                    </select>
                                </div>
                            </div>
                            <table class='table table-bordered table-hover' style="margin: auto;">
                                <tr>
                                    <th style="background-color: #f0f0f0;">高负荷小区判断:</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">1. 上行PRB利用率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhPrbUpLyl1" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且下行PRB利用率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhPrbDownLyl1" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且RRC最大连接数&gt;=</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhConnmax1" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">2. 上行PRB利用率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhPrbUpLyl2" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">或下行PRB利用率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhPrbDownLyl2" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且RRC最大连接数&gt;=</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="gfhConnmax2" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <table class='table  table-bordered table-hover' style="margin: auto;margin-top: 50px">
                                <tr>
                                    <th style="background-color: #f0f0f0;">劣化小区判断:</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">1. 无线接通率&lt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqWxjtl1" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且RRC最大连接数&gt;</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqConnmax1" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">2. 无线掉线率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqWxdxl2" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且rrc链接最大数&gt;</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqConnmax2" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">3. volte接通率&lt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqVolteJtl3" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且volte话务量&gt;</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqVolteErl3" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">4. volte掉话率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqVolteDhx4" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且volte话务量&gt;</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqVolteErl4" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-group">
                                            <span class="col-sm-2 control-label">5. erab掉线率&gt;</span>
                                            <div class="col-sm-2 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqErabDxl5" class="form-control">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                            <span class="col-sm-2 control-label settings-text">且volte话务量&gt;</span>
                                            <div class="col-sm-1 input-group input-group-sm" style="float: left !important;">
                                                <input type="number" name="lhxqVolteErl5" class="form-control">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="text-align: center;">
                <button type="button" class="btn btn-primary" onclick="header.insertFestivalGrtThreshold()">确定</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>


<script>
    var removeUserInfo = function () {
        sessionStorage.removeItem("account");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("city");
        sessionStorage.removeItem("jurisdiction");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("phone");
    }
    $(function () {
        var element = document.getElementById("userName");
        element.innerHTML = '<i class="fa fa-user fa-fw"></i>' + sessionStorage.getItem("account") + ' <span class="caret"></span>';
        $('#skin-switcher').attr("href", "css/themes/graphite.css");
        $.cookie('skin_color', "graphite");
    });
    $('#aable1 input').each(function(index){
        $(this).keyup(function(){
            this.value=this.value.replace(/[^\d.]/g,'');
        });
    });
    $("input[name='kpiScore']").each(function(index){
        $(this).keyup(function(){
            let kpiSum = 0;
            $("input[name='kpiScore']").each(function(index){
                if(this.value!=''){
                    kpiSum +=parseInt(this.value);
                }
            });
            $('#kpiSumTag').html(kpiSum);
            let groupEleNum = [2,6,4,8]
            let currIndex = 1;
            for(let i = 0; i < groupEleNum.length ; i++){
                let count = 0;
                for(let m = 0 ; m < groupEleNum[i] ; m++){
                    if($('#a'+currIndex+'3').val() != ''){
                        count +=parseInt($('#a'+currIndex+'3').val());
                    }
                    currIndex++;
                }
                if(i == 0){
                    $('#aotal1').html(count);
                }else{
                    $('#aotal'+(i+1)).html(count);
                }
            }
        });
    });
    var jurisdiction = sessionStorage.getItem("jurisdiction");
    var userCity = sessionStorage.getItem("city");
    header.pageColum1 = header.getPageColum("periodicityScene");
    header.initCityBarData();
    header.queryScenceBarData();
    header.modeChange();
    header.tableSceneData();
</script>
<style type="text/css">
    .ta_c {
        text-align: center;
        margin-top: 100px;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    .Rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
    }

    .menuButtonStyle {
        border-radius: 15px 15px 15px 15px;
        border: 1px solid #ffe484;
        margin-top: 10%
    }
</style>
</body>
</html>

<!-- PAGE -->
<section id="page">
    <!-- SIDEBAR -->
    <!DOCTYPE html>
<html >
<head>
    <script type="text/javascript" src="js/leftMenu.js"></script>
</head>
<body>
<div id="sidebar" class="sidebar">
    <div class="sidebar-menu nav-collapse" id="menuDiv">
        <div class="divide-20"></div>
        <!-- SEARCH BAR -->
        <div id="search-bar">
            <input class="search" type="text" placeholder="Search"><i class="fa fa-search search-icon"></i>
        </div>
        <!-- /SIDEBAR MENU -->
    </div>
</div>

<script>

    leftMenu.login();

    function getMenuHtml(menu,sub,idArr){
        var retHtml = "";
        if (sub == ""){
             retHtml = "<ul>";
        } else {
             retHtml = "<ul class=\""+sub+"\">";
        }

        for (var i = 0; i < menu.length; i++) {
            var tempMenu = menu[i];

            // 处理id数组
            var tempArr;
            if (idArr[0] != null && idArr[0].constructor === Array){
                tempArr = [];
                idArr.push(tempArr)
            } else {
                tempArr = idArr;
            }
            if (tempMenu.code != null){
                tempArr.unshift(tempMenu.code);
            }

            var selected = "arrow"
            if (tempMenu.name == "首页"){
                selected = "selected"
            }

            var hasChild = false;
            var classType = "";
            var url = "";
            var tempSub = "";
            url = tempMenu.url == null ? "javascript:;":tempMenu.url;
            if (tempMenu.children.length > 0){
                hasChild = true;
                tempSub =  sub + (sub == "" ? "sub":"-sub")
                classType = "class=\"has-"+tempSub+"\""
            }
            retHtml += "<li id=\""+tempMenu.code+"\" "+classType+">\n" +
                "                <a href=\""+url+"\">\n" +
                "                    <i class=\""+tempMenu.webIcon+"\"></i> <span class=\"menu-text\">"+tempMenu.name+"</span>\n" +
                "                    <span class=\""+selected+"\"></span>\n" +
                "                </a>\n"

            if (hasChild){
                retHtml += getMenuHtml(tempMenu.children,tempSub,tempArr);
            }
            retHtml += "            </li>"
        }
        retHtml += "</ul>"

        return retHtml;
    }

    // 生成菜单
    var menu = sessionStorage.getItem("menu");
    var idArr = [["0","0"]];
    var menuHtml = getMenuHtml(JSON.parse(menu),"",idArr);
    document.getElementById("menuDiv").innerHTML = document.getElementById("menuDiv").innerHTML + menuHtml
    // 重新定义父子级id关系
    var finalIdArr = [];
    for (var i = 1; i < idArr.length ; i++) {
        var temArr = idArr[i];
        if (temArr.length > 1){
            for (var j = 0; j < temArr.length-1; j++) {
                finalIdArr.push([temArr[j],temArr[temArr.length-1]])
            }
        }
    }
    leftMenu.activeIdArray = finalIdArr

    $(function () {
        $('#skin-switcher').attr("href", "css/themes/graphite.css");
        $.cookie('skin_color', "graphite");
    });
</script>

</body>
</html>

    <!-- /SIDEBAR -->
    <div id="main-content">
        <div class="box-body" id="loading-control" class="loading-div" style="position: absolute; z-index: 1; top: 0px;">
            <div class="container">
                <div class="row">
                    <div id="content" class="col-lg-12">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="page-header">
                                            <ul class="breadcrumb">
                                                <li>
                                                    <a href="index.jsp">
                                                        <button class="btn btn-light-grey"><i class="fa fa-home"></i>首页
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>评估预警</li>
                                                <li>评估预警地图</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="box border blue">
                                    <div class="box-title">
                                        <h4><i class="fa fa-globe"></i> <span
                                                class="hidden-inline-mobile">评估预警可视化展示</span></h4>
                                    </div>
                                    <div class="tabbable header-tabs">
                                        <ul class="nav nav-tabs">
                                            <li class="" id="li2"><a href="#box_tab2" data-toggle="tab"><i
                                                    class="fa fa-file-text-o"></i> <span class="hidden-inline-mobile">评估预警详情</span></a>
                                            </li>
                                            <li class="active" id="li1"><a href="#box_tab1" data-toggle="tab"><i
                                                    class="fa fa-globe"></i> <span
                                                    class="hidden-inline-mobile">评估预警可视化</span></a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="box_tab1">
                                                <div class="row col-sm-12" STYLE="width: 101%">
                                                    <div class="col-sm-6"></div>
                                                    <div class="col-sm-4">
                                                        <h5 class="modal-title"><span
                                                                class="label label-info arrow-in arrow-in-right">场景名称:</span>
                                                        </h5>
                                                        <div class="input-group" style="width: 100% ;z-index: 1">
                                                            <input id="keyWords" type="text" class="form-control"
                                                                   placeholder="请输入关键字">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-1">
                                                        <button class="btn btn-info" style="margin-top: 20px"
                                                                onclick="evaluateWarningMap.openScenceInfo()"><i
                                                                class="fa fa-search"></i> 查询
                                                        </button>
                                                    </div>
                                                    <div class="col-sm-1">
                                                        <button class="btn btn-info" style="margin-top: 20px"
                                                                onclick="evaluateWarningMap.refreshBar()"><i
                                                                class="fa fa-refresh"></i> 重置
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="row col-sm-12" STYLE="margin-top: 6px;width: 101%">
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-warning arrow-in arrow-in-right">时间:</span>
                                                        </h5>
                                                        <div class="input-group date" id='taskManageStartTime'>
                                                            <input type="text" class="form-control" id="startTimeManage"
                                                                   style="z-index: 1">
                                                            <span class="input-group-addon"><i
                                                                    class="glyphicon glyphicon-calendar"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-warning arrow-in arrow-in-right">时间粒度:</span>
                                                        </h5>
                                                        <select id="timeType" class="selectpicker"
                                                                data-style="btn-info">
                                                            <option selected="selected"
                                                                    data-content="<span class='label label-danger'>15分钟</span>"
                                                                    value="0">15分钟
                                                            </option>
                                                            <option data-content="<span class='label label-success'>30分钟</span>"
                                                                    value="1">30分钟
                                                            </option>
                                                            <option data-content="<span class='label label-warning'>一小时</span>"
                                                                    value="2">一小时
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-warning arrow-in arrow-in-right">时间段:</span>
                                                        </h5>
                                                        <select id="timeList" data-actions-box="true"
                                                                class="selectpicker" data-live-search="true"
                                                                data-style="btn-info">
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-info arrow-in arrow-in-right">场景类型（仅地图）:</span>
                                                        </h5>
                                                        <select id="scenceType" data-actions-box="true"
                                                                class="selectpicker" multiple data-live-search="true"
                                                                data-style="btn-danger">
                                                            <option value="全部场景" data-icon="glyphicon glyphicon-home"
                                                                    selected="selected" id="defaultScence">全部场景
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-info arrow-in arrow-in-right">地&nbsp&nbsp市:</span>
                                                        </h5>
                                                        <select id="cityList" data-actions-box="true"
                                                                class="selectpicker" data-live-search="true"
                                                                data-style="btn-success">
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h5 class="modal-title"><span
                                                                class="label label-info arrow-in arrow-in-right">区&nbsp&nbsp县:</span>
                                                        </h5>
                                                        <select id="countyList" data-actions-box="true"
                                                                class="selectpicker" data-live-search="true"
                                                                data-style="btn-success">
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row col-sm-12" STYLE="height: 10px;width: 101%">
                                                    <div class="separator"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <!-- BOX -->
                                                        <div class="box border inverse">
                                                            <div class="box-title">
                                                                <img src="img/LTE1.png" style="margin-left: 50px">LTE
                                                                <img src="img/GSM1.png" style="margin-left: 20px">GSM
                                                            </div>
                                                            <div class="box-body">
                                                                <div id="container"
                                                                     style="height: 450px;margin: 0px;padding: 0px"></div>
                                                            </div>
                                                            <table id="tb_departments" class="bg-info"
                                                                   style="z-index: 1"></table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="box_tab2">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="box border inverse">
                                                            <div class="box-title" style="height: 15px">
                                                                <h4></i>Baidu Map</h4>
                                                                <div class="tools">
                                                                    <a href="#"
                                                                       onclick='evaluateWarningDetail.isShowBody("toolMapId","mapId")'>
                                                                        <i class="fa fa-chevron-down" id="toolMapId">
                                                                            展开</i>
                                                                    </a>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="box-body" style="display: block" id="mapId">
                                                                <div id="containerDetail"
                                                                     style="height: 550px;margin: 0px;padding: 0px"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="box border purple" id="messenger">
                                                            <div class="box-title" style="height: 10px">
                                                                <i class="fa fa-bell"></i>报表详情
                                                                <div class="tools">
                                                                    <a href="#"
                                                                       onclick='evaluateWarningDetail.isShowBody("toolId","bodyId")'>
                                                                        <i class="fa fa-chevron-down" id="toolId">
                                                                            展开</i>
                                                                    </a>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="box-body" style="display: block" id="bodyId">
                                                                <table id="warningTable" class="bg-info"
                                                                       style="z-index: 1"></table>
                                                            </div>
                                                            <div id="themes" class="toolbox bottom center clearfix">
                                                                <div class="pull-left">
                                                                    <span class="title">详情:</span>
                                                                    <span class="btn-group" data-toggle="buttons">
                                                                        <label class="btn btn-default" id="A1"
                                                                               onclick='evaluateWarningDetail.clickFun("A1")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="告警">告警</label>
												                         <label class="btn btn-default" id="A2"
                                                                                onclick='evaluateWarningDetail.clickFun("A2")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="容量">容量</label>
                                                                        <label class="btn btn-default" id="A3"
                                                                               onclick='evaluateWarningDetail.clickFun("A3")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="质量">质量</label>
                                                                        <label class="btn btn-default" id="A10"
                                                                               onclick='evaluateWarningDetail.clickFun("A10")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="干扰">干扰</label>
												                         <label class="btn btn-default" id="A4"
                                                                                onclick='evaluateWarningDetail.clickFun("A4")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="KPI">KPI</label>
												                         <label class="btn btn-default" id="A5"
                                                                                onclick='evaluateWarningDetail.clickFun("A5")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="投诉">投诉</label>
                                                                        <label class="btn btn-default" id="A6"
                                                                               onclick='evaluateWarningDetail.clickFun("A6")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="竞对">竞对</label>
												                         <label class="btn btn-default" id="A7"
                                                                                onclick='evaluateWarningDetail.clickFun("A7")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="路测黑点">路测黑点</label>
                                                                        </span>
                                                                </div>
                                                                <br> <br>
                                                                <div class="pull-left">
                                                                    <span class="title">综合:</span>
                                                                    <span class="btn-group" data-toggle="buttons">
                                                                        <label class="btn btn-default" id="B1"
                                                                               onclick='evaluateWarningDetail.clickFun("B1")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="告警">告警</label>
												                         <label class="btn btn-default" id="B2"
                                                                                onclick='evaluateWarningDetail.clickFun("B2")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="容量">容量</label>
                                                                        <label class="btn btn-default" id="B3"
                                                                               onclick='evaluateWarningDetail.clickFun("B3")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="质量">质量</label>
                                                                        <label class="btn btn-default" id="B10"
                                                                               onclick='evaluateWarningDetail.clickFun("B10")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="干扰">干扰</label>
												                         <label class="btn btn-default" id="B4"
                                                                                onclick='evaluateWarningDetail.clickFun("B4")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="KPI">KPI</label>
												                         <label class="btn btn-default" id="B5"
                                                                                onclick='evaluateWarningDetail.clickFun("B5")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="投诉">投诉</label>
                                                                        <label class="btn btn-default" id="B6"
                                                                               onclick='evaluateWarningDetail.clickFun("B6")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="竞对">竞对</label>
												                         <label class="btn btn-default" id="B7"
                                                                                onclick='evaluateWarningDetail.clickFun("B7")'><span
                                                                                 class="tick"></span><input type="radio"
                                                                                                            name="theme"
                                                                                                            value="路测黑点">路测黑点</label>
                                                                        <label class="btn btn-default" id="B8"
                                                                               onclick='evaluateWarningDetail.clickFun("B8")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="价值监控">价值监控</label>
                                                                        <label class="btn btn-default active" id="B9"
                                                                               onclick='evaluateWarningDetail.clickFun("B9")'><span
                                                                                class="tick"></span><input type="radio"
                                                                                                           name="theme"
                                                                                                           value="场景综合打分">场景综合打分</label>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /BOX -->
                            </div>
                        </div>
                        <div class="footer-tools">
                            <span class="go-top" style="background-color: mediumslateblue"><i
                                    class="fa fa-chevron-up"></i> 返回顶部</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    var path = "/emphaseScence";
    $(function () {
        leftMenu.menuShow("evaluateWarningMapId");
        if (evaluateWarningMap.pageColum == "") {
            evaluateWarningMap.pageColum = commonDropdownData.getPageColum("evaluateWarningMap");
        }
        commonDropdownData.initTimePart();
        commonDropdownData.createTimePart();
        commonDropdownData.initStartDateBar();
        var map = new BMap.Map("container", {enableMapClick: false});
        evaluateWarningMap.map = map;
        var point = new BMap.Point(102.804, 24.915);  // 创建点坐标
        map.centerAndZoom(point, 10);                 // 初始化地图，设置中心点坐标和地图级别

        map.setCurrentCity("昆明");// 设置地图显示的城市 此项是必须设置的
        map.centerAndZoom(new BMap.Point(102.764108, 25.079256), 12);
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件

        map.addControl(top_left_control);      // 测距离的
        map.addControl(top_left_navigation);   // 左导航默认
        map.addEventListener("click", function (e) {
            evaluateWarningMap.clickMenuStatus = false;
            evaluateWarningMap.currentClickPoint = new BMap.Point(e.point.lng, e.point.lat)
        });
        map.addEventListener("rightclick", function (e) {
            evaluateWarningMap.clickMenuStatus = false;
        });
        evaluateWarningMap.init();
        evaluateWarningMap.tableInit();
        evaluateWarningMap.myDis = new BMapLib.DistanceTool(map);

        evaluateWarningMap.openDis = function () {
            evaluateWarningMap.myDis.open();
        }
    });
    $(document).ready(function () {
        $(".layerFlip1").click(function () {
            $(".panelTest1").slideToggle("fast");
        });
    });
    jQuery(document).ready(function () {
        App.setPage("evaluateWarningMap");  //Set current page
        App.init(); //Initialise plugins and elements
    });
    evaluateWarningDetail.getPageColum();
    evaluateWarningDetail.initMap();
</script>
<!-- /JAVASCRIPTS -->
</body>
</html>
