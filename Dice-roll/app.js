const btnEl = document.getElementById("roll-btn");
const diceEL = document.getElementById("dice");
const rollHistoryEL = document.getElementById("roll-history")
let historyList = [];


const rollDice = () => {
	const rollResult  = Math.floor(Math.random() * 6) + 1;
	const diceFace = getDiceFace(rollResult)
	diceEL.innerHTML = diceFace;
	historyList.push(rollResult)
	updateRollHistory()
}


const updateRollHistory = () =>{
	rollHistoryEL.innerHTML = "";
	for (let i = 0; i < historyList.length; i++){
		const listItem = document.createElement('li')
		listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
		rollHistoryEL.appendChild(listItem);
	}


}

const getDiceFace = (rollResult) => {
	switch(rollResult) { 
		case 1: 
			return '<i class="fa-solid fa-dice-one"></i>';
			
		case 2: 
			return '<i class="fa-solid fa-dice-two"></i>';
			
		case 3:
			return '<i class="fa-solid fa-dice-three"></i>';
			
		case 4:
			return '<i class="fa-solid fa-dice-four"></i>';
			
		case 5:
			return '<i class="fa-solid fa-dice-five"></i>';
			

		case 6:
			return '<i class="fa-solid fa-dice-six"></i>';
			
		default:
			return '<i class="fa-solid fa-dice"></i>';
	}
}

btnEl.addEventListener("click", () =>{
	diceEL.classList.add("roll-animation");
	setTimeout(() => { diceEL.classList.remove("roll-animation"); rollDice();} , 1000)
})