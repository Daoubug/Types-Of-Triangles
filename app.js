let sideOne = 20
let sideTwo = 20
let sideThree = 2

if(sideOne===sideTwo && sideOne===sideThree && sideTwo===sideThree){
    console.log("Equilateral Triangle")
}
if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree){
    console.log("Isosceles Triangle")
}
else{console.log("Scalene Triangle")}