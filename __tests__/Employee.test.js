const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Jim', 32, 'jim@gmail.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

test('gets employee name as an string', () => {
    const employee = new Employee('Jim', 32, 'jim@gmail.com');

    expect(employee.getName()).toBe('Jim');
})

test('gets id as a number', () => {
    const employee = new Employee('Jim', 32, 'jim@gmail.com');

    expect(employee.getId()).toEqual(32);
})

test('gets employee email', () => {
    const employee = new Employee('Jim', 32, 'jim@gmail.com');

    expect(employee.getEmail()).toEqual('jim@gmail.com');
})

test('gets employee role as an string', () => {
    const employee = new Employee('Jim', 32, 'jim@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})