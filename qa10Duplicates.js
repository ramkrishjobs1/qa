var standardsList = [
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Geometry"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Orders of Operation"},
    {"Grade": "Math 2", "Domain": "Geometry"},
    {"Grade": "Math 2", "Domain": "Geometry"}
];

var grades = new Map();
standardsList.forEach( function( item ) {
    grades.set(JSON.stringify(item), item);
});

console.log( [...grades.values()]);

/*
[
  { Grade: 'Math K', Domain: 'Counting & Cardinality' },
  { Grade: 'Math K', Domain: 'Geometry' },
  { Grade: 'Math 1', Domain: 'Counting & Cardinality' },
  { Grade: 'Math 1', Domain: 'Orders of Operation' },
  { Grade: 'Math 2', Domain: 'Geometry' }
]
*/