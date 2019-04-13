//Import Conquest of Cards Card Object
var ConquestOfCards = require("./conquest-card-obj");
var Conquest = ConquestOfCards.Conquest;

//Default Card Pack:

var defaultCards = {
    Venigland: new Conquest({
        name: "Venigland",
        rating: 43,
        type: "Stellar",
        desc: "A parasitical life form found in the Octarean Sector, known to locate and absorb powerless, skilled fighters.",
        health: 35,
        move1: {
            name: "Leech",
            dmg: 5,
            uses: 15
        },
        move2: {
            name: "Venomous Infliction",
            dmg: 15,
            uses: 2,
            special: "Poison"
        },
        move3: false,
        bonusType: "Skilled",
        rarity: 0
    }),

    Octaeus: new Conquest({
        name: "Lord Octaeus",
        rating: 59,
        type: "Stellar",
        desc: "King and Supreme Ruler of the Octarean Sector, promoting anarchy while still exerting control over its inhabitants.",
        health: 30,
        move1: {
            name: "Executive Order",
            dmg: 5,
            uses: 15
        },
        move2: {
            name: "Biochemical Research",
            dmg: 20,
            uses: 1,
            special: "*Biochemical Accumulation"
        },
        move3: {
            name: "Nine Commandments",
            dmg: 9,
            uses: 9
        },
        bonusType: "Genetic",
        rarity: 1
    }),

    Archaeus: new Conquest({
        name: "Archaeus Tetheros",
        rating: 35,
        type: "Skilled",
        desc: "Hero of the Genevan Sector, Archaeus found himself mystically summoned to the Octarean Sector by the vile sorcerer Exeon V. Trapped in a foreign galaxy, Archaeus strives to become a hero to the civilians of Octarean.",
        health: 35,
        move1: {
            name: "Terran Shotgun",
            dmg: 5,
            uses: 10
        },
        move2: {
            name: "One Punch",
            dmg: 25,
            uses: 1,
            special: "Bruises"
        },
        move3: false,
        bonusType: "Mystic",
        rarity: 0
    }),

    Overkill: new Conquest({
        name: "Overkill",
        rating: 100,
        type: "Tech",
        desc: "19-year-old Joshua Rex designed a tech suit that could end crime throughout the Genevan world known as Terra, or Earth; he decided to use it to become a mercenary, instead.",
        health: 70,
        move1: {
            name: "Fusion Blasters",
            dmg: 10,
            uses: 30
        },
        move2: {
            name: "Radiative Fission Core Expulsion",
            dmg: 50,
            uses: 1,
            special: "Disease"
        },
        move3: false,
        bonusType: "Genetic",
        rarity: 1
    }),

    Prime: new Conquest({
        name: "Prime The Conqueror",
        rating: 110,
        type: "Tech",
        desc: "Conqueror of 729,000 planets, Prime crushes opponents in his path with superior technology and unnecessarily rough force.",
        health: 250,
        move1: {
            name: "Brutal Genocide",
            dmg: 10,
            uses: 350
        },
        move2: {
            name: "Automatic Disownment",
            dmg: 50,
            uses: 2,
            special: "None"
        },
        move3: false,
        bonusType: "Mystic",
        rarity: 1
    })
}

//Octarean Expansion Pack 1:

var octareanExpansion1 = {
    Venigland: new Conquest({
        name: "Venigland",
        rating: 212,
        type: "Stellar",
        desc: "A parasitical life form found in the Octarean Sector, known to locate and absorb powerless, skilled fighters.",
        health: 350,
        move1: {
            name: "Hyper-Leech",
            dmg: 30,
            uses: 15
        },
        move2: {
            name: "Enhanced Absorption",
            dmg: 150,
            uses: 2,
            special: "*Reflection"
        },
        move3: false,
        bonusType: "Skilled",
        rarity: 1
    }),

    Octaeus: new Conquest({
        name: "Lord Octaeus",
        rating: 232,
        type: "Stellar",
        desc: "King and Supreme Ruler of the Octarean Sector, promoting anarchy while still exerting control over its inhabitants.",
        health: 310,
        move1: {
            name: "Chaotic Massacre",
            dmg: 50,
            uses: 15
        },
        move2: {
            name: "Tier-2 Biochemical Research",
            dmg: 0,
            uses: 10,
            special: "*Biochemical Accumulation"
        },
        move3: {
            name: "{2}Biochemical Warfare",
            dmg: 70,
            uses: 10
        },
        bonusType: "Genetic",
        rarity: 2
    }),

    Archaeus: new Conquest({
        name: "Archaeus Tetheros",
        rating: 350,
        type: "Skilled",
        desc: "Hero of the Genevan Sector, Archaeus found himself mystically summoned to the Octarean Sector by the vile sorcerer Exeon V. Trapped in a foreign galaxy, Archaeus strives to become a hero to the civilians of Octarean.",
        health: 560,
        move1: {
            name: "Terran Shurikens",
            dmg: 15,
            uses: 100
        },
        move2: {
            name: "Carcinogenic Blades",
            dmg: 75,
            uses: 10,
            special: "Disease"
        },
        move3: {
            name: "Terran Meme-Distraction",
            dmg: 175,
            uses: 1
        },
        bonusType: "Mystic",
        rarity: 2
    })


}


//Export Cards:

module.exports = {
    default: defaultCards,
    octExp: {
        I: octareanExpansion1
    }
}