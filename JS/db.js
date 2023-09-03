class ChessPlayer {
    constructor (name, country, rating, worldRank, gender, age) {
        this.name = name;
        this.country = country;
        this.rating = rating;
        this.worldRank = worldRank;
        this.gender = gender;
        this.age = age;
    }
}

/* Calculates the age of the GM
* @param {Date} ex. new Date("01/01/1970")
* @returns {Integer}
*/
function calculateAge(birthday) {
    let ageInMiliseconds = Math.abs(new Date() - birthday);

    return Math.floor(ageInMiliseconds / (24 * 60 * 60 * 1000 * 365));
}

const GMsMap = new Map();

GMsMap.set("magnus carlsen", new ChessPlayer(
    "Magnus Carlsen",
    "NO",
    2839,
    1,
    "M",
    calculateAge(new Date("11/30/1990"))
));

GMsMap.set("garry kasparov", new ChessPlayer(
    "Garry Kasparov",
    "RU",
    2812,
    2,
    "M",
    calculateAge(new Date("04/13/1963"))
));

GMsMap.set("fabiano caruana", new ChessPlayer(
    "Fabiano Caruana",
    "US",
    2786,
    3,
    "M",
    calculateAge(new Date("07/30/1992"))
));

GMsMap.set("ding liren", new ChessPlayer(
    "Ding Liren",
    "CN",
    2780,
    5,
    "M",
    calculateAge(new Date("10/24/1992"))
));

GMsMap.set("ian nepomniachtchi", new ChessPlayer(
    "Ian Nepomniachtchi",
    "RU",
    2771,
    7,
    "M",
    calculateAge(new Date("07/14/1990"))
));

GMsMap.set("alireza firouzja", new ChessPlayer(
    "Alireza Firouzja",
    "FR",
    2777,
    6,
    "M",
    calculateAge(new Date("06/18/2003"))
));

GMsMap.set("anish giri", new ChessPlayer(
    "Anish Giri",
    "NL",
    2760,
    8,
    "M",
    calculateAge(new Date("06/28/1994"))
));

GMsMap.set("vladislav artemiev", new ChessPlayer(
    "Vladislav Artemiev",
    "RU",
    2697,
    43,
    "M",
    calculateAge(new Date("03/05/1998"))
));

GMsMap.set("vasyl ivanchuk", new ChessPlayer(
    "Vasyl Ivanchuk",
    "UA",
    2664,
    81,
    "M",
    calculateAge(new Date("03/18/1969"))
));

GMsMap.set("vincent keymer", new ChessPlayer(
    "Vincent Keymer",
    "DE",
    2717,
    29,
    "M",
    calculateAge(new Date("11/15/2004"))
));

GMsMap.set("gukesh", new ChessPlayer(
    "D Gukesh",
    "IN",
    2758,
    9,
    "M",
    calculateAge(new Date("05/29/2006"))
));

GMsMap.set("daniil dubov", new ChessPlayer(
    "Daniil Dubov",
    "RU",
    2710,
    35,
    "M",
    calculateAge(new Date("04/18/1996"))
));

GMsMap.set("hikaru nakamura", new ChessPlayer(
    "Hikaru Nakamura",
    "US",
    2780,
    4,
    "M",
    calculateAge(new Date("12/09/1987"))
));

GMsMap.set("jan-krzysztof duda", new ChessPlayer(
    "Jan-Krzysztof Duda",
    "PO",
    2726,
    25,
    "M",
    calculateAge(new Date("04/26/1998"))
));

GMsMap.set("wesley so", new ChessPlayer(
    "Wesley So",
    "US",
    2753,
    11,
    "M",
    calculateAge(new Date("10/09/1993"))
));

GMsMap.set("maxime vachier-lagrave", new ChessPlayer(
    "Maxime Vachier-Lagrave",
    "FR",
    2727,
    23,
    "M",
    calculateAge(new Date("10/21/1990"))
));

GMsMap.set("praggnanandhaa", new ChessPlayer(
    "R Praggnanandhaa",
    "IN",
    2727,
    22,
    "M",
    calculateAge(new Date("08/10/2005"))
));

GMsMap.set("levon aronian", new ChessPlayer(
    "Levon Aronian",
    "US",
    2742,
    17,
    "M",
    calculateAge(new Date("10/06/1982"))
));

GMsMap.set("shakhriyar mamedyarov", new ChessPlayer(
    "Shakhriyar Mamedyarov",
    "AZ",
    2734,
    18,
    "M",
    calculateAge(new Date("04/12/1985"))
));

GMsMap.set("viswanathan anand", new ChessPlayer(
    "Viswanathan Anand",
    "IN",
    2754,
    10,
    "M",
    calculateAge(new Date("12/11/1969"))
));

GMsMap.set("vladimir kramnik", new ChessPlayer(
    "Vladimir Kramnik",
    "RU",
    2753,
    12,
    "M",
    calculateAge(new Date("06/25/1975"))
));

GMsMap.set("teimour radjabov", new ChessPlayer(
    "Teimour Radjabov",
    "AZ",
    2745,
    16,
    "M",
    calculateAge(new Date("03/12/1987"))
));

GMsMap.set("sergey karjakin", new ChessPlayer(
    "Sergey Karjakin",
    "RU",
    2750,
    14,
    "M",
    calculateAge(new Date("01/12/1990"))
));

GMsMap.set("anatoly karpov", new ChessPlayer(
    "Anatoly Karpov",
    "RU",
    2617,
    173,
    "M",
    calculateAge(new Date("05/23/1951"))
));

GMsMap.set("richard rapport", new ChessPlayer(
    "Richard Rapport",
    "RO",
    2752,
    13,
    "M",
    calculateAge(new Date("03/25/1996"))
));

GMsMap.set("judit polgar", new ChessPlayer(
    "Judit Polgar",
    "HU",
    2675,
    71,
    "F",
    calculateAge(new Date("07/23/1976"))
));

GMsMap.set("wei yi", new ChessPlayer(
    "Wei Yi",
    "CN",
    2726,
    26,
    "M",
    calculateAge(new Date("06/02/1999"))
));