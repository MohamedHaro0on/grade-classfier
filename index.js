let userResponse = document.getElementById("userResponse") ,
    maxLength = 300 ,
    counter = document.getElementById("counter"),
    lettersCount , wordsCount , str ;

    
const Count = ()=>{
    str = userResponse.value.trim();
    lettersCount  = str.length ;
    wordsCount = str.split(" ");
    counter.innerHTML = ` letters count : ${lettersCount} / ${maxLength} <br/> words count : ${wordsCount.length} words`;
}

userResponse.addEventListener("input" ,Count);