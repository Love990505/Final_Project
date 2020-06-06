let topicsArray = [
    "背單字",
    "寫多益模擬試題",
    "休息一次",
    "寫多益模擬試題",
    "背單字",
    "背單字",
    "考多益證照"
]

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){  
    //一次設定好月分與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，全部分為0
    startDate.setHours(0);   
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//在還沒選擇時間的時候，設第一天的起始值
setMonthAndDay(4,1);


