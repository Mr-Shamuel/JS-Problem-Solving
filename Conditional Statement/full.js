// qus no 1
const a = 15;
const b = 151;

a === b ? console.log("Number Equal") : console.log("Number not Equal");


// qus no 2
const y = 5;
y % 2 === 0 ? console.log("even") : console.log("odd");

// qus no 3
const x = 0;
x > 0 ? console.log("Positive") : x < 0 ? console.log("Negative") : console.log("zero");

// qus no 4

const z = 2011;
(z % 400 === 0) ? console.log("Leap year") : (z % 4 == 0 && z % 100 != 0) ? console.log("Leap year") : console.log("Not a leap year@@@");


// question 5
const num = 10;
num >= 18 ? console.log("Congratulation. You are eligible for casting your vote.") : console.log("Sorry you can vote after " + (18 - num) + " years");


// qus no 6
const x1 = -5;
x1 > 0 ? console.log("The value of n = 1") : x1 === 0 ? console.log("The value of n = 0") : console.log("The value of n = -1");

// qus no 7
const x2 = 135;
x2 > 165 ? console.log("Tall") : x1 === 150 ? console.log("Average Height") : console.log("Dwarf");

// qus no 8
const p = 12;
const q = 25;
const r = 52;
(q > q && p > r) ? console.log("1st number is gretest among three") : (q > p && q > r) ? console.log("2nd number is gretest among three") : (r > p && r > q) ? console.log("3rd number is gretest among three") : console.log("Numbers are Equal!!");



// qus no 9

const c = 7;
const d = 9;
(c > 0 && d > 0) ? console.log("first Co ordinate") : (c < 0 && d > 0) ? console.log("second Co ordinate") : (c < 0 && d < 0) ? console.log("third Co ordinate") : console.log("fourth Co ordinate");

// qus 10
const math = 65;
const phy = 55;
const chem = 50;
const threeSub = math + phy + chem;
const twoSub = math + phy;


if (math >= 65 && phy >= 55 && chem >= 50) {
    if (threeSub >= 190 || twoSub >= 140) {
        console.log("The candidate is eligible for admission");

    } else {
        console.log("The candidate is not eligible.")

    }

}
else {
    console.log("The candidate is not eligible.")

}

// qus 11


const roll = 784;
const name = 'james';
const physics = 70;
const chemistry = 80;
const computer = 90;
const total_Mark = physics + chemistry + computer;
const parcentage = total_Mark / 3.0;

if (parcentage >= 60) {
    console.log("Division: First division");
}
else {
    console.log("Division: Fail");
}
console.log("ROll :", roll);
console.log("Name :", name);
console.log("Physics :", physics);
console.log("Chemeistry :", chemistry);
console.log("Computer :", computer);
console.log("Total Mark :", total_Mark);
console.log("parcentage:", parcentage);


// qus 13
const temp = 12;
temp < 0 ? console.log("Freezing Weather")
    : temp > 0 && temp < 10 ? console.log("Very cold weather")
        : temp > 10 && temp < 20 ? console.log("Cold weather")
            : temp > 20 && temp < 30 ? console.log("Normal in Temp")
                : temp > 30 && temp < 40 ? console.log("Its Hot")
                    : console.log("Its Hot");

// qus 14
const linea = 50;
const lineb = 50;
const linec = 60;
linea == lineb && lineb == linec ? console.log("Equilateral")
    : linea == lineb || linea == linec || lineb == linec ? console.log("Isosceles ") : console.log("scalene ");


//  qus 15
const angle_a = 40;
const angle_b = 55;
const angle_c = 65;
const totalAngle = angle_a + angle_b + angle_c;
const perfectAngle = 180;
totalAngle === perfectAngle ? console.log("he triangle is valid") : console.log("The triangle is not valid");

// qus 16
const character = "i";
(character >= 'a' && character <= 'z') || character >= "A" && character <= "Z" ? console.log("Alphabets") : character >= '0' && character <= '10' ? console.log("digit") : console.log("special Character");
// qus 17
const character2 = "i";
(character2 == 'a' || character2 == 'e' || character2 == 'i' || character2 == 'o' || character2 == 'u') || (character2 == 'A' || character2 == 'E' || character2 == 'I' || character2 == 'O' || character2 == 'U') ? console.log("vowel") : console.log("Consonenet");


// qus 18

const kenaDam = 700;
const bikri = 200;

kenaDam > bikri ? console.log("loss " + (kenaDam - bikri)) : kenaDam < bikri ? console.log("porfit: " + (bikri - kenaDam)) : console.log("no porfit no loss");


// qus 20
const grade = "A";
grade === 'E' ? console.log("Excellent") : grade === 'V' ? console.log("Very Good") : grade === 'G' ? console.log("Good") : grade === 'A' ? console.log("Average") : console.log("fail");


//  qus 21
const day = 7;

switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    default:
        console.log("Friday");
        break;



}

//  qus 22
const Digit = 7;

switch (Digit) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;

    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid");
        break;



}

//  qus 23

const month = 12;
switch (month) {
    case 1:
        console.log("January\n");
        break;
    case 2:
        console.log("February\n");
        break;
    case 3:
        console.log("March\n");
        break;
    case 4:
        console.log("April\n");
        break;
    case 5:
        console.log("May\n");
        break;
    case 6:
        console.log("June\n");
        break;
    case 7:
        console.log("July\n");
        break;
    case 8:
        console.log("August\n");
        break;
    case 9:
        console.log("September\n");
        break;
    case 10:
        console.log("October\n");
        break;
    case 11:
        console.log("November\n");
        break;
    case 12:
        console.log("December\n  ");
        break;
    default:
        console.log("invalid Month number. \nPlease try again ....\n");
        break;
}

//  qus 24
const Number_of_Month = 2;
switch (Number_of_Month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

        console.log("31 days\n");
        break;
    case 2:
        
	       console.log("The 2nd month is a February and have 28 days. \n");
	       console.log("in leap year The February month  Have 29 days.\n");
	       break;
    case 4:
    case 6:
    case 9:
    case 11:

        console.log("30 Days\n  ");
        break;
    default:
        console.log("invalid Month number. \nPlease try again ....\n");
        break;
}




















