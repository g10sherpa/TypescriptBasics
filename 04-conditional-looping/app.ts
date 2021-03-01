/*
    if-else, 
    switch,
    for, 
    while, 
    do-while
*/

//if-else
let time: number = 16;
let wishMessage: string = "";
if (time >= 0 && time <= 12) {
  wishMessage = "good morning";
} else if (time >= 13 && time <= 17) {
  wishMessage = "good afternoon";
} else if (time >= 17 && time <= 23) {
  wishMessage = "good mrning";
} else {
  wishMessage = "invalid time";
}
console.log(wishMessage);

//switch
let day: number = new Date().getDay();
let today: string = "";
switch (day) {
  case 0:
    today = "sunday";
    break;
  case 1:
    today = "monday";
    break;
  case 2:
    today = "tueday";
    break;
  case 3:
    today = "wednesday";
    break;
  case 4:
    today = "thursday";
    break;
  case 5:
    today = "friday";
    break;
  case 6:
    today = "saturday";
    break;
  default:
    today = "invalid";
    break;
}
console.log(today);

//moment
