// 显示动态实时课表情况
function f2(){
    // 获取时间
    var time = new Date()
    var year = time.getFullYear()
    var month = time.getMonth()+1
    if(month < 10) month = '0' + month
    var day = time.getDate()
    if(day < 10) day = '0' + day
    var week = time.getDay()
    switch(week){
    case 0:  week = '日'
    break
    case 1:  week = '一'
    break
    case 2:  week = '二'
    break
    case 3:  week = '三'
    break
    case 4:  week = '四'
    break
    case 5:  week = '五'
    break
    case 6:  week = '六'
    break
    }
    var hours = time.getHours()
    if(hours < 10) hours = '0' + hours
    var minutes = time.getMinutes()
    if(minutes < 10) minutes = '0' + minutes
    var seconds = time.getSeconds()
    if(seconds < 10) seconds = '0' + seconds

    document.querySelector('.nowin .course').innerHTML='5678'
    //匹配实时课表
    //筛选符合条件的年、月
    if((year == 2012 || 2023) && (month != 2 && month != 3)){
        // 周一
        if(week == '二'){
            document.querySelector('.nowin .course').innerHTML='1234'
        }
    }else{
        document.querySelector('.nowin .course').innerHTML='5678'
    }


}











    

