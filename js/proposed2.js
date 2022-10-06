const stages = [
    {
        id: 1,
        name: "Ancho-V Games",
        ruleSet: "Turf War",
        ruleSetDescription:
            "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
        id: 7,
        name: "Inkblot Art Academy",
        ruleSet: "Turf War",
        ruleSetDescription:
            "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
        id: 12,
        name: "Scorch Gorge",
        ruleSet: "Turf War",
        ruleSetDescription:
            "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
        id: 16,
        name: "Hagglefish Market",
        ruleSet: "Turf War",
        ruleSetDescription:
            "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",
    },
    {
        id: 19,
        name: "Sockeye Station",
        ruleSet: "Salmon Run",
        ruleSetDescription:
            "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
        id: 22,
        name: "Gone Fission Hydroplant",
        ruleSet: "Salmon Run",
        ruleSetDescription:
            "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
        id: 24,
        name: "Lost Outpost",
        ruleSet: "Salmon Run",
        ruleSetDescription:
            "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
    {
        id: 26,
        name: "Ruins of Ark Polaris",
        ruleSet: "Salmon Run",
        ruleSetDescription:
            "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",
    },
];

const items = [];

const foundStage = stages.find((stage) => {
    return stage.ruleSet === "Turf War";
});
const foundStage2 = stages.find((stage) => {
    return stage.ruleSet === "Salmon Run";
});


items.push(foundStage);
items.push(foundStage2);

console.log(items);