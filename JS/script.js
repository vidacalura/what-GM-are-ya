var GM = getRandomGM(GMsMap);
var GMTextbox = document.getElementById("gm-textbox");
var tentativasDiv = document.getElementById("tentativas-gm");
GMTextbox.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        guessGM(GMTextbox.value.toLowerCase().trim());
});
/* Chooses the GM to be guessed
* @params {ChessPlayer[]}
* @returns {ChessPlayer}
*/
function getRandomGM(map) {
    return Array.from(map)[Math.floor(Math.random() * map.size)][1];
}
/* Guesses the GM and shows whether it's correct or not
* @params {String} ex. "magnus carlsen"
*/
function guessGM(GMName) {
    if (GMName === GM.name) {
        return;
    }
    if (!GMsMap.get(GMName)) {
        showGameError("This GM is not on our database, sorry :(");
        return;
    }
    showGMData(GMsMap.get(GMName), GM);
}
/* Shows the data on the GM the user chose
* @params {ChessPlayer}
*/
function showGMData(GMGuess, correctGM) {
    // Country
    var countryDiv = document.createElement("div");
    countryDiv.classList.add("item-gm");
    if (GMGuess.country === correctGM.country) {
        countryDiv.style.backgroundColor = "green";
    }
    var flag = document.createElement("img");
    flag.src = "./imgs/".concat(GMGuess.country, ".png");
    countryDiv.appendChild(flag);
    // Rating
    var ratingDiv = document.createElement("div");
    ratingDiv.classList.add("item-gm");
    ratingDiv.textContent = GMGuess.rating.toString();
    if (GMGuess.rating === correctGM.rating) {
        ratingDiv.style.backgroundColor = "green";
    }
    else if (GMGuess.rating > correctGM.rating) {
        ratingDiv.textContent += "↓";
    }
    else {
        ratingDiv.textContent += "↑";
    }
    // Rank
    var rankDiv = document.createElement("div");
    rankDiv.classList.add("item-gm");
    rankDiv.textContent = GMGuess.worldRank.toString();
    if (GMGuess.worldRank === correctGM.worldRank) {
        rankDiv.style.backgroundColor = "green";
    }
    else if (GMGuess.worldRank > correctGM.worldRank) {
        rankDiv.textContent += "↑";
    }
    else {
        rankDiv.textContent += "↓";
    }
    // Gender
    var genderDiv = document.createElement("div");
    genderDiv.classList.add("item-gm");
    genderDiv.textContent = GMGuess.gender;
    if (GMGuess.gender === correctGM.gender) {
        genderDiv.style.backgroundColor = "green";
    }
    else {
        genderDiv.style.backgroundColor = "red";
    }
    // Age
    var ageDiv = document.createElement("div");
    ageDiv.classList.add("item-gm");
    ageDiv.textContent = GMGuess.age.toString();
    if (GMGuess.age === correctGM.age) {
        ageDiv.style.backgroundColor = "green";
    }
    else if (GMGuess.age > correctGM.age) {
        ageDiv.textContent += "↓";
    }
    else {
        ageDiv.textContent += "↑";
    }
    var wrapper = document.createElement("div");
    wrapper.classList.add("itens-container");
    wrapper.appendChild(countryDiv);
    wrapper.appendChild(ratingDiv);
    wrapper.appendChild(rankDiv);
    wrapper.appendChild(genderDiv);
    wrapper.appendChild(ageDiv);
    tentativasDiv.appendChild(wrapper);
}
/* Shows error to user
* @params {String}
*/
function showGameError(error) {
    alert(error);
}
