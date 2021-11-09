const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jim', 32, 'jim@gmail.com', 'github.com/jimsmith');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));    
});

test('gets engineer github as a valid github', () => {
    const engineer = new Engineer('Jim', 32, 'jim@gmail.com', 'github.com/jimsmith');

    expect(engineer.gitHub).toContain('github.com/');
});

test('gets engineer role as an string', () => {
    const engineer = new Engineer('Jim', 32, 'jim@gmail.com', 'github.com/jimsmith');

    expect(engineer.getRole()).toEqual('Engineer');
});