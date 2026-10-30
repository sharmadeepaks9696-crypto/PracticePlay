let marks = 75;
let grade;

if (marks >= 80 && marks <= 100) {
    grade = "A";
} else if (marks >= 70 && marks <= 79) {
    grade = "B";
} else {
    grade = "C"; // fallback for other scores
}

console.log("According to your score your grade is", grade);