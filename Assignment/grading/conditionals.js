const marks = 55;
let grade ;
if (marks >= 90){
    grade = 'A grade';
    } else if (marks >=70 && marks <+ 90){
        grade = 'B garde';
    }else if (marks >=50 && marks <70){
        grade = 'C grade';
    }else {
        grade = 'F grade';
    }
    console.log(`Your grade is:${grade}`)