//[{"name":"player1","year":2012,"goals":12},{"name":"player2","year":2012,"goals":6},{"name":"player1","year":2013,"goals":5},{"name":"player2","year":2013,"goals":7},{"name":"player1","year":2014,"goals":11},{"name":"player2","year":2014,"goals":14},{"name":"player1","year":2015,"goals":3},{"name":"player2","year":2015,"goals":8},{"name":"player1","year":2016,"goals":15},{"name":"player2","year":2016,"goals":18},{"name":"player1","year":2016,"goals":15},{"name":"player2","year":2016,"goals":18}]
const playersInfo1 = [{
    "name": "player1",
    "year": 2012,
    "goals": 12
},
{
    "name": "player2",
    "year": 2012,
    "goals": 6
},
{
    "name": "player1",
    "year": 2013,
    "goals": 5
},
{
    "name": "player2",
    "year": 2013,
    "goals": 7
},
{
    "name": "player1",
    "year": 2014,
    "goals": 11
},
{
    "name": "player2",
    "year": 2014,
    "goals": 14
},
{
    "name": "player1",
    "year": 2015,
    "goals": 3
},
{
    "name": "player2",
    "year": 2015,
    "goals": 8
},
{
    "name": "player1",
    "year": 2016,
    "goals": 15
},
{
    "name": "player2",
    "year": 2016,
    "goals": 18
},
{
    "name": "player1",
    "year": 2016,
    "goals": 15
},
{
    "name": "player2",
    "year": 2016,
    "goals": 18
}
]




const playersInfo = [{
    "name": "player1",
    "score": [
        {
            "year": 2012,
            "goals": 12
        },
        {
            "year": 2013,
            "goals": 6
        },
        {
            "year": 2014,
            "goals": 18
        },
        {
            "year": 2015,
            "goals": 5
        },
        {
            "year": 2016,
            "goals": 16
        },
        {
            "year": 2017,
            "goals": 4
        },
        {
            "year": 2018,
            "goals": 7
        }
    ]

},
{
    "name": "player2",
    "score": [
        {
            "year": 2012,
            "goals": 6
        },
        {
            "year": 2013,
            "goals": 7
        },
        {
            "year": 2014,
            "goals": 12
        },
        {
            "year": 2015,
            "goals": 8
        },
        {
            "year": 2016,
            "goals": 9
        },
        {
            "year": 2017,
            "goals": 1
        },
        {
            "year": 2018,
            "goals": 12
        }
    ]
}
]

//Find the total goals scored by 'player2' fter 2013
function findTotal(name,startYear) {
    var totalScore = 0;
    playersInfo.forEach((detail) => {
        if (detail.name === name) {
            totalScore = detail.score.reduce((ts, goalDetail) => {
                let total = goalDetail.year > startYear ? ts + goalDetail.goals : ts;
                return total;
            },0);            
        }

    });
    return totalScore;
}

console.log(findTotal('player2', 2013));



