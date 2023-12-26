var GM = getRandomGM(GMsMap);
var GMTextbox = document.getElementById("gm-textbox");
var tentativasDiv = document.getElementById("tentativas-gm");
GMTextbox.addEventListener("keyup", function (e) {
    var inputValue = GMTextbox.value.toLowerCase().trim();
    showInputFeedback(inputValue);
    if (e.key === "Enter") {
        guessGM(inputValue);
        GMTextbox.value = "";
    }
});
/* Chooses the GM to be guessed.
* @params map - Map of all GMs.
* @returns {ChessPlayer} - Random GM from set.
*/
function getRandomGM(map) {
    return Array.from(map)[Math.floor(Math.random() * map.size)][1];
}
/* Guesses the GM and shows whether it's correct or not.
* @params {string} GMName - ex. "magnus carlsen"
*/
function guessGM(GMName) {
    if (!GMsMap.get(GMName)) {
        showGameError("This GM is not on our database, sorry :(");
        return;
    }
    showGMData(GMsMap.get(GMName), GM);
    if (GMName === GM.name.toLowerCase()) {
        alert("Congratulations! You got the GM right! :)");
        window.location.reload();
    }
}
/* Shows the data on the GM the user chose.
* @params GMGuess - The GM guessed by the user.
* @params correctGM - The correct GM.
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
    rankDiv.textContent = "#" + GMGuess.worldRank.toString();
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
/**
 * Shows all corresponding GMs on database given the user's input.
 * @param input - User's input.
 */
function showInputFeedback(input) {
    var container = document.getElementById("gms-list-container");
    container.innerHTML = "";
    if (input === "") {
        return;
    }
    GMsMap.forEach(function (GM) {
        if (GM.name.toLowerCase().includes(input)) {
            var GMContainer = document.createElement("div");
            GMContainer.innerHTML += "\n                <div class=\"gm-list-item\">\n                    <img src=\"imgs/".concat(GM.country, ".png\" alt=\"GM's country\">\n                    <p> ").concat(GM.name, " </p>\n                </div>\n            ");
            GMContainer.addEventListener("click", function () {
                guessGM(GM.name.toLowerCase());
                GMTextbox.value = "";
                container.innerHTML = "";
            });
            container.appendChild(GMContainer);
        }
    });
}
/* Shows error to user.
* @params error - Error to be shown.
*/
function showGameError(error) {
    alert(error);
}
