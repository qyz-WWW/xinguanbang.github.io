Array.prototype.contains = function(needle) {
            for (i in this) {
                if (this[i].indexOf(needle) > 0)
                    return i;
            }
            return -1;
        }
        var device_type = navigator.userAgent; //获取userAgent信息 
       // document.write(device_type); //打印到页面 
        var md = new MobileDetect(device_type); //初始化mobile-detect 
        var os = md.os(); //获取系统 
        var model = "";
        if (os == "iOS") { //ios系统的处理 
            os = md.os() + md.version("iPhone");
            model = md.mobile();
        } else if (os == "AndroidOS") { //Android系统的处理 
            os = md.os() + md.version("Android");
            var sss = device_type.split(";");
            var i = sss.contains("Build/");
            if (i > -1) {
                model = sss[i].substring(0, sss[i].indexOf("Build/"));
            }
        }
        //  null
        var shebeiName = model+"  "+os
        //if(model == null){ 
            //model = "电脑/iPad"
            //}
        console.log("model: "+model)
        console.log("os: "+os)
        
        if(shebeiName == '  null'){
            shebeiName='电脑（非移动端）'
        }else{
            shebeiName=shebeiName
        }

//console.log(shebeiName)
var shebei = document.getElementById("shebei")
shebei.innerText=shebeiName