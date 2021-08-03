const birthDate = document.querySelector("#birth-date")
const luckyNo = document.querySelector("#lucky-no")
const checkBtn = document.querySelector("#check")
const divOutput = document.querySelector("#output")

console.log(birthDate)
console.log(luckyNo)
console.log(checkBtn)


let birthDateSum =0;
checkBtn.addEventListener("click", ()=>{
    console.log("clicked")
    console.log(birthDate.value)
    console.log(typeof(birthDate.value))
    const birthDateStr = (birthDate.value).replace(/[^\w\s]/gi, '');
    let birthDateNum = Number(birthDateStr);
    birthDateSum = 0;

    while(birthDateNum!=0){
        birthDateSum += birthDateNum % 10;
        birthDateNum = Math.trunc(birthDateNum / 10);
    }
    const luckyNum = Number(luckyNo.value)
    const luckySum = birthDateSum + luckyNum;
    console.log(luckySum)
    console.log(Number(luckyNum))

    if(luckySum % luckyNum === 0){
        divOutput.innerText = "Hurray!!You are a lucky person!";
    }
    else {
        divOutput.innerText = "Oops!!Your birthday is not a lucky number!";
    }

}
)