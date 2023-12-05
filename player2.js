const data = [
    {
        name: "player1",
        dob: 2000,
        goals: {
            2011: 1,
            2012: 5,
            2013: 6,
            2014: 7,
            2015: 4
        },
        study: [
            { year: 2011, subjects: { a: "A+", b: "B+", c: "A" } },
            { year: 2012, subjects: { a: "B", b: "B+", c: "A" } },
            { year: 2013, subjects: { a: "C+", b: "A+", c: "B" } }
        ]
    },
    {
        name: "player2",
        dob: 2001,
        goals: {
            2011: 9,
            2012: 5,
            2013: 4,
            2014: 2,
            2015: 1
        },
        study: [
            { year: 2011, subjects: { a: "C+", b: "C+", c: "C" } },
            { year: 2012, subjects: { a: "D", b: "A+", c: "A" } },
            { year: 2013, subjects: { a: "C+", b: "B+", c: "B" } }
        ]
    },
    {
        name: "player3",
        dob: 2004,
        goals: {
            2011: 4,
            2012: 5,
            2013: 5,
            2014: 2,
            2015: 1
        },
        study: [
            { year: 2011, subjects: { a: "C+", b: "A+", c: "C" } },
            { year: 2012, subjects: { a: "A", b: "A+", c: "A" } },
            { year: 2013, subjects: { a: "C+", b: "B+", c: "B" } }
        ]
    }
];

// total scores 
// console.log(data.reduce((total, player) => {
//     console.log(player.name);
//     for(year in player.goals ) {
//         total = total + player.goals[year];
//     }
//     return total;
// }, 0));
// total scores of each player
// console.log(JSON.stringify(data.map((player) => {

//     let total = Object.values(player.goals).reduce((total, goalyear) => total + goalyear, 0);
//     return { name: player.name, total };
// })));
// who is the youngest player.
//console.log("youngest....", data.reduce((youngest, player) => youngest < player.dob ? youngest = player.dob : youngest, 0))
// who scored a or a+ in all subjects in which year

let a = data.filter((player) => {
    console.log(player.name);
    return player.study.some((reportCard) => Object.values(reportCard.subjects).every((grade) => { console.log(grade); return (grade == "A" || grade == "A+");}));
});
console.log(JSON.stringify(a))