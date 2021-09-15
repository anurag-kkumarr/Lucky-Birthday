const birthDate = document.querySelector("#birth-date")
const luckyNo = document.querySelector("#lucky-no")
const checkBtn = document.querySelector("#check")
const divOutput = document.querySelector("#output")
const happy =document.querySelector(".imgHappy")
const sad = document.querySelector(".imgSad")
const privacyDiv = document.querySelector(".privacy");
const crossBtn = document.querySelector("#cross-btn");

crossBtn.addEventListener('click', ()=>{
    privacyDiv.style.display = "none";
})


let birthDateSum =0;
checkBtn.addEventListener("click", ()=>{
    const luckyNum = Number(luckyNo.value);

    if(birthDate.value === "" ||luckyNo.value ==="" ){
        divOutput.innerText = "Fill the boxes to proceed";
        
    }
    else if(luckyNum>0){
        const birthDateStr = (birthDate.value).replace(/[^\w\s]/gi, '');
        let birthDateNum = Number(birthDateStr);
        birthDateSum = 0;

        while(birthDateNum!=0){
            birthDateSum += birthDateNum % 10;
            birthDateNum = Math.trunc(birthDateNum / 10);
        }
        
        const luckySum = birthDateSum + luckyNum;

        if(luckySum % luckyNum === 0){
            divOutput.innerText = "Hurray!!You are a lucky person!";
            sad.style.display = "none";
            happy.style.display = "block";
            
        }
        else {
            divOutput.innerText = "Oops!!Your birthday is not a lucky number!";
            happy.style.display = "none";
            sad.style.display = "block";
        }
    }
    else {
        divOutput.innerText = "Enter positive number for result";
    }

})