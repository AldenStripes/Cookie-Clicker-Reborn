let totalChips = 0;
let chips = 0;
let chipsSinceLastHundo = 0;
let goldenChips = 0;
let realGoldenChips = 0;
let goldenChipCost = 100;
let numOfAutoclickers = 0;
let clickPower = 1;
let increaseClickPowerCost = 10;
let hireClickCost = 20;

function cookieMade(cookieMult) {
  chips += parseInt(cookieMult);
  totalChips += chips;
  chipsSinceLastHundo += parseInt(cookieMult);
  if (Math.floor(chips / 100)>goldenChips) {
      goldenChips = Math.floor(chips / 100);
  }
  if (chipsSinceLastHundo > 100) {
      document.getElementById("cookieThing").src =
        "https://purepng.com/public/uploads/large/purepng.com-american-cookiecookieamericandelicioussnacksweetyummybiscuit-21525886868xdoig.png";
      chipsSinceLastHundo = 0;
  }

  if (chips > 0) { //if you remove this, it says "Chips: 0" at the start
    document.getElementById("chipsMade").innerHTML = "Chips: " + chips;
  }
  document.getElementById("prestige").innerHTML =
    "Golden Chips (every 100 chips): " + goldenChips;
  totalChips =+ chips;
}
function hiredClicker() {
  if(chips >= hireClickCost){
    chips -= hireClickCost;
    hireClickCost = Math.ceil(hireClickCost*1.5); //increase cost by 2x
    document.getElementById("chipsMade").innerHTML = "Chips: " + chips;
    document.getElementById("hireClickerID").innerHTML = hireClickCost;
    numOfAutoclickers += 1;
    document.getElementById("clickersHired").innerHTML = "Clickers hired: " + numOfAutoclickers;
    }
  }
setInterval(() => {cookieMade(numOfAutoclickers);}, 1000);

function increaseClick() {
  if (chips >= increaseClickPowerCost) {
    chips -= increaseClickPowerCost;
    increaseClickPowerCost = Math.ceil(increaseClickPowerCost * 1.5);
    clickPower = Math.ceil(clickPower * 1.2);
    document.getElementById("increaseClickID").innerHTML = increaseClickPowerCost;
    document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
  }
}

function double() {
  if (goldenChips>=5) {
    goldenChips -= 5;
    goldenChips -= (Math.floor(chips / 100)) / 2 ;
    chips *= 2;
    numOfAutoclickers *= 2;
    clickPower *= 2;
    goldenChipCost *= 2;
    document.getElementById("goldenChipCost").innerHTML = goldenChipCost;
    document.getElementById("clickersHired").innerHTML = "Clickers hired: " + numOfAutoclickers;
  
  document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
  }
  
}