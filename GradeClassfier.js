let userGrade = document.getElementById("grade");
let grade ;
let Result = document.getElementById("result");
const calcGrade = ()=>{
    grade = parseInt(userGrade.value);
    if (grade > 85){
        Result.innerHTML = "Excellent";
    }
    else if (grade > 75){
        Result.innerHTML = "Very Good";
    }
    else if (grade > 65){
        Result.innerHTML = "Good";
    }
    else if (grade > 55 ){
        Result.innerHTML = "D" ;
    }
    else{
        Result.innerHTML = "F";
    }

}

userGrade.addEventListener("keyup" , calcGrade);