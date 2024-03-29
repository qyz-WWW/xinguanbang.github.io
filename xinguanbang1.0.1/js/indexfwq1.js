

// 创建一个函数，主要功能是在调用html5的geolocation()前，先判断当前浏览器是否支持html5，（PC绝大部分浏览器不支持或者拒绝html5定位）
function getLocation() {
    //document.getElementsByClassName("scontant")[0].style.display="none"
    var options = {
        enableHighAccuracy: true,
        maximumAge: 1000
    };
    //alert('获取位置信息开始--------->');
    if (navigator.geolocation) {
        // 走到这里说明，浏览器支持geolocation，参数里有两个回调函数，一个是定位成功后的处理操作，一个是定位失败后的处理操作，另外一个参数没有研究过
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        // 否则浏览器不支持geolocation
        alert('您的浏览器不支持地理位置定位！');
    }
}

// 成功时的回调函数
// 第一步获取定位成功返回的经纬度数据，然后结合百度那边提供的接口进行具体位置的转换，最后还有一个数据提交的方法，要跟自己的业务操作了
function onSuccess(position) {
// 经度
var longitude = position.coords.longitude;
// 纬度
var latitude = position.coords.latitude;










// 百度地图API功能
//GPS坐标
var x = longitude;//gps
var y = latitude;//gps
var ggPoint = new BMapGL.Point(x,y);
//设置服务区坐标
//李三学生公寓gps1: 110.72967 , 32.65048 bds1: 110.74146 , 32.65442
var x1 = 110.74146;//bds
var y1 = 32.65442; //bds
var ggPoint1 = new BMapGL.Point(x1,y1);//bds
var myP1 = new BMap.Point(110.72967 , 32.65048);//gps



//当前位置
var myP2 = new BMap.Point(x , y);//gps

//距离计算
//var l1 = (map.getDistance(myP1, myP2)).toFixed(2)
//window.alert('两点之间的距离：' + (map.getDistance(myP1, myP2)).toFixed(2) + '米')

var map = new BMap.Map("allmap");
    var point = new BMap.Point(longitude, latitude);
    var gc = new BMap.Geocoder();
    function ft(){
            gc.getLocation(
            point, function (rs) {
            
            var addComp = rs.addressComponents;
            //alert("您的IP地址为: "+addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber);
            //alert("您的IP地址为: "+addComp.province + "" + addComp.city + "" + addComp.district+ "" + addComp.street + "" + addComp.streetNumber+longitude+","+latitude);
            
            //距离计算
            var l1 = (map.getDistance(myP1, myP2)).toFixed(2)
            //距离判断
            //李三服务区
            //if(l1 <= 50){
                /* 
            if(l1 <= 800){
                //alert("您的IP地址为: "+addComp.province + "" + addComp.city + "" + addComp.district+ "" + addComp.street + "" + addComp.streetNumber+longitude+","+latitude+"  李三学生公寓服务区");
                //alert("当前服务区：李三学生公寓服务区");
                document.getElementsByClassName("scontant")[0].style.display="block"
                document.getElementById("fwq1").innerHTML='HUAT总服务区'
                document.getElementById("code1").innerHTML='XGB'+longitude+"||"+latitude
                console.log("BDSBDSBDSBDSBDSBDSBDSBDS")
                console.log("BDSBDSBDSBDSBDSBDSBDSBDS")
                document.getElementById("iconfwq").style.backgroundImage='url(../images/index/xinhaota-active.webp)'
            }else{
                document.getElementById("fwq1").innerHTML='不在服务区'
                alert("抱歉！您所在的地区或位置尚未提供服务，请尝试到达合法服务区域。")
            }
            */
           aa=l1
        //aa=l1+"@"+"sss"
            //return aa
            
            
        }
        
        
        );
    }
    ft()
    








//var ggPoint2 = {lng: 112.95166755170469, lat: 33.048666681614144};

//地图初始化
var bm = new BMapGL.Map("allmap");
bm.centerAndZoom(new BMapGL.Point(x, y), 19);  // 初始化地图,设置中心点坐标和地图级别
bm.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
bm.setHeading(20); //设置地图旋转角度
bm.setTilt(50);//设置地图的倾斜角度
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
bm.addControl(scaleCtrl);

 










//bm.centerAndZoom(ggPoint, 15);
//bm.addControl(new BMapGL.ZoomControl());
    /**/
//添加gps marker和label
//var markergg = new BMapGL.Marker(ggPoint1);
var markergg = new BMapGL.Marker(ggPoint1);
bm.addOverlay(markergg); //添加GPS marker
var labelgg = new BMapGL.Label("李三服务区",{offset:new BMapGL.Size(10, -10)});
markergg.setLabel(labelgg); //添加GPS label

//坐标转换完之后的回调函数
translateCallback = function (data){
    /*console.log("参数接受情况")
    console.log(ft())
    var l11 = ft().split("@")
    console.log(l11)*/
    l1 =aa




  if(data.status === 0) {
    var marker = new BMapGL.Marker(data.points[0]);
    console.log("|||||||||||||||||||||||||||||||||||||||");
    console.log("data.points[0]");
    console.log(data.points[0]);
    console.log("data.points[0].lng");
    console.log(data.points[0].lng);
    console.log("data.points[0].lat");
    console.log(data.points[0].lat);
    console.log("data.points");
    console.log(data.points);
    bm.addOverlay(marker);
    //var label = new BMapGL.Label("转换后的百度坐标（正确）",{offset:new BMapGL.Size(10, -10)});
    //var label = new BMapGL.Label("我的IP地址",{offset:new BMapGL.Size(10, -10)});
    //var label = new BMapGL.Label(shebeiName+"||"+longitude+","+latitude,{offset:new BMapGL.Size(10, -10)});
    var label = new BMapGL.Label(shebeiName,{offset:new BMapGL.Size(10, -10)});
    marker.setLabel(label); //添加百度label
    bm.setCenter(data.points[0]);








    /*
    setTimeout(function(){
        console.log("Gx|"+x+" Gy|"+y+" lng|"+data.points[0].lng+" lat|"+data.points[0].lat);
    },1000)
*/

// var hanshu=aa1511().split("@");
// alert(hanshu[0]+','+hanshu[1]);

    function B(){
        
        if(l1 <= 800){
            //alert("您的IP地址为: "+addComp.province + "" + addComp.city + "" + addComp.district+ "" + addComp.street + "" + addComp.streetNumber+longitude+","+latitude+"  李三学生公寓服务区");
            //alert("当前服务区：李三学生公寓服务区");
            document.getElementsByClassName("scontant")[0].style.display="block"
            document.getElementById("fwq1").innerHTML='HUAT总服务区'
            document.getElementById("code1").innerHTML=longitude+"i"+latitude+"i"+data.points[0].lng+"i"+data.points[0].lat
            
            document.getElementById("iconfwq").style.backgroundImage='url(../images/index/xinhaota-active.webp)'
        }else{
            document.getElementById("fwq1").innerHTML='不在服务区'
            document.getElementById("code1").innerHTML=longitude+"i"+latitude+"i"+data.points[0].lng+"i"+data.points[0].lat
            alert("抱歉！您所在的地区或位置尚未提供服务，请尝试到达合法服务区域。"+"l1:"+l1+typeof l1)
        }
    }
    B()

    









    




  }
}

setTimeout(function(){
    var convertor = new BMapGL.Convertor();
    var pointArr = [];
    pointArr.push(ggPoint);
    convertor.translate(pointArr, COORDINATES_WGS84, COORDINATES_BD09, translateCallback)
}, 1000);

/**
 * 坐标常量说明：
 * COORDINATES_WGS84 = 1, WGS84坐标
 * COORDINATES_WGS84_MC = 2, WGS84的平面墨卡托坐标
 * COORDINATES_GCJ02 = 3，GCJ02坐标
 * COORDINATES_GCJ02_MC = 4, GCJ02的平面墨卡托坐标
 * COORDINATES_BD09 = 5, 百度bd09经纬度坐标
 * COORDINATES_BD09_MC = 6，百度bd09墨卡托坐标
 * COORDINATES_MAPBAR = 7，mapbar地图坐标
 * COORDINATES_51 = 8，51地图坐标
*/
// 这里后面可以写你的后续操作了
//handleData(longitude, latitude);


}

// 失败时的回调函数
// 这里是错误提示信息
function onError(error) {
switch (error.code) {
    case 1:
        alert("位置服务被拒绝！");
        break;
    case 2:
        alert("暂时获取不到位置信息！");
        break;
    case 3:
        alert("获取信息超时！");
        break;
    case 4:
        alert("未知错误！");
        break;
}
// 这里后面可以写你的后续操作了，下面的经纬度是天安门的具体位置
// 经度



/*
var longitude = 39.9151;
// 纬度
var latitude = 116.4041;
handleData(longitude, latitude);*/



}

// 页面载入时请求获取当前地理位置
window.onload = function () {
// html5获取地理位置
getLocation();
};