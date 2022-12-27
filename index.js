
function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}
saturdayFun('hike');

function mondayWork(activity = "go to the office" ){
    return `This Monday, I will ${activity}.`
}
mondayWork("get a massage")

function wrapAdjective(string2 = "*"){
     return function (string = "special"){
        return `You are ${string2}${string}${string2}!`
    }
}
wrapAdjective();