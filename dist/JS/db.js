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
    2835,
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
    2782,
    4,
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
    2779,
    6,
    "M",
    calculateAge(new Date("07/14/1990"))
));

GMsMap.set("alireza firouzja", new ChessPlayer(
    "Alireza Firouzja",
    "FR",
    2777,
    7,
    "M",
    calculateAge(new Date("06/18/2003"))
));

GMsMap.set("anish giri", new ChessPlayer(
    "Anish Giri",
    "NL",
    2769,
    8,
    "M",
    calculateAge(new Date("06/28/1994"))
));

GMsMap.set("tari aryan", new ChessPlayer(
    "Aryan Tari",
    "NO",
    2629,
    142,
    "M",
    calculateAge(new Date("06/04/1999"))
));

GMsMap.set("vladislav artemiev", new ChessPlayer(
    "Vladislav Artemiev",
    "RU",
    2698,
    42,
    "M",
    calculateAge(new Date("03/05/1998"))
));

GMsMap.set("vasyl ivanchuk", new ChessPlayer(
    "Vasyl Ivanchuk",
    "UA",
    2672,
    76,
    "M",
    calculateAge(new Date("03/18/1969"))
));

GMsMap.set("vincent keymer", new ChessPlayer(
    "Vincent Keymer",
    "DE",
    2701,
    38,
    "M",
    calculateAge(new Date("11/15/2004"))
));

GMsMap.set("luis paulo supi", new ChessPlayer(
    "Luis Paulo Supi",
    "BR",
    2582,
    318,
    "M",
    calculateAge(new Date("06/25/1996"))
));

GMsMap.set("gukesh", new ChessPlayer(
    "D Gukesh",
    "IN",
    2751,
    13,
    "M",
    calculateAge(new Date("05/29/2006"))
));

GMsMap.set("alexandr fier", new ChessPlayer(
    "Alexandr Fier",
    "BR",
    2600,
    231,
    "M",
    calculateAge(new Date("03/11/1988"))
));

GMsMap.set("daniil dubov", new ChessPlayer(
    "Daniil Dubov",
    "RU",
    2716,
    30,
    "M",
    calculateAge(new Date("04/18/1996"))
));

GMsMap.set("hikaru nakamura", new ChessPlayer(
    "Hikaru Nakamura",
    "US",
    2787,
    3,
    "M",
    calculateAge(new Date("12/09/1987"))
));

GMsMap.set("jan-krzysztof duda", new ChessPlayer(
    "Jan-Krzysztof Duda",
    "PO",
    2732,
    22,
    "M",
    calculateAge(new Date("04/26/1998"))
));

GMsMap.set("henrique mecking", new ChessPlayer(
    "Henrique Mecking",
    "BR",
    2553,
    464,
    "M",
    calculateAge(new Date("01/23/1952"))
));

GMsMap.set("wesley so", new ChessPlayer(
    "Wesley So",
    "US",
    2769,
    9,
    "M",
    calculateAge(new Date("10/09/1993"))
));

GMsMap.set("maxime vachier-lagrave", new ChessPlayer(
    "Maxime Vachier-Lagrave",
    "FR",
    2739,
    20,
    "M",
    calculateAge(new Date("10/21/1990"))
));

GMsMap.set("ferenc berkes", new ChessPlayer(
    "Ferenc Berkes",
    "HU",
    2615,
    185,
    "M",
    calculateAge(new Date("08/08/1985"))
));

GMsMap.set("david navara", new ChessPlayer(
    "David Navara",
    "CZ",
    2695,
    46,
    "M",
    calculateAge(new Date("03/27/1985"))
));

GMsMap.set("praggnanandhaa", new ChessPlayer(
    "R Praggnanandhaa",
    "IN",
    2707,
    33,
    "M",
    calculateAge(new Date("08/10/2005"))
));