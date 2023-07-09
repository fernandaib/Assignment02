let grade = Number(prompt("Enter a number between 1 and 100 "));
if (grade >=90 && grade <= 100){
    document.write("Your grade is A");
} else if (grade >= 80 && grade < 90){
    document.write("Your grade is B");
} else if (grade >= 70 && grade < 80){
    document.write("Your grade is C");
}else if (grade >= 60 && grade < 70){
    document.write("Your grade is D");
}else if (grade < 60){
    document.write("Your grade is F");
}else{
    document.write("Your number is out of range. You must enter a number between 1 and 100");
}