function f1(i){
    var fwq1 = document.getElementById("fwq1").innerText
    console.log("typeof fwq1: "+typeof fwq1)
    console.log(fwq1)
    if (fwq1 == '不在服务区') {
        window.alert("抱歉！您所在的地区或位置尚未提供服务，请尝试到达合法服务区域。")
    } else {
        //window.alert(fwq1)
        var a = "../homeworks/html/"
        switch (i) {
            case 1:
                window.location.replace("https://sourl.cn/Mwckxm");
                break;
            case 2:
                window.location.replace("../homeworks/html/mkszyjbyl/mkszyjbyl.html");
            break;
            default:
                alert('位置错误！');
        }
        
    }
    
}