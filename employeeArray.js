//import data from 'employee.js';
const {data} = require('./employee.js')
//all
let getListOfEmployees = () => data.map(emp => emp.firstName + ' ' + emp.lastName);
//filter
let getListOfEmployeesJoinedAfter = year => data.filter(emp => {
    let joinedData = new Date(emp.joinedDate);
    return (joinedData.getFullYear() >= year);
}); 

//SUM
let accumulator = 0;
let getTotalEmployeesSalary = () => data.reduce((accumulator, currentValue) =>{  
    //console.log(accumulator);
    return accumulator + currentValue.salary
},0);

const array1 = [{salary:1}, {salary:1}, {salary:1}, {salary:1}];
const reducer = (accumulator, currentValue) => accumulator + currentValue.salary;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer,0));

//console.dir(getListOfEmployees());
//console.dir(getTotalEmployeesSalary());
//console.dir(getListOfEmployeesJoinedAfter(2014));


let getYearNoOfEmployeesList = () => data.reduce((detail,emp) => {
    let joinedYear = (new Date(emp.joinedDate)).getFullYear();
    if (!detail[joinedYear]) detail[joinedYear] = 0;
    detail[joinedYear]++;
    return detail;
},{})

console.log(getYearNoOfEmployeesList())

console.log(data.sort((a,b) => (new Date(a.joinedDate)).getTime() - (new Date(b.joinedDate)).getTime()))