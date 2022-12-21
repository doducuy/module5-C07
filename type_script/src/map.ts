let arr: any[] = [{id: 20, name: 'Ajay', salary: 30000},
    {id: 24, name: 'Vijay', salary: 35000},
    {id: 56, name: 'Rahul', salary: 32000},
    {id: 88, name: 'Raman', salary: 38000}];
let arrSalary: number[] = arr.map(function (employee) {
    return employee.salary;
});

console.log(arrSalary)
