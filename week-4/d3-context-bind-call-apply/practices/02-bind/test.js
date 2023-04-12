const Employee = require('./employee');

const newEmployee = new Employee('John Wick', 'Dog Lover');

setTimeout(newEmployee.sayName.bind(newEmployee),2000);
setTimeout(newEmployee.sayOccupation.bind(newEmployee),3000);
