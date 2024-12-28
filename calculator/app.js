const resultEl = document.getElementById('result');
const btnEL = document.querySelectorAll("button");

// for (let i = 0; i < btnEL.length; i++){
//     btnEL[i].addEventListener("click", () =>{
//         console.log(btnEL[i].textContent);
//     })
// }

btnEL.forEach(btn => {
    btn.addEventListener("click", () =>{
      const btnValue =   btn.textContent;
      if (btnValue === "A/C"){
        clearResult()
      }else if(btnValue === "="){
        calcResult()
      }else{
        appendValue(btnValue);
      }
   });
    
});


const clearResult = () =>{
    resultEl.value = '';

}



const calcResult = () => {
    resultEl.value = eval(resultEl.value);

}

const appendValue = (btnValue) => {
    resultEl.value += btnValue

}