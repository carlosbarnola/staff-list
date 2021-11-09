const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Jim', 32, 'jim@gmail.com', 2022965700);

    expect(manager.name).toBe('Jim');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));    
});

test('gets manager office number as a 10 digits numbers', () => {
    const manager = new Manager('Jim', 32, 'jim@gmail.com', 2022965700);

    expect(manager.getOfficeNumber()).toBeTruthy();
})

test('gets manager role as an string', () => {
    const manager = new Manager('Jim', 32, 'jim@gmail.com', 2022965700);

    expect(manager.getRole()).toEqual('Manager');
})