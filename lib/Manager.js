const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        const number = this.officeNumber.toString().length
            
        if (number === 10) {
            return true
        } 

        return false
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;