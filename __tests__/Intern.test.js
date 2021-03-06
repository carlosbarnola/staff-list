const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Jim', 32, 'jim@gmail.com', 'GW University');

    expect(intern.name).toBe('Jim');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));    
});

test('gets Intern school name as a string', () => {
    const intern = new Intern('Jim', 32, 'jim@gmail.com', 'GW University');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets Intern role as an string', () => {
    const intern = new Intern('Jim', 32, 'jim@gmail.com', 'GW University');

    expect(intern.getRole()).toEqual('Intern');
});