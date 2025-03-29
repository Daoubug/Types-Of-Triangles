let sideOne = 100
let sideTwo = 100
let sideThree = 100

if(sideOne===sideTwo && sideOne===sideThree && sideTwo===sideThree){
    console.log("Equilateral Triangle")
}
else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree){
    console.log("Isosceles Triangle")
}
else{console.log("Scalene Triangle")}